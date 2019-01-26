class RoleObject extends egret.Sprite{
	public static spritePlus:number = 0;

	// 自我属性
	private _data:egret.Bitmap;//形状
	private _direction:number;//方向
	private _speed:number;//速度
	// 场景属性
	public positionX:number;
	public positionY:number;
	// 逻辑属性
	public spriteID:number;
	

	public constructor(x:number,y:number) {
		super();
		this.graphics.beginFill(0x00ff00);
		this.graphics.drawCircle(0,0,30);
		this.graphics.endFill();
		this.init(x,y);
	}

	private init(x:number, y:number):void {
		this.positionX = x;
		this.positionY = y;
		this.refreshStagePosition();
		this.spriteID = RoleObject.spritePlus;
		RoleObject.spritePlus++;
	}

	private setDirection():void {
		this.rotation = 1;
	}

	public moving():void {
		var moveNum:number;
		var moveX:number = moveNum * Math.cos(this.rotation)
		var moveY:number = moveNum * Math.sin(this.rotation)
	}
	
	/**
	 * 玩家为中心的相对位置
	 */
	private refreshStagePosition():void {
		this.x = this.positionX - PlayerManager.inst.player.positionX + PlayerManager.inst.player.playerObject.x;//this.positionX;
		this.y = this.positionY - PlayerManager.inst.player.positionY + PlayerManager.inst.player.playerObject.y;//this.positionY;
	}

	public changePosition(positionX:number,positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
		this.refreshStagePosition();
	}

	public updateFrame():void {
		this.moving();
	}
}