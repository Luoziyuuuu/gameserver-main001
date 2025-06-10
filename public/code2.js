gdjs.GameOverSceneCode = {};
gdjs.GameOverSceneCode.localVariables = [];
gdjs.GameOverSceneCode.GDleaveObjects1_1final = [];

gdjs.GameOverSceneCode.GDrestartObjects1_1final = [];

gdjs.GameOverSceneCode.GD_959500Objects1= [];
gdjs.GameOverSceneCode.GD_959500Objects2= [];
gdjs.GameOverSceneCode.GDNewSpriteObjects1= [];
gdjs.GameOverSceneCode.GDNewSpriteObjects2= [];
gdjs.GameOverSceneCode.GDrestartObjects1= [];
gdjs.GameOverSceneCode.GDrestartObjects2= [];
gdjs.GameOverSceneCode.GDscoreObjects1= [];
gdjs.GameOverSceneCode.GDscoreObjects2= [];
gdjs.GameOverSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.GameOverSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.GameOverSceneCode.GDlevelObjects1= [];
gdjs.GameOverSceneCode.GDlevelObjects2= [];
gdjs.GameOverSceneCode.GDNewSprite2Objects1= [];
gdjs.GameOverSceneCode.GDNewSprite2Objects2= [];
gdjs.GameOverSceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.GameOverSceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.GameOverSceneCode.GD_9595002Objects1= [];
gdjs.GameOverSceneCode.GD_9595002Objects2= [];
gdjs.GameOverSceneCode.GDleaveObjects1= [];
gdjs.GameOverSceneCode.GDleaveObjects2= [];
gdjs.GameOverSceneCode.GDrankObjects1= [];
gdjs.GameOverSceneCode.GDrankObjects2= [];


gdjs.GameOverSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameOverSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rank"), gdjs.GameOverSceneCode.GDrankObjects1);
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getGame().getVariables().getFromIndex(4));
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDrankObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDrankObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0).getChild("name").getAsString() + ":" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0).getChild("score").getAsNumber()));
}
}}

}


};gdjs.GameOverSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameOverSceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("_00"), gdjs.GameOverSceneCode.GD_959500Objects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.GameOverSceneCode.GDrestartObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delay");
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDNewSpriteObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDrestartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GD_959500Objects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GD_959500Objects1[i].hide();
}
}
{ //Subevents
gdjs.GameOverSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "delay") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9486620);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameOverSceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("_00"), gdjs.GameOverSceneCode.GD_959500Objects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.GameOverSceneCode.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameOverSceneCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDrestartObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDrestartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GD_959500Objects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GD_959500Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDscoreObjects1[i].getBehavior("Text").setText("Score:" + runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsString());
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "over.mp3", 0, false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() < 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("level"), gdjs.GameOverSceneCode.GDlevelObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDlevelObjects1[i].getBehavior("Text").setText("Level: 0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() >= 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameOverSceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("level"), gdjs.GameOverSceneCode.GDlevelObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDlevelObjects1[i].getBehavior("Text").setText("Level:1");
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDNewSprite2Objects1[i].setColor("255;247;136");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() >= 16);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameOverSceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("level"), gdjs.GameOverSceneCode.GDlevelObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDlevelObjects1[i].getBehavior("Text").setText("Level:2");
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDNewSprite2Objects1[i].setColor("87;223;92");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() >= 24);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameOverSceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("level"), gdjs.GameOverSceneCode.GDlevelObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDlevelObjects1[i].getBehavior("Text").setText("Level:3");
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDNewSprite2Objects1[i].setColor("86;193;241");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() >= 32);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameOverSceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("level"), gdjs.GameOverSceneCode.GDlevelObjects1);
{for(var i = 0, len = gdjs.GameOverSceneCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDlevelObjects1[i].getBehavior("Text").setText("Level:4");
}
}{for(var i = 0, len = gdjs.GameOverSceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameOverSceneCode.GDNewSprite2Objects1[i].setColor("255;130;145");
}
}}

}


{

gdjs.GameOverSceneCode.GDrestartObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameOverSceneCode.GDrestartObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.GameOverSceneCode.GDrestartObjects2);
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDrestartObjects2.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDrestartObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameOverSceneCode.GDrestartObjects2[k] = gdjs.GameOverSceneCode.GDrestartObjects2[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDrestartObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameOverSceneCode.GDrestartObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameOverSceneCode.GDrestartObjects1_1final.indexOf(gdjs.GameOverSceneCode.GDrestartObjects2[j]) === -1 )
            gdjs.GameOverSceneCode.GDrestartObjects1_1final.push(gdjs.GameOverSceneCode.GDrestartObjects2[j]);
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
gdjs.copyArray(gdjs.GameOverSceneCode.GDrestartObjects1_1final, gdjs.GameOverSceneCode.GDrestartObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "未命名場景", false);
}}

}


{

gdjs.GameOverSceneCode.GDleaveObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameOverSceneCode.GDleaveObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("leave"), gdjs.GameOverSceneCode.GDleaveObjects2);
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDleaveObjects2.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDleaveObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameOverSceneCode.GDleaveObjects2[k] = gdjs.GameOverSceneCode.GDleaveObjects2[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDleaveObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameOverSceneCode.GDleaveObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameOverSceneCode.GDleaveObjects1_1final.indexOf(gdjs.GameOverSceneCode.GDleaveObjects2[j]) === -1 )
            gdjs.GameOverSceneCode.GDleaveObjects1_1final.push(gdjs.GameOverSceneCode.GDleaveObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__BackButton__onBackButtonPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameOverSceneCode.GDleaveObjects1_1final, gdjs.GameOverSceneCode.GDleaveObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12093988);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("/postscore", "ToJSON(GameData)", "POST", "application/json", runtimeScene.getScene().getVariables().get("rank"), runtimeScene.getScene().getVariables().get("ErrorResponse"));
}
{ //Subevents
gdjs.GameOverSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameOverSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverSceneCode.GD_959500Objects1.length = 0;
gdjs.GameOverSceneCode.GD_959500Objects2.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverSceneCode.GDrestartObjects1.length = 0;
gdjs.GameOverSceneCode.GDrestartObjects2.length = 0;
gdjs.GameOverSceneCode.GDscoreObjects1.length = 0;
gdjs.GameOverSceneCode.GDscoreObjects2.length = 0;
gdjs.GameOverSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameOverSceneCode.GDlevelObjects1.length = 0;
gdjs.GameOverSceneCode.GDlevelObjects2.length = 0;
gdjs.GameOverSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverSceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.GameOverSceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.GameOverSceneCode.GD_9595002Objects1.length = 0;
gdjs.GameOverSceneCode.GD_9595002Objects2.length = 0;
gdjs.GameOverSceneCode.GDleaveObjects1.length = 0;
gdjs.GameOverSceneCode.GDleaveObjects2.length = 0;
gdjs.GameOverSceneCode.GDrankObjects1.length = 0;
gdjs.GameOverSceneCode.GDrankObjects2.length = 0;

gdjs.GameOverSceneCode.eventsList2(runtimeScene);
gdjs.GameOverSceneCode.GD_959500Objects1.length = 0;
gdjs.GameOverSceneCode.GD_959500Objects2.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverSceneCode.GDrestartObjects1.length = 0;
gdjs.GameOverSceneCode.GDrestartObjects2.length = 0;
gdjs.GameOverSceneCode.GDscoreObjects1.length = 0;
gdjs.GameOverSceneCode.GDscoreObjects2.length = 0;
gdjs.GameOverSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameOverSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameOverSceneCode.GDlevelObjects1.length = 0;
gdjs.GameOverSceneCode.GDlevelObjects2.length = 0;
gdjs.GameOverSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverSceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.GameOverSceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.GameOverSceneCode.GD_9595002Objects1.length = 0;
gdjs.GameOverSceneCode.GD_9595002Objects2.length = 0;
gdjs.GameOverSceneCode.GDleaveObjects1.length = 0;
gdjs.GameOverSceneCode.GDleaveObjects2.length = 0;
gdjs.GameOverSceneCode.GDrankObjects1.length = 0;
gdjs.GameOverSceneCode.GDrankObjects2.length = 0;


return;

}

gdjs['GameOverSceneCode'] = gdjs.GameOverSceneCode;
