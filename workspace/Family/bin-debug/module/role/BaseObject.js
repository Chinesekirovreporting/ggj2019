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
var BaseObject = (function (_super) {
    __extends(BaseObject, _super);
    function BaseObject() {
        var _this = _super.call(this) || this;
        _this.graphics.beginFill(0x123456);
        _this.graphics.drawCircle(0, 0, 50);
        _this.graphics.endFill();
        _this.initBase();
        return _this;
    }
    BaseObject.prototype.initBase = function () {
        this.positionX = 0;
        this.positionY = 0;
    };
    BaseObject.prototype.refreshStagePosition = function () {
        this.x = this.positionX - PlayerManager.inst.player.positionX + PlayerManager.inst.player.playerObject.x; //this.positionX;
        this.y = this.positionY - PlayerManager.inst.player.positionY + PlayerManager.inst.player.playerObject.y; //this.positionY;
    };
    BaseObject.prototype.updateFrame = function () {
        this.refreshStagePosition();
    };
    return BaseObject;
}(egret.Sprite));
__reflect(BaseObject.prototype, "BaseObject");
//# sourceMappingURL=BaseObject.js.map