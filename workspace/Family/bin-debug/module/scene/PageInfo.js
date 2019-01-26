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
var PageInfo = (function (_super) {
    __extends(PageInfo, _super);
    function PageInfo() {
        var _this = _super.call(this, 'Package1', "PageInfo") || this;
        if (_this._view) {
            _this.btnStart = _this._view.getChild("n1");
            _this.btnTeam = _this._view.getChild("n3");
            if (_this.btnStart) {
                _this.btnStart.addClickListener(_this.onClickStart, _this);
            }
            if (_this.btnTeam) {
                _this.btnTeam.addClickListener(_this.onClickTeam, _this);
            }
        }
        return _this;
    }
    PageInfo.prototype.onClickStart = function (evt) {
        this.hide();
        GameModule.gameStart();
    };
    PageInfo.prototype.onClickTeam = function (evt) {
        this.hide();
        GameModule.showTeam();
    };
    return PageInfo;
}(PageBase));
__reflect(PageInfo.prototype, "PageInfo");
//# sourceMappingURL=PageInfo.js.map