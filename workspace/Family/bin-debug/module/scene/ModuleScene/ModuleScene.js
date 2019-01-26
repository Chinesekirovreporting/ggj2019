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
        _this.timer = new egret.Timer(1000, Number.MAX_VALUE);
        _this.createPlayer();
        return _this;
    }
    ModuleScene.prototype.onShow = function () {
        LayerManager.player.addChild(PlayerManager.inst.player.playerObject);
        GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePLayer, this);
        Root.root.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeFunc, this);
        this.timer.start();
        this.addRole(100, 100);
        // this.addRole(200,200);
        // stage.addEventListener(egret.Event.ONT)
    };
    ModuleScene.prototype.createPlayer = function () {
        var playerVo = GameModel.player.myPlayer;
        var playerObject = new PlayerObject(0, 0);
        var player = new Player();
        player.playerObject = playerObject;
        player.playerVo = playerVo;
        PlayerManager.inst.setPlayer(player);
    };
    ModuleScene.prototype.addRole = function (positionX, positionY) {
        var roleVo = new RoleVo();
        roleVo.setPosition(positionX, positionY);
        GameModel.roles.addRole(roleVo);
    };
    ModuleScene.prototype.onChangePLayer = function () {
        PlayerManager.inst.player.playerObject.changePosition(PlayerManager.inst.player.playerVo.positionX, PlayerManager.inst.player.playerVo.positionY);
    };
    ModuleScene.prototype.onExit = function () {
        LayerManager.player.removeChild(PlayerManager.inst.player.playerObject);
        GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePLayer, this);
        Root.root.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        egret.clearTimeout(this.idTimeout);
        this.timer.stop();
    };
    ModuleScene.prototype.onTimeFunc = function () {
        // this.addRole();
    };
    ModuleScene.prototype.onEnterFrame = function (event) {
        PlayerManager.inst.updateFrame();
        RoleManager.inst.updateFrame();
    };
    return ModuleScene;
}(egret.EventDispatcher));
__reflect(ModuleScene.prototype, "ModuleScene");
//# sourceMappingURL=ModuleScene.js.map