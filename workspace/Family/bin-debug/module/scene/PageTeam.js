var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PageTeam = (function (_super) {
    __extends(PageTeam, _super);
    function PageTeam() {
        var _this = _super.call(this, 'Package1', "PageTeam") || this;
        if (_this._view) {
            _this.btnReturn = _this._view.getChild("btnReturn");
            if (_this.btnReturn) {
                _this.btnReturn.addClickListener(_this.onClick, _this);
            }
        }
        return _this;
    }
    PageTeam.prototype.onClick = function (evt) {
        this.hide();
        GameModule.showTitle();
    };
    return PageTeam;
}(PageBase));
__reflect(PageTeam.prototype, "PageTeam");
//# sourceMappingURL=PageTeam.js.map