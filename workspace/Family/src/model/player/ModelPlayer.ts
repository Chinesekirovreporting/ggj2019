class ModelPlayer extends egret.EventDispatcher{
	public myPlayer:PlayerVo;

	public constructor() {
		super();
		this.init();
	}

	private init():void {
		this.myPlayer = new PlayerVo();
	}

	public changePlayerPos(playerVo:PlayerVo, positionX:number, positionY:number):void {
		playerVo.setPosition(positionX,positionY);
		this.dispatchEventWith(ModelPlayerEvent.ON_CHANGE_PLAYER_POS, false, playerVo);
	}
}