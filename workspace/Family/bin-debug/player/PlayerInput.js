var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerInput = (function () {
    function PlayerInput() {
    }
    PlayerInput.leftDown = false;
    PlayerInput.rightDown = false;
    PlayerInput.speedDonw = false;
    return PlayerInput;
}());
__reflect(PlayerInput.prototype, "PlayerInput");
//# sourceMappingURL=PlayerInput.js.map