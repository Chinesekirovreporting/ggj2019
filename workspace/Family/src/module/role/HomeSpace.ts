class HomeSpace extends BaseObject{
    public player: DBArmature;
    public playSpeed: number = 0.01;
    constructor(){
        super();

        this.player = AssetManager.instance.getDBArmature('homeSpace')
        if(this.player) {
            this.player.scaleX = this.player.scaleY = 0.8;
            
            this.player.play('level1');
            this.player.curAnimationState.timeScale = this.playSpeed;
            this.addChild(this.player);
        }
    }

    public change2Level(level:number):void {
        if(level < 1) {
            level = 1;
        }
        if(level > 7) {
            level = 7;
        }
        let anName = 'level' + level;
        this.player.play(anName);
        this.player.curAnimationState.timeScale = this.playSpeed;
    }
    public broken(): void {
        this.player.play('broken');
        this.player.curAnimationState.timeScale = this.playSpeed;
    }
    public normal(): void {
        this.player.play('level1');
        this.player.curAnimationState.timeScale = this.playSpeed;
    }
}