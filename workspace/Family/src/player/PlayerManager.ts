class PlayerManager {
	public static manager:PlayerManager;

	public player:Player;

	public static get inst():PlayerManager {
		if(!PlayerManager.manager) {
			PlayerManager.manager = new PlayerManager();
		}
		return PlayerManager.manager;
	}

	public setPlayer(player:Player) {
		this.player = player;
	}

	public updateFrame():void {
		this.player.updateFrame();
	}
}   