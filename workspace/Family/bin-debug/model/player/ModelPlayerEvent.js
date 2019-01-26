var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ModelPlayerEvent = (function () {
    function ModelPlayerEvent() {
    }
    ModelPlayerEvent.ON_ADD_PLAYER = "ON_ADD_PLAYER";
    ModelPlayerEvent.ON_REMOVE_PLAYER = "ON_REMOVE_PLAYER";
    ModelPlayerEvent.ON_CHANGE_PLAYER_POS = "ON_CHANGE_PLAYER_POS";
    return ModelPlayerEvent;
}());
__reflect(ModelPlayerEvent.prototype, "ModelPlayerEvent");
//# sourceMappingURL=ModelPlayerEvent.js.map