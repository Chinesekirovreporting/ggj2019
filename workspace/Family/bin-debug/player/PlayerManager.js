var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerManager = (function () {
    function PlayerManager() {
    }
    Object.defineProperty(PlayerManager, "inst", {
        get: function () {
            if (!PlayerManager.manager) {
                PlayerManager.manager = new PlayerManager();
            }
            return PlayerManager.manager;
        },
        enumerable: true,
        configurable: true
    });
    PlayerManager.prototype.setPlayer = function (player) {
        this.player = player;
    };
    PlayerManager.prototype.updateFrame = function () {
        this.player.updateFrame();
    };
    PlayerManager.prototype.reset = function () {
        this.player.reset();
    };
    return PlayerManager;
}());
__reflect(PlayerManager.prototype, "PlayerManager");
//# sourceMappingURL=PlayerManager.js.map