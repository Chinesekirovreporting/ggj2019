class GameModule {
	public static scene:ModuleScene;
	public static role:ModuleRole;
	public static mainUI:ModuleMainUI;
	public static pageInfo: PageInfo;
	public static joystick: Joystick;
	public static pageTeam: PageTeam;

	public static asset: AssetManager;

	public constructor() {
	}

	public static init():void {
		GameModule.scene = new ModuleScene();
		GameModule.role = new ModuleRole();
		GameModule.mainUI = new ModuleMainUI();
		GameModule.pageInfo = new PageInfo();
		GameModule.joystick = new Joystick();
		GameModule.pageTeam = new PageTeam();
		
		GameModule.asset = AssetManager.instance;
	}

	public static gameStart(): void {
		GameModule.role.onShow();
        GameModule.scene.onShow();
		GameModule.mainUI.onShow();
        GameModule.joystick.show();
	}

	public static showTitle(): void {
		GameModule.pageInfo.show();
	}

	public static showTeam(): void {
		GameModule.pageTeam.show();
	}

}