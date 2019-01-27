class PageTeam extends PageBase {

    public btnReturn: fairygui.GButton;
    public shape:fairygui.GGraph;
    

    public constructor() {
        super('Package1', "PageTeam");

        if(this._view) {
            this.btnReturn = this._view.getChild("btnReturn") as any;

            if(this.btnReturn){
                this.btnReturn.addClickListener(this.onClick,this);
            }
        }
        this.shape = this._view.getChild("shape").asGraph;
        var bitmap:egret.Bitmap = new egret.Bitmap(RES.getRes("img_team_png"));
        bitmap.width = 1136;
        bitmap.height = 640;
        this.shape.setNativeObject(bitmap);
    }

    private onClick(evt: Event): void {
        this.hide();
        GameModule.showTitle();
    }
}