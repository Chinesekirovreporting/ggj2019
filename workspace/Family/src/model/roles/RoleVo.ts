class RoleVo {
	private _isAlive:boolean;
	public positionX :number;
	public positionY:number;

	public spriteID:number;
	public roleType:number;

	public constructor() {
	}

	public setPosition(positionX:number,positionY:number,type:number = 1):void {
		this.positionX = positionX;
		this.positionY = positionY;
		this.roleType = type;
	}

	public get isBall():boolean {
		return this.roleType == 1;
	}

	public reset():void {

	}
}