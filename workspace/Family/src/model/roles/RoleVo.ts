class RoleVo {
	private _isAlive:boolean;
	public positionX :number;
	public positionY:number;

	public constructor() {
	}

	public setPosition(positionX:number,positionY:number):void {
		this.positionX = positionX;
		this.positionY = positionY;
	}
}