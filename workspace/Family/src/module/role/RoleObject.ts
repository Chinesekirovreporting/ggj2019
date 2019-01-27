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
	public scoreType:number;

	public constructor(x:number,y:number) {
		super();
		this.init(x,y);
	}

	public drawStone():void {
		// this.graphics.beginFill(0xff0000);
		// this.graphics.drawCircle(0,0,50);
		// this.graphics.endFill();
		var id:number = Math.ceil(Math.random() * 19);
		this._data = new egret.Bitmap(RES.getRes("img_stone_" + id.toString() + "_png"));
		this._data.width = 150;
		this._data.height = 150;
		this._data.x = -75;
		this._data.y = -75;
		this.addChild(this._data);
	}

	public drawScore():void {
		// this.graphics.beginFill(0x00cc00);
		// this.graphics.drawCircle(0,0,30);
		// this.graphics.endFill();
		if(Math.random() < 0.5) {
			this.scoreType == 1;
			this._data = new egret.Bitmap(RES.getRes("img_score_png"));
			this._data.width = 50;
			this._data.height = 50;
			this._data.x = -25;
			this._data.y = -25;
			this.addChild(this._data);
		}else {
			this.scoreType == 2;
			this._data = new egret.Bitmap(RES.getRes("img_oxy_png"));
			this._data.width = 50;
			this._data.height = 50;
			this._data.x = -25;
			this._data.y = -25;
			this.addChild(this._data);
		}
	}

	private init(positionX:number, positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
		this.refreshStagePosition();
		this.spriteID = RoleObject.spritePlus;
		RoleObject.spritePlus++;
		//TEXT
		this.setDirection(-90);
		this._speed = 0;
	}

	private setDirection(rotation:number):void {
		this.rotation = rotation;
	}

	public moving():void {
		var moveNum:number = this._speed;
		var moveRotation  = this.rotation - 90;
		var moveX:number = moveNum * Math.cos(moveRotation/180*Math.PI);
		var moveY:number = moveNum * Math.sin(moveRotation/180*Math.PI);
		this.positionX += moveX;
		this.positionY += moveY;
	}
	
	/**
	 * 玩家为中心的相对位置
	 */
	public refreshStagePosition():void {
		this.x = this.positionX - PlayerManager.inst.player.positionX + PlayerManager.inst.player.playerObject.x;//this.positionX;
		this.y = this.positionY - PlayerManager.inst.player.positionY + PlayerManager.inst.player.playerObject.y;//this.positionY;
	}

	public changePosition(positionX:number, positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
		this.refreshStagePosition();
	}

	public updateFrame():void {
		this.moving();
		this.refreshStagePosition();
	}

	public reset():void {
		
	}
}