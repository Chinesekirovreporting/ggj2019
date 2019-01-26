class PageInfo extends PageBase {

    public btnStart: fairygui.GButton;
    public btnTeam: fairygui.GButton;

    public constructor() {
        super('Package1', "PageInfo");

        if(this._view) {
            this.btnStart = this._view.getChild("n1") as any;
            this.btnTeam = this._view.getChild("n3") as any;

            if(this.btnStart){
                this.btnStart.addClickListener(this.onClickStart,this);
            }
            if(this.btnTeam){
                this.btnTeam.addClickListener(this.onClickTeam,this);
            }
        }
    }

    private onClickStart(evt: Event): void {
        this.hide();
        GameModule.gameStart();
    }
    private onClickTeam(evt: Event): void {
        this.hide();
        GameModule.showTeam();
    }
}