gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDstartObjects1_1final = [];

gdjs.startCode.GDstartObjects1= [];
gdjs.startCode.GDstartObjects2= [];
gdjs.startCode.GDgoogoObjects1= [];
gdjs.startCode.GDgoogoObjects2= [];
gdjs.startCode.GDstart3Objects1= [];
gdjs.startCode.GDstart3Objects2= [];
gdjs.startCode.GDcollorObjects1= [];
gdjs.startCode.GDcollorObjects2= [];
gdjs.startCode.GDQObjects1= [];
gdjs.startCode.GDQObjects2= [];
gdjs.startCode.GDwordObjects1= [];
gdjs.startCode.GDwordObjects2= [];
gdjs.startCode.GDmonsterObjects1= [];
gdjs.startCode.GDmonsterObjects2= [];
gdjs.startCode.GDcoinObjects1= [];
gdjs.startCode.GDcoinObjects2= [];
gdjs.startCode.GDNewTiledSpriteObjects1= [];
gdjs.startCode.GDNewTiledSpriteObjects2= [];
gdjs.startCode.GDchessesObjects1= [];
gdjs.startCode.GDchessesObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "start.mp3", 0, false, 50, 1);
}}

}


{

gdjs.startCode.GDstartObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.startCode.GDstartObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.startCode.GDstartObjects2);
for (var i = 0, k = 0, l = gdjs.startCode.GDstartObjects2.length;i<l;++i) {
    if ( gdjs.startCode.GDstartObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.startCode.GDstartObjects2[k] = gdjs.startCode.GDstartObjects2[i];
        ++k;
    }
}
gdjs.startCode.GDstartObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.startCode.GDstartObjects2.length; j < jLen ; ++j) {
        if ( gdjs.startCode.GDstartObjects1_1final.indexOf(gdjs.startCode.GDstartObjects2[j]) === -1 )
            gdjs.startCode.GDstartObjects1_1final.push(gdjs.startCode.GDstartObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.startCode.GDstartObjects1_1final, gdjs.startCode.GDstartObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "未命名場景", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDgoogoObjects1.length = 0;
gdjs.startCode.GDgoogoObjects2.length = 0;
gdjs.startCode.GDstart3Objects1.length = 0;
gdjs.startCode.GDstart3Objects2.length = 0;
gdjs.startCode.GDcollorObjects1.length = 0;
gdjs.startCode.GDcollorObjects2.length = 0;
gdjs.startCode.GDQObjects1.length = 0;
gdjs.startCode.GDQObjects2.length = 0;
gdjs.startCode.GDwordObjects1.length = 0;
gdjs.startCode.GDwordObjects2.length = 0;
gdjs.startCode.GDmonsterObjects1.length = 0;
gdjs.startCode.GDmonsterObjects2.length = 0;
gdjs.startCode.GDcoinObjects1.length = 0;
gdjs.startCode.GDcoinObjects2.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDchessesObjects1.length = 0;
gdjs.startCode.GDchessesObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDgoogoObjects1.length = 0;
gdjs.startCode.GDgoogoObjects2.length = 0;
gdjs.startCode.GDstart3Objects1.length = 0;
gdjs.startCode.GDstart3Objects2.length = 0;
gdjs.startCode.GDcollorObjects1.length = 0;
gdjs.startCode.GDcollorObjects2.length = 0;
gdjs.startCode.GDQObjects1.length = 0;
gdjs.startCode.GDQObjects2.length = 0;
gdjs.startCode.GDwordObjects1.length = 0;
gdjs.startCode.GDwordObjects2.length = 0;
gdjs.startCode.GDmonsterObjects1.length = 0;
gdjs.startCode.GDmonsterObjects2.length = 0;
gdjs.startCode.GDcoinObjects1.length = 0;
gdjs.startCode.GDcoinObjects2.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.startCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.startCode.GDchessesObjects1.length = 0;
gdjs.startCode.GDchessesObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
