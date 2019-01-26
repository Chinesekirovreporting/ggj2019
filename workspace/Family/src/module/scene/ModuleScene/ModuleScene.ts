class ModuleScene extends egret.EventDispatcher {
	public baseObject:BaseObject

	public idTimeout:number;
	public timer:egret.Timer = new egret.Timer(1000, Number.MAX_VALUE);

	public constructor() {
		super();
		this.createPlayer();
		this.createBase();
	}
	
	public onShow():void {
		LayerManager.player.addChild(PlayerManager.inst.player.playerObject);
		LayerManager.base.addChild(this.baseObject);
		GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS,this.onChangePLayer,this);
		Root.root.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame,this);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeFunc, this);
		this.timer.start();
		this.createBalls(50);
		// this.addRole(200,200);
		// stage.addEventListener(egret.Event.ONT)
	}

	private createPlayer():void {
		var playerVo = GameModel.player.myPlayer;
		var playerObject:PlayerObject = new PlayerObject(playerVo.positionX,playerVo.positionY);
		var player:Player = new Player();
		player.playerObject = playerObject;
		player.playerVo = playerVo;
		PlayerManager.inst.setPlayer(player);
	}

	private createBalls(num:number):void {
		// var minX:number = -10000;
		// var minY:number = -10000;
		var maxX:number = 3000;
		var maxY:number = 3000;
		var x:number;
		var y:number;
		for(var i = 0; i < num; i++) {
			x = Math.random() * maxX - maxX/2;
			y = Math.random() * maxY - maxY/2;
			var roleVo:RoleVo = new RoleVo();
			roleVo.setPosition(x,y);
			GameModel.roles.addRole(roleVo);
		}
	}

	private createBase():void {
		this.baseObject = new BaseObject();
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
		LayerManager.base.removeChild(this.baseObject);
		GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS,this.onChangePLayer,this);
		Root.root.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		egret.clearTimeout(this.idTimeout);
		this.timer.stop();
	}

	private onTimeFunc():void {
		// this.addRole();
		GameModule.mainUI.onChangePos();
	}

	private onEnterFrame(event:egret.Event):void {
		PlayerManager.inst.updateFrame();
		RoleManager.inst.updateFrame();
		this.baseObject.updateFrame();
	}

	public resetScene():void {
		PlayerManager.inst.reset();
		RoleManager.inst.reset();
		this.createBalls(50);
	}
}