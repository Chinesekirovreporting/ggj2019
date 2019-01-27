	class LayerManager {
	public static root:egret.DisplayObjectContainer;
	public static map:egret.Sprite;
	public static bgLayer:egret.DisplayObjectContainer;
	public static roles:egret.Sprite;
	public static player:egret.Sprite;
	public static base:egret.Sprite;
	public static mainUI:egret.Sprite;
	public static ui:egret.Sprite;

	public static init(root:egret.DisplayObjectContainer):void {
		LayerManager.root = root;
		LayerManager.map = new egret.Sprite();
		LayerManager.roles = new egret.Sprite();
		LayerManager.player = new egret.Sprite();
		LayerManager.base = new egret.Sprite();
		LayerManager.mainUI = new egret.Sprite();
		LayerManager.ui = new egret.Sprite();
		LayerManager.bgLayer = new egret.DisplayObjectContainer();
		LayerManager.root.addChild(LayerManager.bgLayer);
		LayerManager.root.addChild(LayerManager.map);
		LayerManager.root.addChild(LayerManager.roles);
		LayerManager.root.addChild(LayerManager.player);
		LayerManager.root.addChild(LayerManager.ui);
		LayerManager.root.addChild(LayerManager.base);
		LayerManager.root.addChild(LayerManager.mainUI);
		LayerManager.ui.addChild(fairygui.GRoot.inst.displayObject);
	}
}