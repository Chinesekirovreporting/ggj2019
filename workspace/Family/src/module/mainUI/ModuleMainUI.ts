class ModuleMainUI {
	public mainUI:fairygui.GComponent;
	public lblScore:fairygui.GTextField;
	public lblPos:fairygui.GTextField;
	public btnRestart:fairygui.GButton;

	public constructor() {
		this.mainUI = fairygui.UIPackage.createObject("Package1","MainUI").asCom;
		this.lblScore = this.mainUI.getChild("lblScore").asTextField;
		this.lblPos = this.mainUI.getChild("lblPos").asTextField;
		this.btnRestart = this.mainUI.getChild("btnRestart").asButton;
		this.btnRestart.addClickListener(this.onRestart,this);
		this.btnRestart.visible = false;
	}

	private onRestart():void {
		GameModule.scene.resetScene();
		this.btnRestart.visible = false;
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