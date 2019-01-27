var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModule = (function () {
    function GameModule() {
    }
    GameModule.init = function () {
        GameModule.scene = new ModuleScene();
        GameModule.role = new ModuleRole();
        GameModule.mainUI = new ModuleMainUI();
        GameModule.pageInfo = new PageInfo();
        GameModule.joystick = new Joystick();
        GameModule.pageTeam = new PageTeam();
        GameModule.asset = AssetManager.instance;
    };
    GameModule.gameStart = function () {
        GameModule.role.onShow();
        GameModule.scene.onShow();
        GameModule.mainUI.onShow();
        GameModule.joystick.show();
    };
    GameModule.showTitle = function () {
        GameModule.pageInfo.show();
    };
    GameModule.showTeam = function () {
        GameModule.pageTeam.show();
    };
    return GameModule;
}());
__reflect(GameModule.prototype, "GameModule");
//# sourceMappingURL=GameModule.js.map