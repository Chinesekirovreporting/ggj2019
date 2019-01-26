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
        _this.graphics.beginFill(0xff0000);
        _this.graphics.drawRect(0, 0, 50, 100);
        _this.graphics.endFill();
        _this.init(x, y);
        return _this;
    }
    RoleObject.prototype.init = function (positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.refreshStagePosition();
        this.spriteID = RoleObject.spritePlus;
        RoleObject.spritePlus++;
        //TEXT
        this.setDirection(-90);
        this._speed = 0;
    };
    RoleObject.prototype.setDirection = function (rotation) {
        this.rotation = rotation;
    };
    RoleObject.prototype.moving = function () {
        var moveNum = this._speed;
        var moveRotation = this.rotation - 90;
        var moveX = moveNum * Math.cos(moveRotation / 180 * Math.PI);
        var moveY = moveNum * Math.sin(moveRotation / 180 * Math.PI);
        this.positionX += moveX;
        this.positionY += moveY;
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
        this.refreshStagePosition();
    };
    RoleObject.spritePlus = 0;
    return RoleObject;
}(egret.Sprite));
__reflect(RoleObject.prototype, "RoleObject");
//# sourceMappingURL=RoleObject.js.map