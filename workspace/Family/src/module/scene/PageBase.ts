class PageBase {
    protected _view: fairygui.GComponent;
    protected isShow:boolean;

    public constructor(packageName: string, comName:string ) {
        this._view = fairygui.UIPackage.createObject(packageName,comName).asCom;
    }

    public show():void {
        if(this._view) {
            this.isShow = true;
            fairygui.GRoot.inst.addChild(this._view);
            this._view.visible = true;
        }
		 
	}
    public hide(): void {
        if(this._view) {
            this.isShow = false;
            this._view.visible = false;
        }
    }
}