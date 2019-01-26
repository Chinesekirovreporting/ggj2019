class Role {
	public roleVo:RoleVo;
	public roleObject:RoleObject;

	public constructor() {
	}

	public get spriteID():number {
		return this.roleObject.spriteID;
	}

	public get positionX():number {
		return this.roleObject.positionX;
	}

	public get positionY():number {
		return this.roleObject.positionY;
	}

	public updateFrame():void {
		this.roleObject.updateFrame();
	}

	public testHit():void {

	}

	public hiting():void {

	}

	public reset():void {
		this.roleVo.reset();
		this.roleObject.reset();
	}
}