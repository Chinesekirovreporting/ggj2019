class ModuleScene extends egret.EventDispatcher {

	public idTimeout:number;
	public timer:egret.Timer = new egret.Timer(1000, Number.MAX_VALUE);

	public constructor() {
		super();
		this.createPlayer();
	}
	
	public onShow():void {
		LayerManager.player.addChild(PlayerManager.inst.player.playerObject);
		GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS,this.onChangePLayer,this);
		Root.root.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame,this);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeFunc, this);
		this.timer.start();
		this.addRole(100,100);
		// this.addRole(200,200);
		// stage.addEventListener(egret.Event.ONT)
	}

	private createPlayer():void {
		var playerVo = GameModel.player.myPlayer;
		var playerObject:PlayerObject = new PlayerObject(0,0);
		var player:Player = new Player();
		player.playerObject = playerObject;
		player.playerVo = playerVo;
		PlayerManager.inst.setPlayer(player);
	}

	private addRole(positionX:number,positionY:number):void {
		var roleVo:RoleVo = new RoleVo();
		roleVo.setPosition(positionX, positionY);
		GameModel.roles.addRole(roleVo);
	}

	private onChangePLayer():void {
		PlayerManager.inst.player.playerObject.changePosition(PlayerManager.inst.player.playerVo.positionX,PlayerManager.inst.player.playerVo.positionY);
	}

	public onExit():void {
		LayerManager.player.removeChild(PlayerManager.inst.player.playerObject);
		GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS,this.onChangePLayer,this);
		Root.root.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		egret.clearTimeout(this.idTimeout);
		this.timer.stop();
	}

	private onTimeFunc():void {
		// this.addRole();
	}

	private onEnterFrame(event:egret.Event):void {
		PlayerManager.inst.updateFrame();
		RoleManager.inst.updateFrame();
	}
}