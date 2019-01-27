var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
    }
    GameModel.init = function () {
        // this.player = new Object();
        this.player = new ModelPlayer();
        this.roles = new ModelRoles();
    };
    return GameModel;
}());
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map