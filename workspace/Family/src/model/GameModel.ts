class GameModel {
	// public static player:any;
	public static player:ModelPlayer;
	public static roles:ModelRoles;

	public static init():void {
		// this.player = new Object();
		this.player = new ModelPlayer();
		this.roles = new ModelRoles();
	}
}