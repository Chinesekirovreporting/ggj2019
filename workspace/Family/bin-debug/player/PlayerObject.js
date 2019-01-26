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
var PlayerObject = (function (_super) {
    __extends(PlayerObject, _super);
    function PlayerObject(x, y) {
        var _this = _super.call(this) || this;
        // 逻辑属性
        _this.turnLeftOn = false;
        _this.turnRightOn = false;
        _this.graphics.beginFill(0x00ff00);
        _this.graphics.drawCircle(0, 0, 30);
        _this.graphics.endFill();
        _this.init(x, y);
        return _this;
    }
    PlayerObject.prototype.init = function (x, y) {
        this.positionX = x;
        this.positionY = y;
        this.refreshStagePosition();
        //TEXT
        var rotation = MathUtil.getRotationByPoints(new egret.Point(45, 45), new egret.Point(0, 0));
        this.setDirection(rotation + 90);
        this._speed = 5;
    };
    /**
     * 0点顺时针
     */
    PlayerObject.prototype.setDirection = function (rotation) {
        this.rotation = rotation;
    };
    PlayerObject.prototype.excuteTurn = function () {
        if (this.turnLeftOn) {
            this.rotation--;
        }
        else if (this.turnRightOn) {
            this.rotation++;
        }
    };
    PlayerObject.prototype.moving = function () {
        var moveNum = this._speed;
        var moveRotation = this.rotation - 90;
        var moveX = moveNum * Math.cos(moveRotation / 180 * Math.PI);
        var moveY = moveNum * Math.sin(moveRotation / 180 * Math.PI);
        this.positionX += moveX;
        this.positionY += moveY;
    };
    PlayerObject.prototype.refreshStagePosition = function () {
        this.x = GameSetting.playerCenterX; //this.positionX;
        this.y = GameSetting.playerCenterY; //this.positionY;
    };
    PlayerObject.prototype.changePosition = function (positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.refreshStagePosition();
    };
    PlayerObject.prototype.updateFrame = function () {
        this.excuteTurn();
        this.moving();
    };
    return PlayerObject;
}(egret.Sprite));
__reflect(PlayerObject.prototype, "PlayerObject");
//# sourceMappingURL=PlayerObject.js.map