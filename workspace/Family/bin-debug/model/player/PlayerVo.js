var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PlayerVo = (function () {
    function PlayerVo() {
    }
    Object.defineProperty(PlayerVo.prototype, "isAlive", {
        get: function () {
            return this._isAlive;
        },
        set: function (value) {
            if (value == true) {
                this.oxygen = 100;
                this.points = 0;
            }
            this._isAlive = value;
        },
        enumerable: true,
        configurable: true
    });
    PlayerVo.prototype.setPosition = function (positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    };
    PlayerVo.prototype.reset = function () {
        this.positionX = 0;
        this.positionY = 0;
    };
    return PlayerVo;
}());
__reflect(PlayerVo.prototype, "PlayerVo");
//# sourceMappingURL=PlayerVo.js.map