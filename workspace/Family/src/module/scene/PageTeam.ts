class PageTeam extends PageBase {

    public btnReturn: fairygui.GButton;

    public constructor() {
        super('Package1', "PageTeam");

        if(this._view) {
            this.btnReturn = this._view.getChild("btnReturn") as any;

            if(this.btnReturn){
                this.btnReturn.addClickListener(this.onClick,this);
            }
        }
    }

    private onClick(evt: Event): void {
        this.hide();
        GameModule.showTitle();
    }
}