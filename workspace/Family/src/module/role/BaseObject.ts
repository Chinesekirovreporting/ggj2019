class BaseObject extends egret.Sprite {
	public positionX:number;
	public positionY:number;

	public constructor() {
		super();
		// this.graphics.beginFill(0x123456);
		// this.graphics.drawCircle(0,0,50);
		// this.graphics.endFill();
		this.initBase();
	}

	private initBase():void {
		this.positionX = 0;
		this.positionY = 0;
	}

	public refreshStagePosition():void {
		this.x = this.positionX - PlayerManager.inst.player.positionX + PlayerManager.inst.player.playerObject.x;//this.positionX;
		this.y = this.positionY - PlayerManager.inst.player.positionY + PlayerManager.inst.player.playerObject.y;//this.positionY;
	}

	public updateFrame():void {
		this.refreshStagePosition();
	}
}