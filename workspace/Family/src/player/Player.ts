class Player {
	public playerVo:PlayerVo;
	public playerObject:PlayerObject;

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
}