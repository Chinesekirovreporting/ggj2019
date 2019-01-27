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
        _this.init(x, y);
        return _this;
    }
    RoleObject.prototype.drawStone = function () {
        // this.graphics.beginFill(0xff0000);
        // this.graphics.drawCircle(0,0,50);
        // this.graphics.endFill();
        var id = Math.ceil(Math.random() * 19);
        this._data = new egret.Bitmap(RES.getRes("img_stone_" + id.toString() + "_png"));
        this._data.width = 150;
        this._data.height = 150;
        this._data.x = -75;
        this._data.y = -75;
        this.addChild(this._data);
    };
    RoleObject.prototype.drawScore = function () {
        // this.graphics.beginFill(0x00cc00);
        // this.graphics.drawCircle(0,0,30);
        // this.graphics.endFill();
        if (Math.random() < 0.5) {
            this.scoreType == 1;
            this._data = new egret.Bitmap(RES.getRes("img_score_png"));
            this._data.width = 50;
            this._data.height = 50;
            this._data.x = -25;
            this._data.y = -25;
            this.addChild(this._data);
        }
        else {
            this.scoreType == 2;
            this._data = new egret.Bitmap(RES.getRes("img_oxy_png"));
            this._data.width = 50;
            this._data.height = 50;
            this._data.x = -25;
            this._data.y = -25;
            this.addChild(this._data);
        }
    };
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
    RoleObject.prototype.reset = function () {
    };
    RoleObject.spritePlus = 0;
    return RoleObject;
}(egret.Sprite));
__reflect(RoleObject.prototype, "RoleObject");
//# sourceMappingURL=RoleObject.js.map