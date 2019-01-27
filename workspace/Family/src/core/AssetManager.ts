class AssetManager extends egret.EventDispatcher
{
    public static EVENT_LOAD_COMPLETE:string = "EVENT_LOAD_COMPLETE";
    public static EVENT_LOAD_PROGRESS:string = "EVENT_LOAD_PROGRESS";
    public static EVENT_LOAD_ERROR:string = "EVENT_LOAD_ERROR";

    private static  _instance:AssetManager;

    public static get instance():AssetManager
    {
        if(AssetManager._instance == null)
        {
            AssetManager._instance = new AssetManager();
        }
        return AssetManager._instance;
    }

    public static dbFactory:dragonBones.EgretFactory = new dragonBones.EgretFactory();

    public getBitmap(name:string, centerX:boolean = true, centerY:boolean = true):egret.Bitmap
    {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        
        if(centerX)
        {
            result.anchorOffsetX = result.width / 2;
        }
        if(centerY)
        {
            result.anchorOffsetY = result.height / 2;
        }
        
        return result;
    }

    public getSound(name:string):egret.Sound
    {
        return RES.getRes(name);
    }

    public loadDBAnimation(dbNames:string[]):void
    {
        let i:number;
        let len:number;
        let name:string;
        let assetNum:number;

        for(i = 0, len = dbNames.length; i < len; i += 2)
        {
            name = dbNames[i];
            assetNum = parseInt(dbNames[i + 1]);

            let skeletonData = RES.getRes(name + "_ske_json");
            
            if(skeletonData)
            {
                AssetManager.dbFactory.parseDragonBonesData(skeletonData);
            }

            if(assetNum == 1)
            {
                console.log("naaa",name)
                let textureData = RES.getRes(name + "_tex_json");
                let texture = RES.getRes(name + "_tex_png");
                AssetManager.dbFactory.parseTextureAtlasData(textureData,texture);
            }
            else
            {
                let j:number;
                let jlen:number;
                for(j = 0; j < assetNum; j++)
                {
                    let textureData = RES.getRes(name + "_tex_" + j + "_json");
                    let texture = RES.getRes(name + "_tex_" + j + "_png");
                    AssetManager.dbFactory.parseTextureAtlasData(textureData,texture);
                }
            }
            
        }
    }

    public disposeDBAnimation(dbNames:string[]):void
    {
        let i:number;
        let len:number;
        let name:string;
        let assetNum:number;

        for(i = 0, len = dbNames.length; i < len; i += 2)
        {
            name = dbNames[i];
            var skeletonData = RES.getRes(name + "_ske_json");
            var dragonBoneName = skeletonData.name;

            AssetManager.dbFactory.removeDragonBonesData(dragonBoneName);
            AssetManager.dbFactory.removeTextureAtlasData(dragonBoneName);
        }
    }

    public getArmatureDisplay(armatureName:string, autoClock:boolean = true):dragonBones.EgretArmatureDisplay
    {
        let armature:dragonBones.Armature = AssetManager.dbFactory.buildArmature(armatureName);
        return armature.display;
    }

    public getDBArmature(armatureName:string, autoClock:boolean = true):DBArmature
    {
        let armature:dragonBones.Armature = AssetManager.dbFactory.buildArmature(armatureName);
        let dbArmature:DBArmature = new DBArmature(armature,autoClock);
        return dbArmature;
    }

    public changeTexture(image: egret.Bitmap, name: string) {
        let width = image.width;
        let height = image.height;
        image.texture = RES.getRes(name);
        image.width = width;
        image.height = height;
    }

    public setText(textField: egret.TextField, str: string) {
        textField.text = str;
        textField.anchorOffsetX = textField.width / 2;
        textField.anchorOffsetY = textField.height / 2;
    }

    //////////managet game asset///////////

    private _gameAssetMap:Object = {};
    private _curLoadingGroup:string;

    public loadGameAsset(gameName:string):void
    {
        if(this._gameAssetMap[gameName])
        {
            this.dispatchEventWith(AssetManager.EVENT_LOAD_COMPLETE);
        }
        else
        {
            this._curLoadingGroup = gameName;
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/" + gameName + ".res.json", "resource/");
        }
        
    }

    public disposeGameAsset(gameName:string):void
    {
        let dbConfig = RES.getRes(gameName + "DBConfig_json");
        this.disposeDBAnimation(dbConfig.db);
        RES.destroyRes(gameName);

        this._gameAssetMap[gameName]=false;
        delete this._gameAssetMap[gameName];
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        // //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        // let theme = new eui.Theme("resource/default.thm.json", this.stage);
        // theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(this._curLoadingGroup);
    }

    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == this._curLoadingGroup) {
            // this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            

            let dbConfig = RES.getRes(this._curLoadingGroup + "DBConfig_json");
            if(dbConfig)
            {
                this.loadDBAnimation(dbConfig.db);
            }

            this._gameAssetMap[this._curLoadingGroup]=true;
            this._curLoadingGroup = null;
            this.dispatchEventWith(AssetManager.EVENT_LOAD_COMPLETE);
        }
    }

    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        // this.onResourceLoadComplete(event);
        this.dispatchEventWith(AssetManager.EVENT_LOAD_ERROR);
    }

    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
        this.dispatchEventWith(AssetManager.EVENT_LOAD_ERROR);
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == this._curLoadingGroup) {
            //this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
            let progress:number = event.itemsLoaded / event.itemsTotal;
            this.dispatchEventWith(AssetManager.EVENT_LOAD_ERROR,false,progress);
        }
    }

}