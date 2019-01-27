class RoleVo {
	public _isAlive:boolean;
	public positionX :number;
	public positionY:number;

	public spriteID:number;
	public roleType:number;

	public constructor() {
	}

	public setPosition(positionX:number,positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
	}

	public get isBall():boolean {
		return this.roleType == 1;
	}

	public get isScore():boolean {
		return this.roleType == 3;
	}

	public reset():void {
		
	}
}