var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ModelPlayer = (function (_super) {
    __extends(ModelPlayer, _super);
    function ModelPlayer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    ModelPlayer.prototype.init = function () {
        this.myPlayer = new PlayerVo();
    };
    ModelPlayer.prototype.changePlayerPos = function (playerVo, positionX, positionY) {
        playerVo.setPosition(positionX, positionY);
        this.dispatchEventWith(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, false, playerVo);
    };
    return ModelPlayer;
}(egret.EventDispatcher));
__reflect(ModelPlayer.prototype, "ModelPlayer");
//# sourceMappingURL=ModelPlayer.js.map