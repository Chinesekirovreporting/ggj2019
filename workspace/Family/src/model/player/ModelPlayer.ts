class ModelPlayer extends egret.EventDispatcher{
	public myPlayer:PlayerVo;

	public constructor() {
		super();
		this.init();
	}

	private init():void {
		this.myPlayer = new PlayerVo();
	}
}