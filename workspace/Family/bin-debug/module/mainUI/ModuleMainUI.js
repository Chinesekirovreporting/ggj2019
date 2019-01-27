var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModuleMainUI = (function () {
    function ModuleMainUI() {
        this.mainUI = fairygui.UIPackage.createObject("Package1", "MainUI").asCom;
        this.lblScore = this.mainUI.getChild("lblScore").asTextField;
        this.lblPos = this.mainUI.getChild("lblPos").asTextField;
        this.btnRestart = this.mainUI.getChild("btnRestart").asButton;
        this.hpBar = this.mainUI.getChild("hpBar").asProgress;
        this.btnRestart.addClickListener(this.onRestart, this);
        this.btnRestart.visible = false;
        this.btnLeft = this.mainUI.getChild("btnLeft").asButton;
        this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnLeftDown, this);
        this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_END, this.onBtnLeftUp, this);
        this.btnRight = this.mainUI.getChild("btnRight").asButton;
        this.btnRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnRightDown, this);
        this.btnRight.addEventListener(egret.TouchEvent.TOUCH_END, this.onBtnRightUp, this);
        this.btnSpeed = this.mainUI.getChild("btnSpeed").asButton;
        this.btnSpeed.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBtnSpeedDown, this);
        this.btnSpeed.addEventListener(egret.TouchEvent.TOUCH_END, this.onBtnSpeedUp, this);
        this.showProgress(80);
        this.showPoint(0);
    }
    ModuleMainUI.prototype.onBtnLeftDown = function () {
        PlayerInput.leftDown = true;
        PlayerInput.rightDown = false;
        console.log("leftDownbtn", PlayerInput.leftDown);
    };
    ModuleMainUI.prototype.onBtnLeftUp = function () {
        PlayerInput.leftDown = false;
        PlayerInput.rightDown = false;
    };
    ModuleMainUI.prototype.onBtnRightDown = function () {
        PlayerInput.rightDown = true;
        PlayerInput.leftDown = false;
    };
    ModuleMainUI.prototype.onBtnRightUp = function () {
        PlayerInput.rightDown = false;
        PlayerInput.leftDown = false;
    };
    ModuleMainUI.prototype.onBtnSpeedDown = function () {
        PlayerInput.speedDonw = true;
    };
    ModuleMainUI.prototype.onBtnSpeedUp = function () {
        PlayerInput.speedDonw = false;
    };
    ModuleMainUI.prototype.onRestart = function () {
        var _this = this;
        GameModule.scene.resetScene();
        this.btnRestart.visible = false;
        PlayerManager.inst.player.playerVo.oxygen = 80;
        egret.setTimeout(function () {
            PlayerManager.inst.player.playerVo.isAlive = true;
            PlayerManager.inst.player.playerVo.points = 0;
            _this.showPoint(0);
        }, this, 3000);
    };
    ModuleMainUI.prototype.showProgress = function (value) {
        this.hpBar.value = value;
    };
    ModuleMainUI.prototype.showPoint = function (value) {
        this.lblScore.text = value.toString();
    };
    ModuleMainUI.prototype.onShow = function () {
        LayerManager.mainUI.addChild(this.mainUI.displayObject);
        GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePos, this);
    };
    ModuleMainUI.prototype.onChangePos = function () {
        this.lblPos.text = Math.ceil(PlayerManager.inst.player.positionX).toString() + "  " + Math.ceil(PlayerManager.inst.player.positionY).toString();
    };
    ModuleMainUI.prototype.onExit = function () {
        LayerManager.mainUI.removeChild(this.mainUI.displayObject);
        GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePos, this);
    };
    return ModuleMainUI;
}());
__reflect(ModuleMainUI.prototype, "ModuleMainUI");
//# sourceMappingURL=ModuleMainUI.js.map