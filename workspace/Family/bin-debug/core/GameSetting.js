var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameSetting = (function () {
    function GameSetting() {
    }
    GameSetting.playerCenterX = 200;
    GameSetting.playerCenterY = 200;
    return GameSetting;
}());
__reflect(GameSetting.prototype, "GameSetting");
//# sourceMappingURL=GameSetting.js.map