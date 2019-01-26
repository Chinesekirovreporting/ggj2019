class PlayerVo {
	// 基础属性
	public positionX :number;
	public positionY:number;
	// 属性
	public oxygen:number; //氧气
	public points:number; //得分
	
	// 逻辑属性
	public isAlive:boolean;


	public setPosition(positionX:number,positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
	}

	public constructor() {
	}

	public reset():void {
		this.positionX = 0;
		this.positionY = 0;
	}
}