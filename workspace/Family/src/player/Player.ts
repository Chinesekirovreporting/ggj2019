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
		if(this.playerVo.isAlive) {
			this.excuteInput();//处理输入
			this.playerObject.updateFrame();
			this.textHit();
		}
	}

	public excuteInput():void{
		if(PlayerInput.speedDonw) {
			this.playerObject._speed = 15;
		}else {
			this.playerObject._speed = 5;
		}

		if(PlayerInput.leftDown) {
			PlayerInput.rightDown = false;
			this.playerObject.turnRightOn = false;
			this.playerObject.turnLeftOn = true;
		}else if(PlayerInput.rightDown) {
			PlayerInput.leftDown = false;
			this.playerObject.turnLeftOn = false;
			this.playerObject.turnRightOn = true;
		}else {
			PlayerInput.leftDown = false;
			PlayerInput.rightDown = false;
			this.playerObject.turnLeftOn = false;
			this.playerObject.turnRightOn = false;
		}
		
		console.log("turnlefton",this.playerObject.turnLeftOn,"turnleftoff",this.playerObject.turnRightOn);
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
		this.playerVo.points += 100;
		GameModule.mainUI.showPoint(this.playerVo.points);
		GameModel.roles.removeRole(role.roleVo);
	}

	public playerHiting():void {
		this.killPlayer();
	}

	public killPlayer():void {
		this.playerVo.isAlive = false;
		GameModule.mainUI.btnRestart.visible = true;
	}

	public reset():void {
		this.playerVo.reset();
		this.playerObject.reset();
	}
}