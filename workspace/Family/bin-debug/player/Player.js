var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Player = (function () {
    function Player() {
    }
    Object.defineProperty(Player.prototype, "positionX", {
        get: function () {
            return this.playerObject.positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "positionY", {
        get: function () {
            return this.playerObject.positionY;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.updateFrame = function () {
        this.excuteInput(); //处理输入
        this.playerObject.updateFrame();
    };
    Player.prototype.excuteInput = function () {
        if (PlayerInput.speedDonw) {
        }
        if (PlayerInput.leftDown) {
            PlayerInput.rightDown = false;
            this.playerObject.turnRightOn = false;
            this.playerObject.turnLeftOn = true;
        }
        if (PlayerInput.rightDown) {
            PlayerInput.leftDown = false;
            this.playerObject.turnLeftOn = false;
            this.playerObject.turnRightOn = true;
        }
    };
    return Player;
}());
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map