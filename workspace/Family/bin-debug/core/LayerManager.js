var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LayerManager = (function () {
    function LayerManager() {
    }
    LayerManager.init = function (root) {
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
        // LayerManager.root.rotation = 90
        // LayerManager.root.x = 640;
    };
    return LayerManager;
}());
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map