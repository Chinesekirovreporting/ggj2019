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
var RoleObject = (function (_super) {
    __extends(RoleObject, _super);
    function RoleObject(x, y) {
        var _this = _super.call(this) || this;
        _this.graphics.beginFill(0x00ff00);
        _this.graphics.drawCircle(0, 0, 30);
        _this.graphics.endFill();
        _this.init(x, y);
        return _this;
    }
    RoleObject.prototype.init = function (x, y) {
        this.positionX = x;
        this.positionY = y;
        this.refreshStagePosition();
        this.spriteID = RoleObject.spritePlus;
        RoleObject.spritePlus++;
    };
    RoleObject.prototype.setDirection = function () {
        this.rotation = 1;
    };
    RoleObject.prototype.moving = function () {
        var moveNum;
        var moveX = moveNum * Math.cos(this.rotation);
        var moveY = moveNum * Math.sin(this.rotation);
    };
    /**
     * 玩家为中心的相对位置
     */
    RoleObject.prototype.refreshStagePosition = function () {
        this.x = this.positionX - PlayerManager.inst.player.positionX + PlayerManager.inst.player.playerObject.x; //this.positionX;
        this.y = this.positionY - PlayerManager.inst.player.positionY + PlayerManager.inst.player.playerObject.y; //this.positionY;
    };
    RoleObject.prototype.changePosition = function (positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.refreshStagePosition();
    };
    RoleObject.prototype.updateFrame = function () {
        this.moving();
    };
    RoleObject.spritePlus = 0;
    return RoleObject;
}(egret.Sprite));
__reflect(RoleObject.prototype, "RoleObject");
//# sourceMappingURL=RoleObject.js.map