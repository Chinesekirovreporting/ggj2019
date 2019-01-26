var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModule = (function () {
    function GameModule() {
    }
    GameModule.init = function () {
        GameModule.scene = new ModuleScene();
        GameModule.role = new ModuleRole();
    };
    return GameModule;
}());
__reflect(GameModule.prototype, "GameModule");
//# sourceMappingURL=GameModule.js.map