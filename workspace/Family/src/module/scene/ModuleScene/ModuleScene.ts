class ModuleScene extends egret.EventDispatcher {

	public constructor() {
		super();
		this.createPlayer();
	}
	
	public onShow():void {
		LayerManager.player.addChild(PlayerManager.inst.player.playerObject);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame,this);
	}

	private createPlayer():void {
		var playerVo = GameModel.player.myPlayer;
		var playerObject:PlayerObject = new PlayerObject(0,0);
		var player:Player = new Player();
		player.playerObject = playerObject;
		player.playerVo = playerVo;
		PlayerManager.inst.setPlayer(player);
	}

	public onExit():void {
		LayerManager.player.removeChild(PlayerManager.inst.player.playerObject);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame():void {
		PlayerManager.inst.updateFrame();
		RoleManager.inst.updateFrame();
	}
}