class DBArmature extends egret.DisplayObjectContainer
{
    public armature:dragonBones.Armature;
    public armatureDisplay:dragonBones.EgretArmatureDisplay;
    public autoClock:boolean;
    public curClock:dragonBones.WorldClock;
    public curAnimationState:dragonBones.AnimationState;

    constructor(armature:dragonBones.Armature, autoClock:boolean)
    {
        super();
        this.armature = armature;
        this.armatureDisplay = armature.display;
        this.addChild(this.armatureDisplay);
        if(autoClock)
        {
            this.addToClock(dragonBones.EgretFactory.factory.clock);
            this.autoClock = autoClock;
        }
    }

    public addToClock(clock:dragonBones.WorldClock):void
    {
        if(this.curClock != null)
        {
            this.curClock.remove(this.armature);
        }
        this.curClock = clock;
        if(this.curClock)
        {
            this.curClock.add(this.armature);
        }
        this.autoClock = false;
    }

    public gotoAndStop(animationName:string, frame: number = 0):void
    {
        this.armature.animation.gotoAndStopByFrame(animationName, frame)
    }
    public play(animationName:string,playTimes:number = 0):void
    {
        this.curAnimationState = this.armature.animation.play(animationName, playTimes);
    }

    public stop():void
    {
        this.armature.animation.stop();
    }

    public replaceSlot(slotName:string, display:egret.DisplayObject):void
    {
        let slot:dragonBones.Slot = this.armature.getSlot(slotName);
        if(slot)
        {
            // /slot.invalidUpdate();
            slot.display = display;
        }
    }

    private _playCallbackMap:any = {};

    public playOnce(animationName:string, callback:Function = null):void
    {
        this._playCallbackMap[animationName] = callback;

        this.armatureDisplay.addEvent(dragonBones.AnimationEvent.LOOP_COMPLETE,this.onOnceComplete, this);
        this.play(animationName,1);
    }
    private onOnceComplete(e:dragonBones.Event):void
    {
        this.armatureDisplay.removeEvent(dragonBones.AnimationEvent.LOOP_COMPLETE,this.onOnceComplete, this);
        let animName = (this.armatureDisplay.animation.lastAnimationName);
        if(this._playCallbackMap[animName])
        {
            this._playCallbackMap[animName]();
            this._playCallbackMap[animName] = null;
        }
        
    }

    public dispose(): void {
        // if (!this._armature) {
        //     return;
        // }

        // AssetManager.removeCacheArmature(this);

        // this.$removeFromClock();
        // this.removeAllDisplayEvent();
        // egret.Tween.removeTweens(this);
        // App.DisplayUtils.removeFromParent(this);
        // App.DisplayUtils.removeFromParent(this._armatureDisplay);

        // this._armature.dispose();
        // this._armature = null;
        // this._armatureDisplay = null;
    }


}