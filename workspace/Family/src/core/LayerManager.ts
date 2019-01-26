	class LayerManager {
	public static root:egret.DisplayObjectContainer;
	public static map:egret.Sprite;
	public static roles:egret.Sprite;
	public static player:egret.Sprite;
	public static ui:egret.Sprite;

	public static init(root:egret.DisplayObjectContainer):void {
		LayerManager.root = root;
		LayerManager.map = new egret.Sprite();
		LayerManager.roles = new egret.Sprite();
		LayerManager.player = new egret.Sprite();
		LayerManager.ui = new egret.Sprite();
		LayerManager.root.addChild(LayerManager.map);
		LayerManager.root.addChild(LayerManager.roles);
		LayerManager.root.addChild(LayerManager.player);
		LayerManager.root.addChild(LayerManager.ui);
		LayerManager.ui.addChild(fairygui.GRoot.inst.displayObject);
	}
}