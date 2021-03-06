import {
  Injectable, ComponentRef, ApplicationRef,
  Optional, ReflectiveInjector, ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core';
import {ToastContainer} from './toast-container.component';
import {ToastOptions} from './toast-options';
import {Toast} from './toast';

@Injectable()
export class ToastsManager {
  container: ComponentRef<any>;
  private options: any = {
    dismiss: 'auto',
    toastLife: 3000,
  };
  private index = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              @Optional() options: ToastOptions) {
    if (options) {
      Object.assign(this.options, options);
    }
  }

  show(toast: Toast, options?: any): Promise<Toast> {
    return new Promise((resolve, reject) => {
      if (!this.container) {
        if (!this.appRef['_rootComponents'].length) {
          const err = new Error('Application root component cannot be found. Try accessing application reference in the later life cycle of angular app.');
          console.error(err);
          reject(err);
        }

        // get app root view component ref
        let appContainer: ViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;

        // get options providers
        let providers = ReflectiveInjector.resolve([
          {provide: ToastOptions, useValue: <ToastOptions>this.options }
        ]);

        // create and load ToastContainer
        let toastFactory = this.componentFactoryResolver.resolveComponentFactory(ToastContainer);
        let childInjector = ReflectiveInjector.fromResolvedProviders(providers, appContainer.parentInjector);
        this.container = appContainer.createComponent(toastFactory, appContainer.length, childInjector);
        this.container.instance.onToastClicked = (toast: Toast) => {
          this.onToastClicked(toast);
        }
      }

      resolve(this.setupToast(toast, options));
    });
  }

  createTimeout(toastId: number, timeout?: number) {
    const life = timeout || this.options.toastLife;

    setTimeout(() => {
      this.clearToast(toastId);
    }, life);
  }

  setupToast(toast: Toast, options?: any): Toast {
     toast.id = ++this.index;

      if (options && typeof(options.messageClass) === 'string') {
        toast.messageClass = options.messageClass;
      } else if (typeof(this.options.messageClass) === 'string') {
        toast.messageClass = this.options.messageClass;
      }

      if (options && typeof(options.titleClass) === 'string') {
        toast.titleClass = options.titleClass;
      } else if (typeof(this.options.titleClass) === 'string') {
        toast.titleClass = this.options.titleClass;
      }

      if (options && typeof(options.enableHTML) === 'boolean') {
        toast.enableHTML = options.enableHTML;
      } else if (typeof(this.options.enableHTML) === 'boolean') {
        toast.enableHTML = this.options.enableHTML;
      }

      if (options && typeof(options.dismiss) === 'string') {
        toast.dismiss = options.dismiss;
      } else if (options && typeof(options.autoDismiss) === 'boolean') {
        // backward compatibility
        toast.dismiss = options.autoDismiss ? 'auto' : 'click';
      } else {
        toast.dismiss = this.options.dismiss;
      }

      if (options && typeof(options.toastLife) === 'number') {
        toast.dismiss = 'auto';
        this.createTimeout(toast.id, options.toastLife);
      } else if (toast.dismiss === 'auto') {
        this.createTimeout(toast.id);
      }

      this.container.instance.addToast(toast);

      return toast;
  }

  onToastClicked(toast: Toast) {
    if (toast.dismiss === 'click') {
      this.clearToast(toast.id);
    }
  }

  dismissToast(toast: Toast) {
    this.clearToast(toast.id);
  }

  clearToast(toastId: number) {
    if (this.container) {
      let instance = this.container.instance;
      instance.removeToast(toastId);
      if (!instance.anyToast()) {
        this.dispose();
      }
    }
  }

  clearAllToasts() {
    if (this.container) {
      let instance = this.container.instance;
      instance.removeAllToasts();
      this.dispose();
    }
  }

  dispose() {
    // using timeout to allow animation to finish
    setTimeout(() => {
      if (this.container && !this.container.instance.anyToast()) {
        this.container.destroy();
        this.container = null;
      }
    }, 2000);
  }

  error(message: string, title?: string, options?: any): Promise<Toast> {
    let toast = new Toast('error', message, title);
    return this.show(toast, options);
  }

  info(message: string, title?: string, options?: any): Promise<Toast> {
    let toast = new Toast('info', message, title);
    return this.show(toast, options);
  }

  success(message: string, title?: string, options?: any): Promise<Toast> {
    let toast = new Toast('success', message, title);
    return this.show(toast, options);
  }

  warning(message: string, title?: string, options?: any): Promise<Toast> {
    let toast = new Toast('warning', message, title);
    return this.show(toast, options);
  }

  // allow user define custom background color and image
  custom(message: string, title?: string, options?: any): Promise<Toast> {
    let toast = new Toast('custom', message, title);
    return this.show(toast, options);
  }
}
