class PlayerObject extends egret.Sprite{

	// 自我属性
	private _data:egret.Bitmap;//形状
	private _direction:number;//方向
	private _speed:number;//速度
	// 场景属性
	public positionX:number;
	public positionY:number;
	// 逻辑属性
	public turnLeftOn:boolean = false;
	public turnRightOn:boolean = false;
	

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
	}

	private setDirection():void {
		this.rotation = 1;
	}

	public excuteTurn():void {
		if(this.turnLeftOn) {
			this.rotation--;
		}else if(this.turnRightOn) {
			this.rotation++;
		}
	}

	public moving():void {
		// var moveNum:number;
		// var moveX:number = moveNum * Math.cos(this.rotation)
		// var moveY:number = moveNum * Math.sin(this.rotation)
	}

	private refreshStagePosition():void {
		this.x = GameSetting.playerCenterX;//this.positionX;
		this.y = GameSetting.playerCenterY;//this.positionY;
	}

	public changePosition(positionX:number,positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
		this.refreshStagePosition();
	}

	public updateFrame():void {
		this.excuteTurn();
		this.moving();
	}
}