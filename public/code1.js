gdjs._26410_21629_21517_22580_26223Code = {};
gdjs._26410_21629_21517_22580_26223Code.localVariables = [];
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1_1final = [];

gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1_1final = [];

gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final = [];

gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirtObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirtObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt2Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt2Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt4Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt4Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595bridgeObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595bridgeObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595movingObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595movingObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDtutorialObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDtutorialObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround1Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround1Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround2Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround2Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround3Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround3Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround4Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround4Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround5Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround5Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround6Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround6Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround7Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDbackround7Objects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDStartObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDGameObjects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDGameObjects2= [];
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1= [];
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects2= [];


gdjs._26410_21629_21517_22580_26223Code.asyncCallback13640788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26410_21629_21517_22580_26223Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2);

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartCountdown");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cointime");
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").setNumber(0);
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[i].activateBehavior("TopDownMovement", false);
}
}gdjs._26410_21629_21517_22580_26223Code.localVariables.length = 0;
}
gdjs._26410_21629_21517_22580_26223Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._26410_21629_21517_22580_26223Code.localVariables);
for (const obj of gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1) asyncObjectsList.addObject("player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._26410_21629_21517_22580_26223Code.asyncCallback13640788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._26410_21629_21517_22580_26223Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTime") < 30;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Game"), gdjs._26410_21629_21517_22580_26223Code.GDGameObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDGameObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDGameObjects1[i].getBehavior("Text").setText("Time Left:" + gdjs.evtTools.common.toString(Math.round(30 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTime"))));
}
}}

}


};gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDcoin2Objects1Objects = Hashtable.newFrom({"coin2": gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1});
gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1});
gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDcoin2Objects1Objects = Hashtable.newFrom({"coin2": gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1});
gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1});
gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDchessesObjects1Objects = Hashtable.newFrom({"chesses": gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1});
gdjs._26410_21629_21517_22580_26223Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("plform_dirt3"), gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1[i].isCollidingWithPoint((( gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[0].getPointX("checker")), (( gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[0].getPointY("checker"))) ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs._26410_21629_21517_22580_26223Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("plform_dirt3"), gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1[i].isCollidingWithPoint((( gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[0].getPointX("checker")), (( gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[0].getPointY("checker"))) ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2});
gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2});
gdjs._26410_21629_21517_22580_26223Code.asyncCallback13662188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._26410_21629_21517_22580_26223Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOverScene", false);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "8786ebe6-7d1f-4c2e-b0b6-c52785f922c1", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), "");
}gdjs._26410_21629_21517_22580_26223Code.localVariables.length = 0;
}
gdjs._26410_21629_21517_22580_26223Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._26410_21629_21517_22580_26223Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._26410_21629_21517_22580_26223Code.asyncCallback13662188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._26410_21629_21517_22580_26223Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "kids-game-gaming-background-music-295075.mp3", 0, false, 40, 1);
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].setColor("255;255;255");
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length !== 0 ? gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[0] : null), true, "", 0);
}
{ //Subevents
gdjs._26410_21629_21517_22580_26223Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartCountdown") < 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(3 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "StartCountdown"))));
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartCountdown") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13643164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTime");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StartCountdown") >= 3;
if (isConditionTrue_0) {

{ //Subevents
gdjs._26410_21629_21517_22580_26223Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTime") >= 30;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "8786ebe6-7d1f-4c2e-b0b6-c52785f922c1", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOverScene", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bondary"), gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[0].getPointX("")) - 1000, (( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[0].getPointY("")) - 1000, (( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[0].getPointX("")) + 1000, (( gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1[0].getPointY("")), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "cointime") >= 1;
if (isConditionTrue_0) {
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDcoin2Objects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cointime");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin2"), gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDplayerObjects1Objects, gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDcoin2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UI_score"), gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects1);
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").add(1);
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects1[i].getBehavior("Text").setText("Score:" + runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() == 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13649876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].setColor("255;247;136");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "color.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13650668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].setColor("87;223;92");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "color.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() == 24);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13651916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].setColor("86;193;241");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "color.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Score").getAsNumber() == 32);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13652916);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].setColor("255;130;145");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "color.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("chesses"), gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDplayerObjects1Objects, gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDchessesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1 */
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "chesses.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("TopDownMovement", true);
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "chessestime");
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("fiy");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "chessestime") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("TopDownMovement", false);
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents
gdjs._26410_21629_21517_22580_26223Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length;i<l;++i) {
    if ( !(gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs._26410_21629_21517_22580_26223Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1.length = 0;

gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length = 0;

gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1_1final.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1_1final.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDplayerObjects2Objects, gdjs._26410_21629_21517_22580_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522580_959526223Code_9546GDenemyObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1_1final.indexOf(gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2[j]) === -1 )
            gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1_1final.push(gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final.indexOf(gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[j]) === -1 )
            gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final.push(gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("bondary"), gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2);
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[i].getY() > (( gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2.length === 0 ) ? 0 :gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2[0].getPointY("")) ) {
        isConditionTrue_1 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[k] = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2.length; j < jLen ; ++j) {
        if ( gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1_1final.indexOf(gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2[j]) === -1 )
            gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1_1final.push(gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2[j]);
    }
    for (let j = 0, jLen = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final.indexOf(gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[j]) === -1 )
            gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final.push(gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTime") >= 30;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1_1final, gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1);
gdjs.copyArray(gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1_1final, gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1);
gdjs.copyArray(gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1_1final, gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13660556);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "duck.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].getBehavior("Animation").getAnimationName() == "dead" ) {
        isConditionTrue_0 = true;
        gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[k] = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13661724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs._26410_21629_21517_22580_26223Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._26410_21629_21517_22580_26223Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirtObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirtObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt4Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt4Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595bridgeObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595bridgeObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595movingObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595movingObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDtutorialObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDtutorialObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround1Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround1Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround4Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround4Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround5Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround5Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround6Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround6Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround7Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround7Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDStartObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDGameObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDGameObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects2.length = 0;

gdjs._26410_21629_21517_22580_26223Code.eventsList5(runtimeScene);
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplayerObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirtObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirtObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt4Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595dirt4Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595bridgeObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595bridgeObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595movingObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDplform_9595movingObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDchessesObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDenemyObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbondaryObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDtutorialObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDtutorialObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDUI_9595scoreObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround1Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround1Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround2Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround3Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround3Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround4Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround4Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround5Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround5Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround6Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround6Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround7Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDbackround7Objects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDStartObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDStartObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDGameObjects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDGameObjects2.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects1.length = 0;
gdjs._26410_21629_21517_22580_26223Code.GDcoin2Objects2.length = 0;


return;

}

gdjs['_26410_21629_21517_22580_26223Code'] = gdjs._26410_21629_21517_22580_26223Code;
