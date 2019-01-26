var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModuleMainUI = (function () {
    function ModuleMainUI() {
        this.mainUI = fairygui.UIPackage.createObject("Package1", "MainUI").asCom;
        this.lblScore = this.mainUI.getChild("lblScore").asTextField;
        this.lblPos = this.mainUI.getChild("lblPos").asTextField;
        this.btnRestart = this.mainUI.getChild("btnRestart").asButton;
        this.btnRestart.addClickListener(this.onRestart, this);
        this.btnRestart.visible = false;
    }
    ModuleMainUI.prototype.onRestart = function () {
        GameModule.scene.resetScene();
        this.btnRestart.visible = false;
    };
    ModuleMainUI.prototype.onShow = function () {
        LayerManager.mainUI.addChild(this.mainUI.displayObject);
        GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePos, this);
    };
    ModuleMainUI.prototype.onChangePos = function () {
        this.lblPos.text = Math.ceil(PlayerManager.inst.player.positionX).toString() + "_" + Math.ceil(PlayerManager.inst.player.positionY).toString();
    };
    ModuleMainUI.prototype.onExit = function () {
        LayerManager.mainUI.removeChild(this.mainUI.displayObject);
        GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePos, this);
    };
    return ModuleMainUI;
}());
__reflect(ModuleMainUI.prototype, "ModuleMainUI");
//# sourceMappingURL=ModuleMainUI.js.map