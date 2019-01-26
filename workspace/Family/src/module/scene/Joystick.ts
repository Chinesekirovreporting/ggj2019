class Joystick extends PageBase {

    public btnStart: fairygui.GButton;
    private _joystick: JoystickModule;
    private _text: fairygui.GTextField;
    public constructor() {
        super('Joystick', "Main");

        if(this._view) {

            this._text = this._view.getChild("n4").asTextField;

            this._joystick = new JoystickModule(this._view);
            this._joystick.addEventListener(JoystickModule.JoystickMoving,this.onJoystickMoving,this);
            this._joystick.addEventListener(JoystickModule.JoystickUp,this.onJoystickUp,this);
        }

        if(LayerManager.root) {
            LayerManager.root.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        }
    }

    private onTouch(e: egret.TouchEvent): void {
        if(this.isShow) {
            let halfWidth = LayerManager.root.stage.stageWidth / 2;
            if(e.stageX > halfWidth) {
                console.log('点击了加速按钮')
            }
        }
    }

    private onJoystickMoving(evt: egret.Event): void {
        if(this.isShow) {
            this._text.text = "" + evt.data;
                let angle = evt.data;
                if(angle > -45 && angle < 45) {
                    console.log('left');
                } else if(angle > 45 && angle < 135) {
                    console.log('down');
                } else if(angle > 135 && angle < 180 || angle > -180 && angle < -135) {
                    console.log('right');
                } else {
                    console.log('up');
                }
                console.log("角度",angle + 90);
                this.updatePlayerInput(angle + 90);
        }
    }



    private onJoystickUp(evt: egret.Event): void {
        if(this.isShow) {
            this._text.text = "";
        }

    }

    private updatePlayerInput(stickAngle:number):void {
        // if(stickAngle - PlayerManager.inst.player.playerObject.rotation > 0)
        PlayerManager.inst.player.playerObject.rotation = stickAngle;
    }

    private resetPlayerInput():void {
        PlayerInput.leftDown = false;
        PlayerInput.rightDown = false;
    }
}