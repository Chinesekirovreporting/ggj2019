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
var ModuleScene = (function (_super) {
    __extends(ModuleScene, _super);
    function ModuleScene() {
        var _this = _super.call(this) || this;
        _this.createPlayer();
        return _this;
    }
    ModuleScene.prototype.onShow = function () {
        LayerManager.player.addChild(PlayerManager.inst.player.playerObject);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    ModuleScene.prototype.createPlayer = function () {
        var playerVo = GameModel.player.myPlayer;
        var playerObject = new PlayerObject(0, 0);
        var player = new Player();
        player.playerObject = playerObject;
        player.playerVo = playerVo;
        PlayerManager.inst.setPlayer(player);
    };
    ModuleScene.prototype.onExit = function () {
        LayerManager.player.removeChild(PlayerManager.inst.player.playerObject);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    ModuleScene.prototype.onEnterFrame = function () {
        PlayerManager.inst.updateFrame();
        RoleManager.inst.updateFrame();
    };
    return ModuleScene;
}(egret.EventDispatcher));
__reflect(ModuleScene.prototype, "ModuleScene");
//# sourceMappingURL=ModuleScene.js.map