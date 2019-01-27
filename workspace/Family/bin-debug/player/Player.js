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
        if (this.playerVo.isAlive) {
            this.excuteInput(); //处理输入
            this.playerObject.updateFrame();
            this.textHit();
        }
    };
    Player.prototype.excuteInput = function () {
        if (PlayerInput.speedDonw) {
            this.playerObject._speed = 15;
        }
        else {
            this.playerObject._speed = 5;
        }
        if (PlayerInput.leftDown) {
            PlayerInput.rightDown = false;
            this.playerObject.turnRightOn = false;
            this.playerObject.turnLeftOn = true;
        }
        else if (PlayerInput.rightDown) {
            PlayerInput.leftDown = false;
            this.playerObject.turnLeftOn = false;
            this.playerObject.turnRightOn = true;
        }
        else {
            PlayerInput.leftDown = false;
            PlayerInput.rightDown = false;
            this.playerObject.turnLeftOn = false;
            this.playerObject.turnRightOn = false;
        }
        console.log("turnlefton", this.playerObject.turnLeftOn, "turnleftoff", this.playerObject.turnRightOn);
    };
    Player.prototype.textHit = function () {
        var objects = RoleManager.inst.roleDict;
        var role;
        for (var key in objects) {
            role = objects[key];
            if ((role.positionX - this.positionX) * (role.positionX - this.positionX) +
                (role.positionY - this.positionY) * (role.positionY - this.positionY) < 150 * 150) {
                if (role.roleVo.roleType == 1) {
                    this.playerHiting();
                }
                else if (role.roleVo.roleType == 3) {
                    this.roleHiting(role);
                }
                return true;
            }
        }
        return false;
    };
    Player.prototype.roleHiting = function (role) {
        this.playerVo.points += 100;
        GameModule.mainUI.showPoint(this.playerVo.points);
        GameModel.roles.removeRole(role.roleVo);
    };
    Player.prototype.playerHiting = function () {
        this.killPlayer();
    };
    Player.prototype.killPlayer = function () {
        this.playerVo.isAlive = false;
        GameModule.mainUI.btnRestart.visible = true;
    };
    Player.prototype.reset = function () {
        this.playerVo.reset();
        this.playerObject.reset();
    };
    return Player;
}());
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map