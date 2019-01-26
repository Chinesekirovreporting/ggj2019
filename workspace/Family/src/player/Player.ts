class Player {
	public playerVo:PlayerVo;
	public playerObject:PlayerObject;

	public isActive:boolean;

	public constructor() {
	}

	public get positionX():number {
		return this.playerObject.positionX;
	}

	public get positionY():number {
		return this.playerObject.positionY;
	}

	public updateFrame():void {
		this.excuteInput();//处理输入
		this.playerObject.updateFrame();
		this.textHit();
	}

	public excuteInput():void{
		if(PlayerInput.speedDonw) {

		}

		if(PlayerInput.leftDown) {
			PlayerInput.rightDown = false;
			this.playerObject.turnRightOn = false;
			this.playerObject.turnLeftOn = true;
		}
		
		if(PlayerInput.rightDown) {
			PlayerInput.leftDown = false;
			this.playerObject.turnLeftOn = false;
			this.playerObject.turnRightOn = true;
		}
	}

	public textHit():boolean {
		var objects:Object = RoleManager.inst.roleDict;
		var role:Role;
		for(var key in objects) {
			role = objects[key];
			if((role.positionX - this.positionX)*(role.positionX - this.positionX) + 
			(role.positionY - this.positionY) * (role.positionY - this.positionY) < 100*100) {
				if(role.roleVo.isBall) {
					this.playerHiting();
				}else {
					this.roleHiting(role);
				}
				return true;
			}
		}
		return false;
	}

	public roleHiting(role:Role):void {
		GameModel.roles.removeRole(role.roleVo);
	}

	public playerHiting():void {
		this.playerObject._speed = 0;
		GameModule.mainUI.btnRestart.visible = true;
	}

	public reset():void {
		this.playerVo.reset();
		this.playerObject.reset();
	}
}