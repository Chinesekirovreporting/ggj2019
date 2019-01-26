class GameModule {
	public static scene:ModuleScene;
	public static role:ModuleRole;

	public constructor() {
	}

	public static init():void {
		GameModule.scene = new ModuleScene();
		GameModule.role = new ModuleRole();
	}
}