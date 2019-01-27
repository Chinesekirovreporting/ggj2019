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
var Joystick = (function (_super) {
    __extends(Joystick, _super);
    function Joystick() {
        var _this = _super.call(this, 'Joystick', "Main") || this;
        if (_this._view) {
            _this._text = _this._view.getChild("n4").asTextField;
            _this._joystick = new JoystickModule(_this._view);
            _this._joystick.addEventListener(JoystickModule.JoystickMoving, _this.onJoystickMoving, _this);
            _this._joystick.addEventListener(JoystickModule.JoystickUp, _this.onJoystickUp, _this);
        }
        if (LayerManager.root) {
            LayerManager.root.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouch, _this);
        }
        _this._view.visible = false;
        return _this;
    }
    Joystick.prototype.onTouch = function (e) {
        if (this.isShow) {
            var halfWidth = LayerManager.root.stage.stageWidth / 2;
            if (e.stageX > halfWidth) {
                console.log('点击了加速按钮');
            }
        }
    };
    Joystick.prototype.onJoystickMoving = function (evt) {
        if (this.isShow) {
            this._text.text = "" + evt.data;
            var angle = evt.data;
            if (angle > -45 && angle < 45) {
                console.log('left');
            }
            else if (angle > 45 && angle < 135) {
                console.log('down');
            }
            else if (angle > 135 && angle < 180 || angle > -180 && angle < -135) {
                console.log('right');
            }
            else {
                console.log('up');
            }
            console.log("角度", angle + 90);
            this.updatePlayerInput(angle + 90);
        }
    };
    Joystick.prototype.onJoystickUp = function (evt) {
        if (this.isShow) {
            this._text.text = "";
        }
    };
    Joystick.prototype.updatePlayerInput = function (stickAngle) {
        // if(stickAngle - PlayerManager.inst.player.playerObject.rotation > 0)
        PlayerManager.inst.player.playerObject.rotation = stickAngle;
    };
    Joystick.prototype.resetPlayerInput = function () {
        PlayerInput.leftDown = false;
        PlayerInput.rightDown = false;
    };
    return Joystick;
}(PageBase));
__reflect(Joystick.prototype, "Joystick");
//# sourceMappingURL=Joystick.js.map