/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('../../src/toast-container.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/platform-browser/src/security/dom_sanitization_service');
var import9 = require('../../src/toast-options');
var import10 = require('@angular/core/src/metadata/view');
var import11 = require('@angular/core/src/linker/component_factory');
var import12 = require('@angular/common/src/directives/ng_for');
var import13 = require('@angular/core/src/linker/template_ref');
var import14 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import15 = require('@angular/core/src/security');
var import16 = require('@angular/common/src/directives/ng_if');
var import17 = require('@angular/common/src/directives/ng_switch');
var renderType_ToastContainer_Host = null;
var _View_ToastContainer_Host0 = (function (_super) {
    __extends(_View_ToastContainer_Host0, _super);
    function _View_ToastContainer_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ToastContainer_Host0, renderType_ToastContainer_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ToastContainer_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('toast-container', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ToastContainer0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ToastContainer_0_4 = new import3.ToastContainer(this.parentInjector.get(import8.DomSanitizer), this.parentInjector.get(import9.ToastOptions, null));
        this._appEl_0.initComponent(this._ToastContainer_0_4, [], compView_0);
        compView_0.create(this._ToastContainer_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ToastContainer_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ToastContainer) && (0 === requestNodeIndex))) {
            return this._ToastContainer_0_4;
        }
        return notFoundResult;
    };
    return _View_ToastContainer_Host0;
}(import1.AppView));
function viewFactory_ToastContainer_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ToastContainer_Host === null)) {
        (renderType_ToastContainer_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ToastContainer_Host0(viewUtils, parentInjector, declarationEl);
}
exports.ToastContainerNgFactory = new import11.ComponentFactory('toast-container', viewFactory_ToastContainer_Host0, import3.ToastContainer);
var styles_ToastContainer = [];
var renderType_ToastContainer = null;
var _View_ToastContainer0 = (function (_super) {
    __extends(_View_ToastContainer0, _super);
    function _View_ToastContainer0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ToastContainer0, renderType_ToastContainer, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ToastContainer0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'id', 'toast-container');
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._appEl_3 = new import2.AppElement(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import13.TemplateRef_(this._appEl_3, viewFactory_ToastContainer1);
        this._NgFor_3_6 = new import12.NgFor(this._appEl_3.vcRef, this._TemplateRef_3_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._text_5
        ], [], []);
        return null;
    };
    _View_ToastContainer0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import12.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6;
        }
        return notFoundResult;
    };
    _View_ToastContainer0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_2 = this.context.toasts;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgFor_3_6.ngForOf = currVal_2;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_2, currVal_2);
            this._expr_2 = currVal_2;
        }
        if ((changes !== null)) {
            this._NgFor_3_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_3_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this.context.position;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementStyle(this._el_1, 'position', ((this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE, currVal_0) == null) ? null : this.viewUtils.sanitizer.sanitize(import15.SecurityContext.STYLE, currVal_0).toString()));
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.positionClass, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_1, 'className', currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ToastContainer0;
}(import1.AppView));
function viewFactory_ToastContainer0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ToastContainer === null)) {
        (renderType_ToastContainer = viewUtils.createRenderComponentType('/Users/dereks/Documents/PointInside/ng2-toastr/src/toast-container.component.ts class ToastContainer - inline template', 0, import10.ViewEncapsulation.None, styles_ToastContainer, {}));
    }
    return new _View_ToastContainer0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_ToastContainer0 = viewFactory_ToastContainer0;
var _View_ToastContainer1 = (function (_super) {
    __extends(_View_ToastContainer1, _super);
    function _View_ToastContainer1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ToastContainer1, renderType_ToastContainer, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ToastContainer1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import13.TemplateRef_(this._appEl_2, viewFactory_ToastContainer2);
        this._NgIf_2_6 = new import16.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_0, 'div', null);
        this._NgSwitch_4_3 = new import17.NgSwitch();
        this._text_5 = this.renderer.createText(this._el_4, '\n          ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._appEl_6 = new import2.AppElement(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this._appEl_6, viewFactory_ToastContainer3);
        this._NgSwitchCase_6_6 = new import17.NgSwitchCase(this._appEl_6.vcRef, this._TemplateRef_6_5, this._NgSwitch_4_3);
        this._text_7 = this.renderer.createText(this._el_4, '\n          ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._appEl_8 = new import2.AppElement(8, 4, this, this._anchor_8);
        this._TemplateRef_8_5 = new import13.TemplateRef_(this._appEl_8, viewFactory_ToastContainer4);
        this._NgSwitchDefault_8_6 = new import17.NgSwitchDefault(this._appEl_8.vcRef, this._TemplateRef_8_5, this._NgSwitch_4_3);
        this._text_9 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_10 = this.renderer.createText(this._el_0, '              \n      ', null);
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10
        ], [disposable_0], []);
        return null;
    };
    _View_ToastContainer1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import17.NgSwitchCase) && (6 === requestNodeIndex))) {
            return this._NgSwitchCase_6_6;
        }
        if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import17.NgSwitchDefault) && (8 === requestNodeIndex))) {
            return this._NgSwitchDefault_8_6;
        }
        if (((token === import17.NgSwitch) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._NgSwitch_4_3;
        }
        return notFoundResult;
    };
    _View_ToastContainer1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context.$implicit.title;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_2_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.$implicit.enableHTML;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgSwitch_4_3.ngSwitch = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_4 = true;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgSwitchCase_6_6.ngSwitchCase = currVal_4;
            this._expr_4 = currVal_4;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = import4.interpolate(1, 'toast-', this.context.$implicit.type, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'className', currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ToastContainer1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.dismiss(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_ToastContainer1;
}(import1.AppView));
function viewFactory_ToastContainer1(viewUtils, parentInjector, declarationEl) {
    return new _View_ToastContainer1(viewUtils, parentInjector, declarationEl);
}
var _View_ToastContainer2 = (function (_super) {
    __extends(_View_ToastContainer2, _super);
    function _View_ToastContainer2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ToastContainer2, renderType_ToastContainer, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ToastContainer2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ToastContainer2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', (this.parent.context.$implicit.titleClass || this.parent.parent.context.titleClass), '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'className', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.parent.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ToastContainer2;
}(import1.AppView));
function viewFactory_ToastContainer2(viewUtils, parentInjector, declarationEl) {
    return new _View_ToastContainer2(viewUtils, parentInjector, declarationEl);
}
var _View_ToastContainer3 = (function (_super) {
    __extends(_View_ToastContainer3, _super);
    function _View_ToastContainer3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ToastContainer3, renderType_ToastContainer, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ToastContainer3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'span', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_ToastContainer3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this.parent.parent.context.sanitizer.bypassSecurityTrustHtml(this.parent.context.$implicit.message);
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML, currVal_0));
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ToastContainer3;
}(import1.AppView));
function viewFactory_ToastContainer3(viewUtils, parentInjector, declarationEl) {
    return new _View_ToastContainer3(viewUtils, parentInjector, declarationEl);
}
var _View_ToastContainer4 = (function (_super) {
    __extends(_View_ToastContainer4, _super);
    function _View_ToastContainer4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ToastContainer4, renderType_ToastContainer, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ToastContainer4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'span', null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ToastContainer4.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', (this.parent.context.$implicit.messageClass || this.parent.parent.context.messageClass), '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'className', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.parent.context.$implicit.message, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ToastContainer4;
}(import1.AppView));
function viewFactory_ToastContainer4(viewUtils, parentInjector, declarationEl) {
    return new _View_ToastContainer4(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=toast-container.component.ngfactory.js.map