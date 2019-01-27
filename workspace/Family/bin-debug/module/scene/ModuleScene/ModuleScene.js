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
        _this.createBg();
        _this.createPlayer();
        _this.createBase();
        return _this;
    }
    ModuleScene.prototype.onShow = function () {
        var bg = new egret.Bitmap(RES.getRes("img_bg_png"));
        LayerManager.map.addChild(bg);
        LayerManager.player.addChild(PlayerManager.inst.player.playerObject);
        LayerManager.base.addChild(this.baseObject);
        GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePLayer, this);
        Root.root.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeFunc, this);
        this.timer.start();
        this.createBalls(50);
    };
    ModuleScene.prototype.createBg = function () {
        if (this.bg == null) {
            this.bg = AssetManager.instance.getBitmap('bg2_jpg', true, true);
        }
        LayerManager.bgLayer.addChild(this.bg);
    };
    ModuleScene.prototype.createPlayer = function () {
        var playerVo = GameModel.player.myPlayer;
        var playerObject = new PlayerObject(playerVo.positionX, playerVo.positionY);
        var player = new Player();
        player.playerObject = playerObject;
        player.playerVo = playerVo;
        playerVo.isAlive = true;
        PlayerManager.inst.setPlayer(player);
    };
    ModuleScene.prototype.createBalls = function (num) {
        // var minX:number = -10000;
        // var minY:number = -10000;
        var maxX = 3000;
        var maxY = 3000;
        var x;
        var y;
        for (var i = 0; i < num; i++) {
            x = Math.random() * maxX - maxX / 2;
            y = Math.random() * maxY - maxY / 2;
            if (Math.abs(PlayerManager.inst.player.positionX - x) > 200 &&
                Math.abs(PlayerManager.inst.player.positionY - y) > 200) {
                var roleVo = new RoleVo();
                roleVo.roleType = 1;
                roleVo.setPosition(x, y);
                GameModel.roles.addRole(roleVo);
                this.createScore(roleVo);
            }
        }
    };
    ModuleScene.prototype.createScore = function (ballVo) {
        var scoreVo = new RoleVo();
        scoreVo.roleType = 3;
        var x = ballVo.positionX + 50 + Math.random() * 100;
        var y = ballVo.positionY + 50 + Math.random() * 100;
        scoreVo.setPosition(x, y);
        GameModel.roles.addRole(scoreVo);
    };
    ModuleScene.prototype.createBase = function () {
        this.baseObject = new HomeSpace();
    };
    ModuleScene.prototype.onChangePLayer = function () {
        PlayerManager.inst.player.playerObject.changePosition(PlayerManager.inst.player.playerVo.positionX, PlayerManager.inst.player.playerVo.positionY);
    };
    ModuleScene.prototype.onExit = function () {
        LayerManager.player.removeChild(PlayerManager.inst.player.playerObject);
        LayerManager.map.removeChildren();
        LayerManager.base.removeChild(this.baseObject);
        GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, this.onChangePLayer, this);
        Root.root.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        egret.clearTimeout(this.idTimeout);
        this.timer.stop();
    };
    ModuleScene.prototype.onTimeFunc = function () {
        GameModule.mainUI.onChangePos();
        if (PlayerManager.inst.player.playerVo.isAlive) {
            PlayerManager.inst.player.playerVo.oxygen -= 2;
            GameModule.mainUI.showProgress(PlayerManager.inst.player.playerVo.oxygen);
        }
        if (PlayerManager.inst.player.playerVo.oxygen <= 0) {
            PlayerManager.inst.player.killPlayer();
        }
    };
    ModuleScene.prototype.onEnterFrame = function (event) {
        PlayerManager.inst.updateFrame();
        RoleManager.inst.updateFrame();
        this.baseObject.updateFrame();
    };
    ModuleScene.prototype.resetScene = function () {
        PlayerManager.inst.reset();
        RoleManager.inst.reset();
        GameModule.role.reset();
        this.createBalls(50);
    };
    return ModuleScene;
}(egret.EventDispatcher));
__reflect(ModuleScene.prototype, "ModuleScene");
//# sourceMappingURL=ModuleScene.js.map