class ModuleMainUI {
	public mainUI:fairygui.GComponent;
	public lblScore:fairygui.GTextField;
	public lblPos:fairygui.GTextField;
	public btnRestart:fairygui.GButton;
	public hpBar:fairygui.GProgressBar;

	public btnLeft:fairygui.GButton;
	public btnRight:fairygui.GButton;
	public btnSpeed:fairygui.GButton;

	public constructor() {
		this.mainUI = fairygui.UIPackage.createObject("Package1","MainUI").asCom;
		this.lblScore = this.mainUI.getChild("lblScore").asTextField;
		this.lblPos = this.mainUI.getChild("lblPos").asTextField;
		this.btnRestart = this.mainUI.getChild("btnRestart").asButton;
		this.hpBar = this.mainUI.getChild("hpBar").asProgress;
		this.btnRestart.addClickListener(this.onRestart,this);
		this.btnRestart.visible = false;
		this.btnLeft = this.mainUI.getChild("btnLeft").asButton;
		this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBtnLeftDown,this);
		this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBtnLeftUp,this);
		this.btnRight = this.mainUI.getChild("btnRight").asButton;
		this.btnRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBtnRightDown,this);
		this.btnRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBtnRightUp,this);
		this.btnSpeed = this.mainUI.getChild("btnSpeed").asButton;
		this.btnSpeed.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBtnSpeedDown,this);
		this.btnSpeed.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBtnSpeedUp,this);
	}

	private onBtnLeftDown():void {
		PlayerInput.leftDown = true;
		PlayerInput.rightDown = false;
	}

	private onBtnLeftUp():void {
		PlayerInput.leftDown = false;
		PlayerInput.rightDown = false;
	}

	private onBtnRightDown():void {
		PlayerInput.rightDown = true;
		PlayerInput.leftDown = false;
	}

	private onBtnRightUp():void {
		PlayerInput.rightDown = false;
		PlayerInput.leftDown = false;
	}

	private onBtnSpeedDown():void {
		PlayerInput.speedDonw = true;
	}

	private onBtnSpeedUp():void {
		PlayerInput.speedDonw = false;
	}

	private onRestart():void {
		GameModule.scene.resetScene();

		this.btnRestart.visible = false;
		egret.setTimeout(() => {
			PlayerManager.inst.player.playerObject._speed = 5;
		},this,3000)
	}
	
	public onShow():void {
		LayerManager.mainUI.addChild(this.mainUI.displayObject);
		GameModel.player.addEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS,this.onChangePos,this);
	}

	public onChangePos():void {
		this.lblPos.text = Math.ceil(PlayerManager.inst.player.positionX).toString() + "_" + Math.ceil(PlayerManager.inst.player.positionY).toString();
	}

	public onExit():void {
		LayerManager.mainUI.removeChild(this.mainUI.displayObject);
		GameModel.player.removeEventListener(ModelPlayerEvent.ON_CHANGE_PLAYER_POS,this.onChangePos,this);
	}

}