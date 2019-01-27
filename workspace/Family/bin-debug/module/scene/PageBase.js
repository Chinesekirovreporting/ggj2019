var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PageBase = (function () {
    function PageBase(packageName, comName) {
        this._view = fairygui.UIPackage.createObject(packageName, comName).asCom;
    }
    PageBase.prototype.show = function () {
        if (this._view) {
            this.isShow = true;
            fairygui.GRoot.inst.addChild(this._view);
            this._view.visible = true;
        }
    };
    PageBase.prototype.hide = function () {
        if (this._view) {
            this.isShow = false;
            this._view.visible = false;
        }
    };
    return PageBase;
}());
__reflect(PageBase.prototype, "PageBase");
//# sourceMappingURL=PageBase.js.map