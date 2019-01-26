var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameSetting = (function () {
    function GameSetting() {
    }
    GameSetting.stageWidth = 1136;
    GameSetting.stageHeight = 640;
    GameSetting.playerCenterX = GameSetting.stageWidth / 2;
    GameSetting.playerCenterY = GameSetting.stageHeight / 2;
    return GameSetting;
}());
__reflect(GameSetting.prototype, "GameSetting");
//# sourceMappingURL=GameSetting.js.map