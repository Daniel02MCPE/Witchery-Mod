//------------*Witchery Mod*------------\\
//-------------*by Salasxd*-------------\\
//-----------------*v4*-----------------\\
//-*no usar adf.ly o Paginas Similares-*\\
//-----*E-Mail: Salasxd1@gmail.com*-----\\

//Variables
var version=4;
var parche=0;
var beta=6;
var evento=0;

var escoba;
var escobamob;
var escobaon=false;
var playerDir=[0, 0, 0];
var DEG_TO_RAD=Math.PI / 180;
var escobaSpeed=0.2;
var escobaSpeed2=0.4;
var escobaSpeed3=0.5;
var escobaSpeed4=0.6;

var plantatiempo=0;
var GUI;
var gui=true;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var potiontelaraña;
var potiontrampa;
var potionexplosion;
var potionfuego;
var vari=0;
var time=0;
var red=false;
var currentred=[];
var rX;
var rY;
var rZ;
var tipored;
var tipored2;
var save=0;
var druid=0;
var mana=0;
var manalvl=0;
var a1;
var b1;
var c1;
var subirenergia=false;
var energia=0;
var mlevel=0;
var timeenergia=0;
var itemsaltar=0;
var vampcount=0;
var manatime=0;
var vamptime=0;
var mision=0;
var misioncount=0;
var misioncount2=0;
var misioncount3=0;
var misioncount4=0;
var misioncount5=0;
var misionface=0;
var teleport;
var teletime=0;
var fantime=0;
var manoport=0;
var homemano=0;
var portX=0;
var portY=0;
var portZ=0;
//

//Modelos
var escobaencantada = Renderer.createHumanoidRenderer();
addescobaencantadaRenderType(escobaencantada);

function addescobaencantadaRenderType(renderer){
var model = renderer.getModel();
var var2 = 0;

var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();

head.clear();
head.setTextureOffset(63,31);
head.addBox(0,12,-5,2,2,26,var2);

head.setTextureOffset(43,31);
head.addBox(-1.5,10.5,20.5,5,5,6,var2);
}

//evento
var teleportren = Renderer.createHumanoidRenderer();
addteleportrenRenderType(teleportren);

function addteleportrenRenderType(renderer){
var model = renderer.getModel();
var var2 = 0;

var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();

}

//

//Items
Player.addItemCreativeInv(403,1,0);
Item.defineArmor(600,"WitchesHat",0,"Witches Hat","mob/witch_1.png",2,40,ArmorType.helmet);
Item.setCategory(600,ItemCategory.TOOL);
Player.addItemCreativeInv(600,1,0);
Item.defineArmor(601,"WitchesRobes",0,"Witches Robes","mob/witch_1.png",6,70,ArmorType.chestplate);
Item.setCategory(601,ItemCategory.TOOL);
Player.addItemCreativeInv(601,1,0);
Item.defineArmor(602,"Witchesleggings",0,"Witches leggings","mob/witch_2.png",4,50,ArmorType.leggings);
Item.setCategory(602,ItemCategory.TOOL);
Player.addItemCreativeInv(602,1,0);
Item.defineArmor(603,"IcySlippers",0,"Icy Slippers","mob/witch_1.png",2,30,ArmorType.boots);
Item.setCategory(603,ItemCategory.TOOL);
Player.addItemCreativeInv(603,1,0);

ModPE.setItem(604,"posionlanzable",3,"Telaraña instantania");
Item.setProperties(604,{"foil":true});
Item.setCategory(604,ItemCategory.TOOL);
Player.addItemCreativeInv(604,1,0);
ModPE.setItem(605,"posionlanzable",1,"Trampa  instantania");
Item.setProperties(605,{"foil":true});
Item.setCategory(605,ItemCategory.TOOL);
Player.addItemCreativeInv(605,1,0);
ModPE.setItem(606,"posionlanzable",0,"Explosion instantania");
Item.setProperties(606,{"foil":true});
Item.setCategory(606,ItemCategory.TOOL);
Player.addItemCreativeInv(606,1,0);
ModPE.setItem(607,"posionlanzable",0,"fuego instantanio");
Item.setProperties(607,{"foil":true});
Item.setCategory(607,ItemCategory.TOOL);
Player.addItemCreativeInv(607,1,0);
ModPE.setItem(608,"diamanteencantado",1,"Diamante Encantado");
Item.setProperties(608,{"foil":true});
Item.setCategory(608,ItemCategory.TOOL);
Player.addItemCreativeInv(608,1,0);
ModPE.setItem(609,"escoba",0,"Escoba");
Item.setCategory(609,ItemCategory.TOOL);
Player.addItemCreativeInv(609,1,0);
ModPE.setItem(610,"escoba",1,"Escoba Encantada");
Item.setProperties(610,{"foil":true});
Item.setCategory(610,ItemCategory.TOOL);
Player.addItemCreativeInv(610,1,0);
ModPE.setItem(611,"mutantis",0,"Mutantis");
Item.setCategory(611,ItemCategory.TOOL);
Player.addItemCreativeInv(611,1,0);
ModPE.setItem(612,"mutantis",1,"Mutantis Extremi");
Item.setCategory(612,ItemCategory.TOOL);
Player.addItemCreativeInv(612,1,0);
ModPE.setItem(613,"llave",0,"Llave");
Item.setCategory(613,ItemCategory.TOOL);
//Player.addItemCreativeInv(613,1,0);
ModPE.setItem(614,"giss",0,"giss",1);
Item.setCategory(614,ItemCategory.TOOL);
Player.addItemCreativeInv(614,1,0);
Item.setMaxDamage(614,100);
ModPE.setItem(615,"giss",1,"giss",1);
Item.setCategory(615,ItemCategory.TOOL);
Item.setMaxDamage(615,100);
Player.addItemCreativeInv(615,1,0);
ModPE.setItem(616,"mano",0,"Mano de Bruja");
Item.setCategory(616,ItemCategory.TOOL);
Player.addItemCreativeInv(616,1,0);
ModPE.setItem(617,"mano",0,"Mano de Bruja",1);
Item.setProperties(617,{"foil":true});
Item.setCategory(617,ItemCategory.TOOL);
Player.addItemCreativeInv(617,1,0);
Item.setMaxDamage(617,400);
ModPE.setItem(618,"spawn_egg",14,"Aventurero Spawn");
Item.setCategory(618,ItemCategory.TOOL);
Player.addItemCreativeInv(618,1,0);
ModPE.setItem(619,"plantatrampa",0,"Planta de Fuego");
Item.setCategory(619,ItemCategory.TOOL);
Player.addItemCreativeInv(619,1,0);
ModPE.setItem(620,"plantatrampa",1,"Planta de Veneno");
Item.setCategory(620,ItemCategory.TOOL);
Player.addItemCreativeInv(620,1,0);
ModPE.setItem(621,"WoolofBat",0,"Wool of Bat");
Item.setCategory(621,ItemCategory.TOOL);
Player.addItemCreativeInv(621,1,0);
/*ModPE.setItem(622,"ender_eye",0,"Spawn de Cerdo Fantasma");
Item.setCategory(622,ItemCategory.TOOL);
Player.addItemCreativeInv(622,1,0);
Item.setProperties(622,{"foil":true});
Item.setMaxDamage(622,4);*/
ModPE.setItem(623,"bookCircleMagic",0,"Manual");
Item.setCategory(623,ItemCategory.TOOL);
Player.addItemCreativeInv(623,1,0);
ModPE.setItem(624,"poppetvampiric",0,"Poppet Vampiric");
Item.setCategory(624,ItemCategory.TOOL);
Player.addItemCreativeInv(624,1,0);
Item.defineArmor(625,"cabezavampir",0,"Mascara de Vampiro","mob/mascara_1.png",1,60,ArmorType.helmet);
Item.setHandEquipped(625,1);
Item.setCategory(625,ItemCategory.TOOL);
Player.addItemCreativeInv(625,1,0);
ModPE.setItem(626,"garlic",0,"Ajo");
Item.setCategory(626,ItemCategory.TOOL);
Player.addItemCreativeInv(626,1,0);
Item.defineArmor(627,"garlic",1,"Collar de Ajo","mob/collarajo.png",0.5,37,ArmorType.chestplate);
Item.setCategory(627,ItemCategory.TOOL);
Player.addItemCreativeInv(627,1,0);
ModPE.setItem(628,"spawn_egg",5,"Spawn de Vampiro");
Item.setCategory(628,ItemCategory.TOOL);
Player.addItemCreativeInv(628,1,0);
ModPE.setItem(629,"boneNeedle",0,"Bone Needle");
Item.setCategory(629,ItemCategory.TOOL);
Player.addItemCreativeInv(629,1,0);
ModPE.setItem(630,"poppet",0,"Poppet");
Item.setCategory(630,ItemCategory.TOOL);
Player.addItemCreativeInv(630,1,0);
ModPE.setItem(631,"plantatrampa",2,"Planta de Telaraña");
Item.setCategory(631,ItemCategory.TOOL);
Player.addItemCreativeInv(631,1,0);
ModPE.setItem(632,"plantatrampa",2,"Planta Trampa");
Item.setCategory(632,ItemCategory.TOOL);
Player.addItemCreativeInv(632,1,0);
ModPE.setItem(633,"diamanteencantado",0,"Diamante Encantado");
Item.setProperties(633,{"foil":true});
Item.setCategory(633,ItemCategory.TOOL);
Player.addItemCreativeInv(633,1,0);
ModPE.setItem(634,"advenbook",0,"Adventure Book");
Item.setProperties(634,{"foil":true});
Item.setCategory(634,ItemCategory.TOOL);
Player.addItemCreativeInv(634,1,0);
ModPE.setItem(635,"teleport",0,"Teleport");
Item.setProperties(635,{"foil":true});
Item.setCategory(635,ItemCategory.TOOL);
//Player.addItemCreativeInv(635,1,0);
ModPE.setItem(636,"arthana",0,"Arthana");
Item.setMaxDamage(636,100);
Item.setHandEquipped(636,1);
Item.setCategory(636,ItemCategory.TOOL);
Player.addItemCreativeInv(636,1,0);
ModPE.setItem(637,"creeperHeart",0,"Creeper Heart");
Item.setCategory(637,ItemCategory.TOOL);
//Player.addItemCreativeInv(637,1,0);
//

//Bloques
Block.defineBlock(180,"Altar",[["altar",0],["altar",0],["altar",0],["altar",0],["altar",0],["altar",0]],3,false,0);
Block.setLightOpacity(180, 0.0003);
Block.setDestroyTime(180,0.1);
Block.setShape(180,0,0,0,1,0.05,1);
Item.setCategory(180,ItemCategory.DECORATION);

Block.defineBlock(181,"Altar",[["altar",6],["altar",6],["altar",6],["altar",6],["altar",6],["altar",6]],3,false,0);
Block.setLightOpacity(181, 0.0003);
Block.setDestroyTime(181,0.1);
Block.setShape(181,0,0,0,1,0.05,1);
Item.setCategory(181,ItemCategory.DECORATION);

Block.defineBlock(200,"Planta Trampa",["dirt",0],0,false,0);
Block.setDestroyTime(200,1);
Block.setShape(200,0,0,0,1,1,1);
Item.setCategory(200,ItemCategory.DECORATION);

Block.defineBlock(201,"Planta Trampa",["dirt",0],0,false,0);
Block.setDestroyTime(201,1);
Block.setShape(201,0,0,0,1,1,1);
Item.setCategory(201,ItemCategory.DECORATION);

Block.defineBlock(202,"Planta Trampa",["dirt",0],0,false,0);
Block.setDestroyTime(202,1);
Block.setShape(202,0,0,0,1,1,1);
Item.setCategory(202,ItemCategory.DECORATION);

Block.defineBlock(203,"Planta Trampa",["dirt",0],0,false,0);
Block.setDestroyTime(203,1);
Block.setShape(203,0,0,0,1,1,1);
Item.setCategory(203,ItemCategory.DECORATION);

Block.defineBlock(237,"Altar",[["altar",3],["altar",3],["altar",3],["altar",3],["altar",3],["altar",3]],3,false,0);
Block.setLightOpacity(237, 0.0003);
Block.setDestroyTime(237,0.1);
Block.setShape(237,0,0,0,1,0.05,1);
Item.setCategory(237,ItemCategory.DECORATION);

Block.defineBlock(238,"Altar",[["altar",4],["altar",4],["altar",4],["altar",4],["altar",4],["altar",4]],3,false,0);
Block.setLightOpacity(238, 0.0003);
Block.setDestroyTime(238,0.1);
Block.setShape(238,0,0,0,1,0.05,1);
Item.setCategory(238,ItemCategory.DECORATION);

Block.defineBlock(239,"Altar",[["altar",5],["altar",5],["altar",5],["altar",5],["altar",5],["altar",5]],3,false,0);
Block.setLightOpacity(239, 0.0003);
Block.setDestroyTime(239,0.1);
Block.setShape(239,0,0,0,1,0.05,1);
Item.setCategory(239,ItemCategory.DECORATION);

Block.defineBlock(240,"Altar",[["altar",1],["altar",1],["altar",1],["altar",1],["altar",1],["altar",1]],3,false,0);
Block.setLightOpacity(240, 0.0003);
Block.setDestroyTime(240,0.1);
Block.setShape(240,0,0,0,1,0.05,1);
Item.setCategory(240,ItemCategory.DECORATION);

Block.defineBlock(241,"Altar",[["altar",9],["altar",7],["altar",8],["altar",8],["altar",8],["altar",8]],0,true,0);
Block.setDestroyTime(241,3);
Block.setShape(241,0,0,0,1,1,1);
Item.setCategory(241,ItemCategory.DECORATION);

Block.defineBlock(242,"Piedra Para Altar",["altar",10],0,true,0);
Block.setDestroyTime(242,3);
Block.setShape(242,0,0,0,1,1,1);
Item.setCategory(242,ItemCategory.DECORATION);
Player.addItemCreativeInv(242,1,0);

Block.defineBlock(204,"Altar Arthana",[["altar",9],["altar",23],["altar",8],["altar",8],["altar",8],["altar",8]],0,true,0);
Block.setDestroyTime(204,3);
Block.setShape(204,0,0,0,1,1,1);
Item.setCategory(204,ItemCategory.DECORATION);
//

//Crafteos
Item.addFurnaceRecipe(111,341,0,0);

Item.addShapedRecipe(600,1,0,["020","121","232"],["1",621,0,"2",334,0,"3",348,0]);
Item.addShapedRecipe(601,1,0,["101","232","222"],["1",621,0,"2",334,0,"3",608,0]);
Item.addShapedRecipe(602,1,0,["333","202","202"],["2",334,0,"3",621,0]);
Item.addShapedRecipe(603,1,0,["000","303","202"],["2",334,0,"3",621,0]);
Item.addShapedRecipe(623,1,0,["121","143","111"],["2",288,0,"3",351,0,"4",340,0]);
Item.addShapedRecipe(612,9,0,["222","232","222"],["2",611,0,"3",372,0]);
Item.addShapedRecipe(609,1,0,["121","121","131"],["2",280,0,"3",296,0]);
Item.addShapedRecipe(611,4,0,["354","212","463"],["1",351,15,"2",377,0,"3",344,0,"4",289,0,"5",353,0,"6",348,0]);
Item.addShapedRecipe(615,2,0,["535","626","545"],["2",369,0,"3",377,0,"4",348,0,"5",351,7,"6",351,8]);
Item.addShapedRecipe(614,2,0,["545","727","636"],["2",369,0,"3",377,0,"4",348,0,"5",351,7,"6",351,8,"7",351,11]);
Item.addShapedRecipe(242,1,0,["000","011","011"],["1",1,0]);
Item.addShapedRecipe(616,1,0,["030","222","333"],["2",334,0,"3",621,0]);

Item.addShapedRecipe(604,1,0,["222","232","222"],["2",287,0,"3",374,0]);
Item.addShapedRecipe(605,1,0,["404","030","202"],["2",12,0,"3",374,0,"4",81,0]);
Item.addShapedRecipe(606,1,0,["222","232","242"],["2",289,0,"3",374,0,"4",259,0]);
Item.addShapedRecipe(607,1,0,["020","030","000"],["2",259,0,"3",374,0]);

Item.addShapedRecipe(630,1,0,["242","543","212"],["2",35,0,"3",287,0,"4",106,0,"5",629,0]);
Item.addShapedRecipe(627,1,0,["333","212","121"],["2",626,0,"3",287,0]);
Item.addShapedRecipe(629,1,0,["111","123","111"],["2",352,0,"3",318,0]);
Item.addShapedRecipe(624,1,0,["111","424","131"],["2",630,0,"3",626,0,"4",621,0]);

Item.addShapedRecipe(631,1,0,["222","343","111"],["2",604,0,"3",70,0,"4",38,0]);
Item.addShapedRecipe(632,1,0,["222","343","111"],["2",605,0,"3",70,0,"4",38,0]);

Item.addShapedRecipe(636,1,0,["121","434","151"],["2",266,0,"3",388,0,"4",371,0,"5",280,0]);
//

function newLevel(){
save=1;
Loadconfig();
clientMessage("§3Witchery Mod §eby §asalasxd");
clientMessage("§6v§a4§7.§f0§7-§eBeta 6");
clientMessage("§9Consulta la pagina de facebook para mas informacion");
clientMessage("§3En el Canal de Youtube se Estaran Publicando Como Usar el Mod El link se Encuentra en el Manual");

checkVersion();
Saveconfig();
}

function leaveGame(){
save=0;
Saveconfig();
druid=0;
mana=0;
manalvl=0;
energia=0;
mision=0;
misioncount=0;
misioncount2=0;
misionface=0;
mlevel=0;
homemano=0;
portX=0;
portY=0;
portZ=0;
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
if(GUI != null){
GUI.dismiss();
GUI = null;
}
}}));
}

function Loadconfig(){
var sdcard=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/db/";
var sdcard2=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftpe/";

if(!java.io.File(sdcard2+"Witchery_Mod_beta_6.dat").exists()){
noticias();
save=0;
}
if(java.io.File(sdcard+"druid.dat").exists()){
var file=new java.io.File(sdcard+"druid.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
druid=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"mana.dat").exists()){
var file=new java.io.File(sdcard+"mana.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
mana=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"manalvl.dat").exists()){
var file=new java.io.File(sdcard+"manalvl.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
manalvl=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"energia.dat").exists()){
var file=new java.io.File(sdcard+"energia.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
energia=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"mision.dat").exists()){
var file=new java.io.File(sdcard+"mision.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
mision=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"misioncount.dat").exists()){
var file=new java.io.File(sdcard+"misioncount.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
misioncount=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"misioncount2.dat").exists()){
var file=new java.io.File(sdcard+"misioncount2.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
misioncount2=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"misionface.dat").exists()){
var file=new java.io.File(sdcard+"misionface.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
misionface=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(!java.io.File(sdcard+"druid.dat").exists()){
Saveconfig();
}
if(java.io.File(sdcard+"mlevel.dat").exists()){
var file=new java.io.File(sdcard+"mlevel.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
mlevel=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"homemano.dat").exists()){
var file=new java.io.File(sdcard+"homemano.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
homemano=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
if(java.io.File(sdcard+"portX.dat").exists()){
var file=new java.io.File(sdcard+"portX.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
portX=txt.toString().split("\n")[0].split(":")[1];
}
}
var file=new java.io.File(sdcard+"portY.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
portY=txt.toString().split("\n")[0].split(":")[1];
}
}
var file=new java.io.File(sdcard+"portZ.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
portZ=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
}
/*if(java.io.File(sdcard+"evento_activado.dat").exists()){
var file=new java.io.File(sdcard+"evento_activado.dat");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
evento=txt.toString().split("\n")[0].split(":")[1];
if(txt.toString().split("\n")[0].split(":")[1]==2){
//clientMessage("<Evento> Habla con el Aventurero para Saber mas del Evento");
}
}
}
fos.close();
}*/

}

function Saveconfig(){
var sdcard=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/db/";
var sdcard2=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftpe/";

if(!java.io.File(sdcard+"druid.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"druid.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("druid:"+druid+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"druid.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"druid.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("druid:"+druid+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"mana.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"mana.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("mana:"+mana+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"mana.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"mana.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("mana:"+mana+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"manalvl.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"manalvl.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("manalvl:"+manalvl+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"manalvl.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"manalvl.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("manalvl:"+manalvl+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"energia.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"energia.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("energia:"+energia+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"energia.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"energia.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("energia:"+energia+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"mision.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"mision.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("mision:"+mision+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"mision.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"mision.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("mision:"+mision+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"misioncount.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"misioncount.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("misioncount:"+misioncount+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"misioncount.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"misioncount.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("misioncount:"+misioncount+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"misionface.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"misionface.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("misionface:"+misionface+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"misionface.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"misionface.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("misionface:"+misionface+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"misioncount2.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"misioncount2.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("misioncount2:"+misioncount2+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"misioncount2.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"misioncount2.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("misioncount2:"+misioncount2+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"mlevel.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"mlevel.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("mlevel:"+mlevel+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"mlevel.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"mlevel.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("mlevel:"+mlevel+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"homemano.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"homemano.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("homemano:"+homemano+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"homemano.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"homemano.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("homemano:"+homemano+"\n");
outWrite.close();
}

}

function noticias(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Registro de Cambios"+"\n|V4.0|");
alert.setMessage("*Compatible con MCPE 0.14.2"+
"\n------beta 6------"+
"\n* Se Recomienda Usar La Version Mas Reciente de Block Launcher y MCPE 0.14.2"+
"\n* Si Matas un Skeleton con la Arthana Podras Conseguir su Cabeza"+
"\n* El Aventurero fue Cambiado por el Apothecary"+
"\n* Fix Bug en las Misiones del Aventurero"+
"\n* Fix Bug en Mano de Bruja"+
"\n* Mano de Bruja Puede Hacer TP Usando el Comando /tphome Sera el Lugar Donde Estes Parado"+
"\n* Videos de Como Encantar Se Estaran Publicando en la Cuenta de Youtube"+
"\n* Cerdo Fantasma Agregado de Nuevo Si Es Invocado Puede Ocultarse"+
"\n------beta 5------"+
"\n* Item Arthana se agrego para Aumentar la Energia del Altar"+
"\n* Mano de Bruja Encantada Puede Usarse como Arma Siendo una Witch"+
"\n* Escoba Encantada disminuyo 20% de Velocidad Normal, el Gorro de Bruja la aumentara 20% o si Seleccionas el Slot con la Mano de Bruja Encantada Aumentara 30% y Si tienes los 2 Items Puestos Aumentara 40%"+
"\n* El Aventurero tiene Misiones para ti"+
"\n* Fix bug en skin de Aventurero"+
"\n* Encantamiento de Mano de Bruja Cambiado"+
"\n* Poppet Vampiric Funcionando no Morir por Infeccion de Vampiro"+
"\n------beta 4------"+
"\n* Para Saber del Mod Entra a Youtube Link en el Manual"+
"\n* fix en centro de Actualizacion Trabajando Correctamente"+
"\n* Estate en Conexion a un WIFI para Estar en la Proxima Prueba de Eventos"+
"\n* Mano de Bruja Encantada Habilitada Necesitas ser una witch para Usarla"+
"\n* Altar Funcionando Nueva Mente"+
"\n------beta 3------"+
"\n* Collar de Ajo Evita que se Acerquen los Vampiros (pero no trates de retarlo o sera capas de atacar)"+
"\n* fix bug Textura de Vampiro"+
"\n* Nuevas Plantas Trampas"+
"\n* Mutantis & Mutantis Extremi Pueden Dar Experiencia Random"+
"\n* Mutantis Extremi muta los Bloques de Hierbas"+
"\n------beta 2------"+
"\n* fix bug en centro de Actualizacion"+
"\n------beta 1------"+
"\n* Altar y Encantamientos con Altar Desabilitados"+
"\n* Manual Estara Implementado Antes de la Version Final"+
"\n* Reporta Bugs para mejorar el mod :D"+
"\n* Manten una Copia de Tu Mundo por Precaucion"+
"\n"+
"\n|GRACIAS POR DESCARGAR MI MOD ATTE: SALASXD|"+
"\n");
alert.setPositiveButton("Facebook",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
save=1;
Saveconfig();
var sdcard2=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftpe/";
if(!java.io.File(sdcard2+"Witchery_Mod_beta_6.dat").exists()){
java.io.File(sdcard2).mkdirs();
var newFile=new java.io.File(sdcard2+"Witchery_Mod_beta_6.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("Open:Witchery\nVersion:4.0-beta_6");
outWrite.close();
}
var intentBrowser = new android.content.Intent(ctx);
intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/SalasxdModsMcPE"));
ctx.startActivity(intentBrowser);
}
});
alert.setNegativeButton("Ok",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
var sdcard2=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftpe/";
if(!java.io.File(sdcard2+"Witchery_Mod_beta_6.dat").exists()){
java.io.File(sdcard2).mkdirs();
var newFile=new java.io.File(sdcard2+"Witchery_Mod_beta_6.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("Open:Witchery\nVersion:4.0-beta_6");
outWrite.close();
}
Saveconfig();
save=1;
}
});
alert.show();
}
}));

}

ModPE.downloadFile=function(Nombre,url){
var descar=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/"+Nombre);
descar.createNewFile();
var fos3=new java.io.FileOutputStream(descar);
var response5=android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos3);
fos3.close();
};

function checkVersion(){
var r  = new java.lang.Runnable() {
run: function() {
try {
var urls= new java.net.URL("https://dl.dropboxusercontent.com/s/m62pjin0sqr6g97/Witchery%20Beta.txt");
//var urls= new java.net.URL("https://dl.dropboxusercontent.com/s/wgw9t6xdw15s1ky/Witchery%20Parche.txt");
var check = urls.openConnection();
check.setRequestMethod("GET");
check.setDoOutput(true);
check.connect();
check.getContentLength();
var script = check.getInputStream();
var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
var byteCount = 0; 
var checkedParche;
while((byteCount = script.read(typeb)) != -1) { 
checkedParche = new java.lang.String(typeb, 0, byteCount);               
}
if(beta<checkedParche){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Witchery Mod");
//alert.setMessage("Salasxd a Libero un parche"+
alert.setMessage("Salasxd a Libero una Nueva Beta"+
"\n"+
"\n* Fix Bug"+
"\n"); 
alert.setPositiveButton("Actualizar",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
try{
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://adf.ly/1YkF7F")));
}
catch(err){
print(err);
}
}
});
alert.setNegativeButton("Mas tarde",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){}
});
alert.show();
}
}));
}
else{
var urls= new java.net.URL("https://dl.dropboxusercontent.com/s/vvpsfbhr16i5ue8/witchery%20update.txt");
var check = urls.openConnection();
check.setRequestMethod("GET");
check.setDoOutput(true);
check.connect();
check.getContentLength();
var script = check.getInputStream();
var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
var byteCount = 0; 
var checkedVersion;
while((byteCount = script.read(typeb)) != -1) { 
checkedVersion = new java.lang.String(typeb, 0, byteCount);               
}
if(version<checkedVersion){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Witchery Mod");
alert.setMessage("Una Nueva Version Disponible"+
"\n* Contiene mojoras"+
"\n* Mas Items"+
"\n"+
"\nEspero te guste"); 
alert.setPositiveButton("Actualizar",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
try{
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://adf.ly/1YkF7F")));
}
catch(err){
print(err);
}
}
});
alert.setNegativeButton("Mas tarde",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){}
});
alert.show();
}
}));
}
else{
clientMessage("There aren't any updates right now");
var urls= new java.net.URL("https://dl.dropboxusercontent.com/s/rcpmkwjbzbe0j0o/Witchery%20Evento.txt");
var check = urls.openConnection();
check.setRequestMethod("GET");
check.setDoOutput(true);
check.connect();
check.getContentLength();
var script = check.getInputStream();
var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
var byteCount = 0; 
var checkedEvento;
while((byteCount = script.read(typeb)) != -1) { 
checkedEvento = new java.lang.String(typeb, 0, byteCount);               
}
if(checkedEvento==1){
var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/";
if(!java.io.File(path+"Evento.txt").exists()){
try{
java.io.File(path).mkdirs();
ModPE.downloadFile("Evento.txt","https://dl.dropboxusercontent.com/s/uh5te3pa4c77cca/Witchery%20Evento%20Texto.txt");
}
catch(err){
print(err);
}
}
if(java.io.File(path+"Evento.txt").exists()){
var file=new java.io.File(path+"Evento.txt");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
var eventext=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
clientMessage("<Evento> "+ChatColor.YELLOW+eventext);

var file=new java.io.File(path+"Evento.txt");
file.createNewFile();
file.delete();

}

}
else if(checkedEvento==2){
var sdcard=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/";
var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/";

if(!java.io.File(path+"Evento.txt").exists()){
try{
java.io.File(path).mkdirs();
ModPE.downloadFile("Evento.txt","https://dl.dropboxusercontent.com/s/uh5te3pa4c77cca/Witchery%20Evento%20Texto.txt");
}
catch(err){
print(err);
}
}
if(java.io.File(path+"Evento.txt").exists()){
var file=new java.io.File(path+"Evento.txt");
var fos=new java.io.FileInputStream(file);
var txt=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1){
txt.append(java.lang.Character(ch));
if(txt.toString().split("\n")[0].split(":")[1]){
var eventext=txt.toString().split("\n")[0].split(":")[1];
}
}
fos.close();
clientMessage("<Evento> "+ChatColor.YELLOW+eventext);

var file=new java.io.File(path+"Evento.txt");
file.createNewFile();
file.delete();

}
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Witchery Mod Evento");
alert.setMessage(eventext+"\nPara Entrar al Evento Debes Actualizar el Mod"); 
alert.setPositiveButton("Actualizar",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
try{
ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://www.mediafire.com/download/08c54cptbixjqac/Witchery_V4.modpkg")));
}
catch(err){
print(err);
}
}
});
alert.setNegativeButton("No Entrar",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){}
});
alert.show();
}
}));

}
}
}
}
catch(err){
print("Update check failed- Can't connect to internet!");
if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
print("Can't connect to internet.");
}
else{
clientMessage("Update check failed- Can't connect to internet!");
clientMessage("Connect to internet! and Participate in Upcoming Events");
} 
}
}
}
var threadt = new java.lang.Thread(r);
threadt.start();
}

function procCmd(c){
var cmd = c.split(" ");
if(cmd[0]=="tpdel"){
clientMessage("Home Borrado");
homemano=0;
Saveconfig();
}
else if(cmd[0]=="tphome"){
if(homemano==0){
var sdcard=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldDir()+"/db/";
clientMessage("Punto Home Seleccionado");
clientMessage("Usa el Comando /tpdel Para Cambiar de Home");
portX=getPlayerX();
portY=getPlayerY();
portZ=getPlayerZ();
if(!java.io.File(sdcard+"portX.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"portX.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("portX:"+portX+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"portX.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"portX.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("portX:"+portX+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"portY.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"portY.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("portY:"+portY+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"portY.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"portY.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("portY:"+portY+"\n");
outWrite.close();
}
if(!java.io.File(sdcard+"portZ.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"portZ.dat");
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("portZ:"+portZ+"\n");
outWrite.close();
}
else if(java.io.File(sdcard+"portZ.dat").exists()){
java.io.File(sdcard).mkdirs();
var newFile=new java.io.File(sdcard+"portZ.dat");
newFile.delete();
newFile.createNewFile();
var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("portZ:"+portZ+"\n");
outWrite.close();
}homemano=1;
Saveconfig();
}
else{
clientMessage("Usa el Comando /tpdel Para Cambiar de Home");
}

}
else{
clientMessage("§4Error de Comando (Witchery)");
}

}

//Bloques destruidos
function destroyBlock(x,y,z,side){
if(getTile(x,y,z)==31){
if(getTile(x,y-2,z)==201){
preventDefault();
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,620,1,0);
setTile(x,y-2,z,3);
}
}
if(getTile(x,y,z)==38){
preventDefault();
if(getTile(x,y-2,z)==200){
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,619,1,0);
setTile(x,y-2,z,3);
}
else if(getTile(x,y-2,z)==202){
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,631,1,0);
setTile(x,y-2,z,3);
}
else if(getTile(x,y-2,z)==203){
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,632,1,0);
setTile(x,y-2,z,3);
}
else{
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,38,1,0);
}
}
if(getTile(x,y,z)==200){
preventDefault();
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,619,1,0);
}
if(getTile(x,y,z)==201){
preventDefault();
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,620,1,0);
}
if(getTile(x,y,z)==202){
preventDefault();
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,631,1,0);
}
if(getTile(x,y,z)==203){
preventDefault();
Level.destroyBlock(x,y,z);
Level.dropItem(x,y,z,0,632,1,0);
}
if(getTile(x,y,z)==180||getTile(x,y,z)==181||getTile(x,y,z)==237||getTile(x,y,z)==238||getTile(x,y,z)==239||getTile(x,y,z)==240){
preventDefault();
Level.destroyBlock(x,y,z);
}
if(getTile(x,y,z)==241&&getCarriedItem()==0||getTile(x,y,z)==241&&getCarriedItem()||getTile(x,y,z)==204&&getCarriedItem()==0||getTile(x,y,z)==204&&getCarriedItem()){
subirenergia=false;
timeenergia=0;
energia=0;
mlevel=0;
if(getTile(x,y,z)==204||getTile(x+1,y,z)==204||getTile(x+2,y,z)==204||getTile(x-1,y,z)==204||getTile(x-2,y,z)==204||getTile(x,y,z+1)==204||getTile(x,y,z+2)==204||getTile(x,y,z-1)==204||getTile(x,y,z-2)==204||getTile(x+1,y,z+1)==204||getTile(x+2,y,z+1)==204||getTile(x+1,y,z+2)==204||getTile(x+2,y,z+2)==204||getTile(x-1,y,z+1)==204||getTile(x-2,y,z+1)==204||getTile(x-1,y,z-1)==204||getTile(x-1,y,z-2)==204||getTile(x-2,y,z-2)==204||getTile(x+1,y,z-2)==204||getTile(x-2,y,z+2)==204||getTile(x-2,y,z+1)==204||getTile(x+2,y,z-2)==204){
preventDefault();
if(getTile(x,y,z)==241){
setTile(x,y,z,241);
}
else if(getTile(x,y,z)==204){
setTile(x,y,z,204);
}
clientMessage("Quita el Arthana del Altar");
}
else {for(var f = 0; f <= 3; f++){
if(getTile(x+f,y,z)==241){
setTile(x+f,y,z,242);
}
if(getTile(x-f,y,z)==241){
setTile(x-f,y,z,242);
}
if(getTile(x,y,z+f)==241){
setTile(x,y,z+f,242);
}
if(getTile(x,y,z-f)==241){
setTile(x,y,z-f,242);
}
if(getTile(x+f,y,z+f)==241){
setTile(x+f,y,z+f,242);
}
if(getTile(x+f,y,z-f)==241){
setTile(x+f,y,z-f,242);
}
if(getTile(x-f,y,z+f)==241){
setTile(x-f,y,z+f,242);
}
if(getTile(x-f,y,z-f)==241){
setTile(x-f,y,z-f,242);
}
if(getTile(x+2,y,z+1)==241){
setTile(x+2,y,z+1,242);
}
if(getTile(x+2,y,z-1)==241){
setTile(x+2,y,z-1,242);
}
if(getTile(x+1,y,z+2)==241){
setTile(x+1,y,z+2,242);
}
if(getTile(x-1,y,z+2)==241){
setTile(x-1,y,z+2,242);
}

if(getTile(x-2,y,z+1)==241){
setTile(x-2,y,z+1,242);
}
if(getTile(x-2,y,z-1)==241){
setTile(x-2,y,z-1,242);
}
if(getTile(x+1,y,z-2)==241){
setTile(x+1,y,z-2,242);
}
if(getTile(x-1,y,z-2)==241){
setTile(x-1,y,z-2,242);
}

}}
}
}
//

function useItem(x,y,z,itemId,blockId,side,data,itemDamage,blockDamage){
if(itemId==611){
if(getTile(x,y,z)==6||getTile(x,y,z)==31||getTile(x,y,z)==32||getTile(x,y,z)==37||getTile(x,y,z)==38||getTile(x,y,z)==39||getTile(x,y,z)==40||getTile(x,y,z)==59||getTile(x,y,z)==81||getTile(x,y,z)==83||getTile(x,y,z)==104||getTile(x,y,z)==105||getTile(x,y,z)==106||getTile(x,y,z)==111||getTile(x,y,z)==115||getTile(x,y,z)==141||getTile(x,y,z)==142||getTile(x,y,z)==175||getTile(x,y,z)==244){
normal=Math.ceil(Math.random()*19);
switch(normal){
case 1:
setTile(x,y,z,6);
break;
case 2:
setTile(x,y,z,31);
break;
case 3:
setTile(x,y,z,32);
break;
case 4:
setTile(x,y,z,37);
break;
case 5:
setTile(x,y,z,38);
break;
case 6:
setTile(x,y,z,39);
break;
case 7:
setTile(x,y,z,40);
break;
case 8:
setTile(x,y,z,59);
break;
case 9:
setTile(x,y,z,81);
break;
case 10:
setTile(x,y,z,83);
break;
case 11:
setTile(x,y,z,104);
break;
case 12:
setTile(x,y,z,105);
break;
case 13:
setTile(x,y,z,106);
break;
case 14:
setTile(x,y,z,111);
break;
case 15:
setTile(x,y,z,115);
break;
case 16:
setTile(x,y,z,141);
break;
case 17:
setTile(x,y,z,142);
break;
case 18:
setTile(x,y,z,175);
break;
case 19:
setTile(x,y,z,244);
break;
case 20:
setTile(x,y,z,38);
setTile(x,y-2,z,200);
break;
case 21:
setTile(x,y,z,31);
setTile(x,y-2,z,201);
break;
}
expe=Math.ceil(Math.random()*50);
switch(expe){
case 15:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 26:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 38:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 41:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 48:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
}
Level.addParticle(ParticleType.flame,x,y,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x+0.1,y,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x,y,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x,y,z-0.1,0,0,0,0);

Level.addParticle(ParticleType.flame,x+0.1,y,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x+0.1,y,z-0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y,z-0.1,0,0,0,0);
if(Level.getGameMode()==0){
addItemInventory(611,-1);
}
}
}
if(itemId==612){
if(getTile(x,y,z)==6||getTile(x,y,z)==31||getTile(x,y,z)==32||getTile(x,y,z)==37||getTile(x,y,z)==38||getTile(x,y,z)==39||getTile(x,y,z)==40||getTile(x,y,z)==59||getTile(x,y,z)==81||getTile(x,y,z)==83||getTile(x,y,z)==104||getTile(x,y,z)==105||getTile(x,y,z)==106||getTile(x,y,z)==111||getTile(x,y,z)==115||getTile(x,y,z)==141||getTile(x,y,z)==142||getTile(x,y,z)==175||getTile(x,y,z)==244){
extremo=Math.ceil(Math.random()*4);
switch(extremo){
case 1:
setTile(x,y,z,38);
setTile(x,y-2,z,200);
spawnsilver=Math.ceil(Math.random()*20);
switch(spawnsilver){
case 6:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x+0.1,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
case 12:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
break;
case 17:
Level.spawnMob(x,y,z,39);
break;
case 9:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
}
break;
case 2:
setTile(x,y,z,115);
spawnsilver=Math.ceil(Math.random()*20);
switch(spawnsilver){
case 6:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x+0.1,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
case 12:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
break;
case 17:
Level.spawnMob(x,y,z,39);
break;
case 9:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
}
break;
case 3:
setTile(x,y,z,31);
setTile(x,y-2,z,201);
spawnsilver=Math.ceil(Math.random()*20);
switch(spawnsilver){
case 6:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x+0.1,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
case 12:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
break;
case 17:
Level.spawnMob(x,y,z,39);
break;
case 9:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
}
break;
case 4:
normal=Math.ceil(Math.random()*19);
switch(normal){
case 1:
setTile(x,y,z,6);
break;
case 2:
setTile(x,y,z,31);
break;
case 3:
setTile(x,y,z,32);
break;
case 4:
setTile(x,y,z,37);
break;
case 5:
setTile(x,y,z,38);
break;
case 6:
setTile(x,y,z,39);
break;
case 7:
setTile(x,y,z,40);
break;
case 8:
setTile(x,y,z,59);
break;
case 9:
setTile(x,y,z,81);
break;
case 10:
setTile(x,y,z,83);
break;
case 11:
setTile(x,y,z,104);
break;
case 12:
setTile(x,y,z,105);
break;
case 13:
setTile(x,y,z,106);
break;
case 14:
setTile(x,y,z,111);
break;
case 15:
setTile(x,y,z,115);
break;
case 16:
setTile(x,y,z,141);
break;
case 17:
setTile(x,y,z,142);
break;
case 18:
setTile(x,y,z,175);
break;
case 19:
setTile(x,y,z,244);
break;
}
spawnsilver=Math.ceil(Math.random()*20);
switch(spawnsilver){
case 6:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x+0.1,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
case 12:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
break;
case 17:
Level.spawnMob(x,y,z,39);
break;
case 9:
Level.spawnMob(x,y,z,39);
Level.spawnMob(x,y,z-0.1,39);
Level.spawnMob(x-0.1,y,z,39);
break;
}
break;
}
expe=Math.ceil(Math.random()*50);
switch(expe){
case 15:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 26:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 38:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 41:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
case 48:
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
Level.spawnMob(x,y,z,EntityType.EXPERIENCE_ORB);
break;
}
Level.addParticle(ParticleType.flame,x,y,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x+0.1,y,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x,y,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x,y,z-0.1,0,0,0,0);

Level.addParticle(ParticleType.flame,x+0.1,y,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x+0.1,y,z-0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y,z-0.1,0,0,0,0);
if(Level.getGameMode()==0){
addItemInventory(612,-1);
}
}
else if(getTile(x,y,z)==2){
setTile(x,y,z,110);
}
else if(getTile(x,y,z)==110){
setTile(x,y,z,243);
}
else if(getTile(x,y,z)==243){
setTile(x,y,z,2);
}
}
if(itemId==614){
if(getTile(x,y,z)==1||getTile(x,y,z)==2||getTile(x,y,z)==3||getTile(x,y,z)==4||getTile(x,y,z)==5||getTile(x,y,z)==7||getTile(x,y,z)==12||getTile(x,y,z)==13||getTile(x,y,z)==14||getTile(x,y,z)==15||getTile(x,y,z)==16||getTile(x,y,z)==17||getTile(x,y,z)==21||getTile(x,y,z)==22||getTile(x,y,z)==24||getTile(x,y,z)==35||getTile(x,y,z)==41||getTile(x,y,z)==42||getTile(x,y,z)==43||getTile(x,y,z)==45||getTile(x,y,z)==48||getTile(x,y,z)==49||getTile(x,y,z)==56||getTile(x,y,z)==57||getTile(x,y,z)==73||getTile(x,y,z)==74||getTile(x,y,z)==80||getTile(x,y,z)==82||getTile(x,y,z)==87||getTile(x,y,z)==88||getTile(x,y,z)==97||getTile(x,y,z)==98||getTile(x,y,z)==110||getTile(x,y,z)==112||getTile(x,y,z)==121||getTile(x,y,z)==133||getTile(x,y,z)==152||getTile(x,y,z)==153||getTile(x,y,z)==155||getTile(x,y,z)==157||getTile(x,y,z)==159||getTile(x,y,z)==162||getTile(x,y,z)==172||getTile(x,y,z)==173){
if(getTile(x,y+1,z)==0){
setTile(x,y+1,z,181);
if(Level.getGameMode()==0){
toolUse(100,614);
}
}
}
}
if(itemId==615){
if(getTile(x,y,z)==1||getTile(x,y,z)==2||getTile(x,y,z)==3||getTile(x,y,z)==4||getTile(x,y,z)==5||getTile(x,y,z)==7||getTile(x,y,z)==12||getTile(x,y,z)==13||getTile(x,y,z)==14||getTile(x,y,z)==15||getTile(x,y,z)==16||getTile(x,y,z)==17||getTile(x,y,z)==21||getTile(x,y,z)==22||getTile(x,y,z)==24||getTile(x,y,z)==35||getTile(x,y,z)==41||getTile(x,y,z)==42||getTile(x,y,z)==43||getTile(x,y,z)==45||getTile(x,y,z)==48||getTile(x,y,z)==49||getTile(x,y,z)==56||getTile(x,y,z)==57||getTile(x,y,z)==73||getTile(x,y,z)==74||getTile(x,y,z)==80||getTile(x,y,z)==82||getTile(x,y,z)==87||getTile(x,y,z)==88||getTile(x,y,z)==97||getTile(x,y,z)==98||getTile(x,y,z)==110||getTile(x,y,z)==112||getTile(x,y,z)==121||getTile(x,y,z)==133||getTile(x,y,z)==152||getTile(x,y,z)==153||getTile(x,y,z)==155||getTile(x,y,z)==157||getTile(x,y,z)==159||getTile(x,y,z)==162||getTile(x,y,z)==172||getTile(x,y,z)==173){
if(getTile(x,y+1,z)==0){
simbolos=Math.ceil(Math.random()*5);
switch(simbolos){
case 1:
setTile(x,y+1,z,180);
break;
case 2:
setTile(x,y+1,z,240);
break;
case 3:
setTile(x,y+1,z,237);
break;
case 4:
setTile(x,y+1,z,238);
break;
case 5:
setTile(x,y+1,z,239);
break;
}
if(Level.getGameMode()==0){
toolUse(100,615);
}
}
}
}
if(itemId==619){
if(getTile(x,y,z)==2||getTile(x,y,z)==3||getTile(x,y,z)==110||getTile(x,y,z)==198||getTile(x,y,z)==243){
if(getTile(x,y+1,z)==0){
setTile(x,y+1,z,38);
setTile(x,y-1,z,200);
Level.addParticle(ParticleType.flame,x,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x+0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.flame,x,y+1,z-0.1,0,0,0,0);

Level.addParticle(ParticleType.flame,x+0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x+0.1,y+1,z-0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.flame,x-0.1,y+1,z-0.1,0,0,0,0);
if(Level.getGameMode()==0){
addItemInventory(619,-1);
}
}
}
}
if(itemId==620){
if(getTile(x,y,z)==2||getTile(x,y,z)==3||getTile(x,y,z)==110||getTile(x,y,z)==198||getTile(x,y,z)==243){
if(getTile(x,y+1,z)==0){
setTile(x,y+1,z,31);
setTile(x,y-1,z,201);
Level.addParticle(ParticleType.happyVillager,x,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x,y+1,z-0.1,0,0,0,0);

Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z-0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z-0.1,0,0,0,0);
if(Level.getGameMode()==0){
addItemInventory(620,-1);
}
}
}
}
if(itemId==610){
escoba = Level.spawnMob(x,y+1,z,10);
Entity.setRenderType(escoba,escobaencantada.renderType);
Entity.setMobSkin(escoba, "entity/escoba.png");
Entity.setNameTag(escoba,"§8escoba");
Entity.setHealth(escoba,100);
if(Level.getGameMode()==0){
addItemInventory(610,-1);
}
Entity.rideAnimal(getPlayerEnt(),escoba);
ModPE.showTipMessage("Usa el boton saltar para salir");
escobaon=true;
}
if(getTile(x,y,z)==241&&Entity.isSneaking(getPlayerEnt())==false||getTile(x,y,z)==204&&Entity.isSneaking(getPlayerEnt())==false){
preventDefault();
if(energia>=0){

}
else{
energia=0;
}
a1=x;
b1=y;
c1=z;
if(getTile(x,y+1,z)==144||getTile(x+1,y+1,z)==144||getTile(x+2,y+1,z)==144||getTile(x-1,y+1,z)==144||getTile(x-2,y+1,z)==144||getTile(x,y+1,z+1)==144||getTile(x,y+1,z+2)==144||getTile(x,y+1,z-1)==144||getTile(x,y+1,z-2)==144||getTile(x+1,y+1,z+1)==144||getTile(x+2,y+1,z+1)==144||getTile(x+1,y+1,z+2)==144||getTile(x+2,y+1,z+2)==144||getTile(x-1,y+1,z+1)==144||getTile(x-2,y+1,z+1)==144||getTile(x-1,y+1,z-1)==144||getTile(x-1,y+1,z-2)==144||getTile(x-2,y+1,z-2)==144||getTile(x+1,y+1,z-2)==144||getTile(x-2,y+1,z+2)==144||getTile(x-2,y+1,z+1)==144||getTile(x+2,y+1,z-2)==144){

}
else if(getTile(x,y,z)==204||getTile(x+1,y,z)==204||getTile(x+2,y,z)==204||getTile(x-1,y,z)==204||getTile(x-2,y,z)==204||getTile(x,y,z+1)==204||getTile(x,y,z+2)==204||getTile(x,y,z-1)==204||getTile(x,y,z-2)==204||getTile(x+1,y,z+1)==204||getTile(x+2,y,z+1)==204||getTile(x+1,y,z+2)==204||getTile(x+2,y,z+2)==204||getTile(x-1,y,z+1)==204||getTile(x-2,y,z+1)==204||getTile(x-1,y,z-1)==204||getTile(x-1,y,z-2)==204||getTile(x-2,y,z-2)==204||getTile(x+1,y,z-2)==204||getTile(x-2,y,z+2)==204||getTile(x-2,y,z+1)==204||getTile(x+2,y,z-2)==204){
if(getTile(x,y+1,z)==144||getTile(x+1,y+1,z)==144||getTile(x+2,y+1,z)==144||getTile(x-1,y+1,z)==144||getTile(x-2,y+1,z)==144||getTile(x,y+1,z+1)==144||getTile(x,y+1,z+2)==144||getTile(x,y+1,z-1)==144||getTile(x,y+1,z-2)==144||getTile(x+1,y+1,z+1)==144||getTile(x+2,y+1,z+1)==144||getTile(x+1,y+1,z+2)==144||getTile(x+2,y+1,z+2)==144||getTile(x-1,y+1,z+1)==144||getTile(x-2,y+1,z+1)==144||getTile(x-1,y+1,z-1)==144||getTile(x-1,y+1,z-2)==144||getTile(x-2,y+1,z-2)==144||getTile(x+1,y+1,z-2)==144||getTile(x-2,y+1,z+2)==144||getTile(x-2,y+1,z+1)==144||getTile(x+2,y+1,z-2)==144){
mlevel=2;
}
}
else{
mlevel=0;
}
subirenergia=true;
altarGUI();

}
if(getTile(x,y,z)==204&&Player.getCarriedItem()==0&&Entity.isSneaking(getPlayerEnt())==true){
preventDefault();
setTile(x,y,z,241);
Level.dropItem(x,y+1,z,0,636,1,0);
mlevel=1;
}
else if(getTile(x,y,z)==204&&Player.getCarriedItem()&&Entity.isSneaking(getPlayerEnt())==true){
preventDefault();
setTile(x,y,z,241);
Level.dropItem(x,y+1,z,0,636,1,0);
mlevel=1;
}
if(getTile(x,y,z)==241&&Player.getCarriedItem()==636&&Entity.isSneaking(getPlayerEnt())==true){
preventDefault();
if(getTile(x,y+1,z)==144||getTile(x+1,y+1,z)==144||getTile(x+2,y+1,z)==144||getTile(x-1,y+1,z)==144||getTile(x-2,y+1,z)==144||getTile(x,y+1,z+1)==144||getTile(x,y+1,z+2)==144||getTile(x,y+1,z-1)==144||getTile(x,y+1,z-2)==144||getTile(x+1,y+1,z+1)==144||getTile(x+2,y+1,z+1)==144||getTile(x+1,y+1,z+2)==144||getTile(x+2,y+1,z+2)==144||getTile(x-1,y+1,z+1)==144||getTile(x-2,y+1,z+1)==144||getTile(x-1,y+1,z-1)==144||getTile(x-1,y+1,z-2)==144||getTile(x-2,y+1,z-2)==144||getTile(x+1,y+1,z-2)==144||getTile(x-2,y+1,z+2)==144||getTile(x-2,y+1,z+1)==144||getTile(x+2,y+1,z-2)==144){
if(getTile(x,y,z)==204||getTile(x+1,y,z)==204||getTile(x+2,y,z)==204||getTile(x-1,y,z)==204||getTile(x-2,y,z)==204||getTile(x,y,z+1)==204||getTile(x,y,z+2)==204||getTile(x,y,z-1)==204||getTile(x,y,z-2)==204||getTile(x+1,y,z+1)==204||getTile(x+2,y,z+1)==204||getTile(x+1,y,z+2)==204||getTile(x+2,y,z+2)==204||getTile(x-1,y,z+1)==204||getTile(x-2,y,z+1)==204||getTile(x-1,y,z-1)==204||getTile(x-1,y,z-2)==204||getTile(x-2,y,z-2)==204||getTile(x+1,y,z-2)==204||getTile(x-2,y,z+2)==204||getTile(x-2,y,z+1)==204||getTile(x+2,y,z-2)==204){

}
else{
setTile(x,y,z,204);
mlevel=2;
}
}
}
if(getTile(x,y,z)==242&&getTile(x+1,y,z)==242&&getTile(x,y,z+1)==242&&getTile(x,y,z-1)==242&&getTile(x+1,y,z+1)==242&&getTile(x+1,y,z-1)==242){
setTile(x,y,z,241);
setTile(x+1,y,z,241);
setTile(x,y,z+1,241);
setTile(x,y,z-1,241);
setTile(x+1,y,z+1,241);
setTile(x+1,y,z-1,241);
subirenergia=false;
timeenergia=0;
energia=0;
mlevel=0;
}
if(getTile(x,y,z)==242&&getTile(x-1,y,z)==242&&getTile(x,y,z+1)==242&&getTile(x,y,z-1)==242&&getTile(x-1,y,z+1)==242&&getTile(x-1,y,z-1)==242){
setTile(x,y,z,241);
setTile(x-1,y,z,241);
setTile(x,y,z+1,241);
setTile(x,y,z-1,241);
setTile(x-1,y,z+1,241);
setTile(x-1,y,z-1,241);
subirenergia=false;
timeenergia=0;
energia=0;
mlevel=0;
}
if(getTile(x,y,z)==242&&getTile(x,y,z+1)==242&&getTile(x+1,y,z)==242&&getTile(x-1,y,z)==242&&getTile(x+1,y,z+1)==242&&getTile(x-1,y,z+1)==242){
setTile(x,y,z,241);
setTile(x,y,z+1,241);
setTile(x+1,y,z,241);
setTile(x-1,y,z,241);
setTile(x+1,y,z+1,241);
setTile(x-1,y,z+1,241);
subirenergia=false;
timeenergia=0;
energia=0;
mlevel=0;
}
if(getTile(x,y,z)==242&&getTile(x,y,z-1)==242&&getTile(x+1,y,z)==242&&getTile(x-1,y,z)==242&&getTile(x+1,y,z-1)==242&&getTile(x-1,y,z-1)==242){
setTile(x,y,z,241);
setTile(x,y,z-1,241);
setTile(x+1,y,z,241);
setTile(x-1,y,z,241);
setTile(x+1,y,z-1,241);
setTile(x-1,y,z-1,241);
subirenergia=false;
timeenergia=0;
energia=0;
mlevel=0;
}
if(itemId==618){
NPC = Level.spawnMob(x,y+1,z,15);
Entity.setRenderType(NPC,EntityRenderType.human);
Entity.setMobSkin(NPC,"mob/apothecary.png");
Entity.setNameTag(NPC,"§8Apothecary");
Entity.setHealth(NPC , 20);
if(Level.getGameMode()==0){
addItemInventory(618,-1);
}
}
if(itemId==628){
vamp = Level.spawnMob(x,y+1,z,EntityType.ZOMBIE);
Entity.setRenderType(vamp,3);
Entity.setMobSkin(vamp,"mob/vampire.png");
Entity.setNameTag(vamp,"§8Vampiro");
if(Level.getGameMode()==0){
addItemInventory(628,-1);
}
}
if(itemId==631){
if(getTile(x,y,z)==2||getTile(x,y,z)==3||getTile(x,y,z)==110||getTile(x,y,z)==198||getTile(x,y,z)==243){
if(getTile(x,y+1,z)==0){
setTile(x,y+1,z,38);
setTile(x,y-1,z,202);
Level.addParticle(ParticleType.happyVillager,x,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x,y+1,z-0.1,0,0,0,0);

Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z-0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z-0.1,0,0,0,0);
if(Level.getGameMode()==0){
addItemInventory(631,-1);
}
}
}
}
if(itemId==632){
if(getTile(x,y,z)==2||getTile(x,y,z)==3||getTile(x,y,z)==110||getTile(x,y,z)==198||getTile(x,y,z)==243){
if(getTile(x,y+1,z)==0){
setTile(x,y+1,z,38);
setTile(x,y-1,z,203);
Level.addParticle(ParticleType.happyVillager,x,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x,y+1,z-0.1,0,0,0,0);

Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x+0.1,y+1,z-0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z+0.1,0,0,0,0);
Level.addParticle(ParticleType.happyVillager,x-0.1,y+1,z-0.1,0,0,0,0);
if(Level.getGameMode()==0){
addItemInventory(632,-1);
}
}
}
}
if(itemId==617){
if(getTile(x,y,z)&&Entity.isSneaking(getPlayerEnt())==true){
if(homemano==1&&manoport==3){
if(mana>=100){
setPosition(Player.getEntity(),portX,portY+1,portZ);
Level.addParticle(ParticleType.hugeexplosionSeed,portX,portY+1,portZ,0,0,0,0);
mana=mana-100;
}
else if(mana<=99){
clientMessage("Not Mana");
}
manoport=0;
}
else if(homemano==1&&manoport==2){
clientMessage("Toca de Nuevo Para Tp");
manoport=3;
}
else if(homemano==1&&manoport==1){
clientMessage("Toca 2 Veces Para Tp");
manoport=2;
}
else if(homemano==1&&manoport==0){
clientMessage("Toca 3 Veces Para Tp");
manoport=1;
}
else if(homemano==0){
clientMessage("Usa el Comando /tphome para Seleccionar el Lugar de Teleport");
}
}
}
if(itemId==635){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
if(teletime==0){
teleport = Level.spawnMob(x,y+1.5,z,10);
Entity.setNameTag(teleport,"§8teleport");
Entity.setRenderType(teleport,teleportren.renderType);
Entity.setHealth(teleport, 1000000);
Entity.setImmobile(teleport,true);
energia=100000
if(Level.getGameMode()==0){
addItemInventory(635,-1);
}
}
}}}}}}}}}

}
//altar
if(itemId==264){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=120){
if(Level.getGameMode()==0){
addItemInventory(264,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.dropItem(x,y+0.5,z,0,608,1,0);
energia=energia-120;
}
else if(energia<=119){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}
}
}
if(itemId==609){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=300){
if(Level.getGameMode()==0){
addItemInventory(609,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.dropItem(x,y+1,z,0,610,1,0);
energia=energia-300;
}
else if(energia<=299){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}
}
}
if(itemId==608){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=600){
if(Level.getGameMode()==0){
addItemInventory(608,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.dropItem(x,y+1,z,0,633,1,0);
energia=energia-600;
}
else if(energia<=599){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}
}
}
if(itemId==633){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=750){
if(Level.getGameMode()==0){
addItemInventory(633,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
itemsaltar=1;
}
else if(energia<=749){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}
}
}
if(itemId==616){
if(itemsaltar==1){
if(getTile(x,y,z)==181){

if(getTile(x+5,y,z)==180||getTile(x+5,y,z)==237||getTile(x+5,y,z)==238||getTile(x+5,y,z)==239||getTile(x+5,y,z)==240){
if(getTile(x-5,y,z)==180||getTile(x-5,y,z)==237||getTile(x-5,y,z)==238||getTile(x-5,y,z)==239||getTile(x-5,y,z)==240){
if(getTile(x,y,z+5)==180||getTile(x,y,z+5)==237||getTile(x,y,z+5)==238||getTile(x,y,z+5)==239||getTile(x,y,z+5)==240){
if(getTile(x,y,z-5)==180||getTile(x,y,z-5)==237||getTile(x,y,z-5)==238||getTile(x,y,z-5)==239||getTile(x,y,z-5)==240){
if(getTile(x+4,y,z+4)==180||getTile(x+4,y,z+4)==237||getTile(x+4,y,z+4)==238||getTile(x+4,y,z+4)==239||getTile(x+4,y,z+4)==240){
if(getTile(x+4,y,z-4)==180||getTile(x+4,y,z-4)==237||getTile(x+4,y,z-4)==238||getTile(x+4,y,z-4)==239||getTile(x+4,y,z-4)==240){
if(getTile(x-4,y,z+4)==180||getTile(x-4,y,z+4)==237||getTile(x-4,y,z+4)==238||getTile(x-4,y,z+4)==239||getTile(x-4,y,z+4)==240){
if(getTile(x-4,y,z-4)==180||getTile(x-4,y,z-4)==237||getTile(x-4,y,z-4)==238||getTile(x-4,y,z-4)==239||getTile(x-4,y,z-4)==240){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=1100){
if(Level.getGameMode()==0){
addItemInventory(616,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
if(Player.getArmorSlot(0)==600&&Player.getArmorSlot(1)==601&&Player.getArmorSlot(2)==602&&Player.getArmorSlot(3)==603){
Level.dropItem(x,y+1,z,0,617,1,0);
Level.addParticle(ParticleType.hugeexplosionSeed,x,y+0.7,z,0,0,0,0);
druid=1;
mana=100;
energia=energia-1100;
itemsaltar=0;
Saveconfig();
}
else{
clientMessage("§4No tienes la vestimenta de una witch");
}
}
else if(energia<=1099){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}

}

}
}
if(itemId==340){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=120){
if(Level.getGameMode()==0){
addItemInventory(340,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.dropItem(x,y+1,z,0,403,1,0);
energia=energia-120;
}
else if(energia<=119){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}
}
}
if(itemId==403){
if(getTile(x,y,z)==181){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=120){
if(Level.getGameMode()==0){
addItemInventory(403,-1);
}
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
itemsaltar=2;
}
else if(energia<=119){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}
}
}
if(itemId==319){
if(itemsaltar==2){
if(getTile(x,y,z)==181){

if(getTile(x+5,y,z)==180||getTile(x+5,y,z)==237||getTile(x+5,y,z)==238||getTile(x+5,y,z)==239||getTile(x+5,y,z)==240){
if(getTile(x-5,y,z)==180||getTile(x-5,y,z)==237||getTile(x-5,y,z)==238||getTile(x-5,y,z)==239||getTile(x-5,y,z)==240){
if(getTile(x,y,z+5)==180||getTile(x,y,z+5)==237||getTile(x,y,z+5)==238||getTile(x,y,z+5)==239||getTile(x,y,z+5)==240){
if(getTile(x,y,z-5)==180||getTile(x,y,z-5)==237||getTile(x,y,z-5)==238||getTile(x,y,z-5)==239||getTile(x,y,z-5)==240){
if(getTile(x+4,y,z+4)==180||getTile(x+4,y,z+4)==237||getTile(x+4,y,z+4)==238||getTile(x+4,y,z+4)==239||getTile(x+4,y,z+4)==240){
if(getTile(x+4,y,z-4)==180||getTile(x+4,y,z-4)==237||getTile(x+4,y,z-4)==238||getTile(x+4,y,z-4)==239||getTile(x+4,y,z-4)==240){
if(getTile(x-4,y,z+4)==180||getTile(x-4,y,z+4)==237||getTile(x-4,y,z+4)==238||getTile(x-4,y,z+4)==239||getTile(x-4,y,z+4)==240){
if(getTile(x-4,y,z-4)==180||getTile(x-4,y,z-4)==237||getTile(x-4,y,z-4)==238||getTile(x-4,y,z-4)==239||getTile(x-4,y,z-4)==240){
if(getTile(x+3,y,z)==180||getTile(x+3,y,z)==237||getTile(x+3,y,z)==238||getTile(x+3,y,z)==239||getTile(x+3,y,z)==240){
if(getTile(x-3,y,z)==180||getTile(x-3,y,z)==237||getTile(x-3,y,z)==238||getTile(x-3,y,z)==239||getTile(x-3,y,z)==240){
if(getTile(x,y,z+3)==180||getTile(x,y,z+3)==237||getTile(x,y,z+3)==238||getTile(x,y,z+3)==239||getTile(x,y,z+3)==240){
if(getTile(x,y,z-3)==180||getTile(x,y,z-3)==237||getTile(x,y,z-3)==238||getTile(x,y,z-3)==239||getTile(x,y,z-3)==240){
if(getTile(x+2,y,z+2)==180||getTile(x+2,y,z+2)==237||getTile(x+2,y,z+2)==238||getTile(x+2,y,z+2)==239||getTile(x+2,y,z+2)==240){
if(getTile(x+2,y,z-2)==180||getTile(x+2,y,z-2)==237||getTile(x+2,y,z-2)==238||getTile(x+2,y,z-2)==239||getTile(x+2,y,z-2)==240){
if(getTile(x-2,y,z+2)==180||getTile(x-2,y,z+2)==237||getTile(x-2,y,z+2)==238||getTile(x-2,y,z+2)==239||getTile(x-2,y,z+2)==240){
if(getTile(x-2,y,z-2)==180||getTile(x-2,y,z-2)==237||getTile(x-2,y,z-2)==238||getTile(x-2,y,z-2)==239||getTile(x-2,y,z-2)==240){
for(var f = 0; f <= 10; f++){
if(getTile(x+f,y,z)==241||getTile(x-f,y,z)==241||getTile(x,y,z+f)==241||getTile(x,y,z-f)==241||getTile(x+f,y,z+f)==241||getTile(x+f,y,z-f)==241||getTile(x-f,y,z+f)==241||getTile(x-f,y,z-f)==241){
if(energia>=500){
if(Level.getGameMode()==0){
addItemInventory(319,-1);
}
NPC = Level.spawnMob(x,y+1,z,12);
Entity.setMobSkin(NPC,"mob/pig_fantasma.png");
Entity.setHealth(NPC , 20);
Entity.setNameTag(NPC,"§8Cerdo Fantasma");
Level.playSoundEnt(Player.getEntity(),"random.fizz",100,100);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
Level.addParticle(6,x,y,z,0,0,0,0);
itemsaltar=0;
energia=energia-500;
}
else if(energia<=499){
clientMessage("§4Sin Energia Suficiente");
}
}
}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}

}

}
}

//
}

function attackHook(attacker, victim){
if(Entity.getNameTag(victim)=="§8teleport"){
preventDefault();

}
if(Entity.getMobSkin(victim)=="entity/escoba.png"){
preventDefault();
if(Level.getGameMode()==0){
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,610,1,0);
}
Entity.remove(victim);
}
if(Entity.getMobSkin(victim)=="mob/apothecary.png"&&Entity.isSneaking(getPlayerEnt())==true){
preventDefault();
//clientMessage("<aventurero> Por ahora no tengo nada que darte");
informaNPCGUI();
}
if(Player.getCarriedItem()==617){
if(druid==1){
if(mana>=16){
Level.addParticle(ParticleType.angryVillager,Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,0);
Level.addParticle(ParticleType.angryVillager,Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,0);
if(Entity.getHealth(victim)>=8){
Entity.setHealth(victim,Entity.getHealth(victim)-7);
}
else if(Entity.getHealth(victim)==6){
Entity.setHealth(victim,Entity.getHealth(victim)-2);
}
else if(Entity.getHealth(victim)==2){
Entity.setHealth(victim,Entity.getHealth(victim)-1);
}
//Entity.addEffect(victim,MobEffect.wither,5*20,0,true,true);
Entity.setFireTicks(victim,2);
Level.addParticle(ParticleType.angryVillager,Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,0);
Level.addParticle(ParticleType.angryVillager,Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,0,0,0);
mana=mana-16;
}
else{
clientMessage("Not Mana");
}
}
else if(druid==0){

}
}
if(Entity.getNameTag(attacker)=="§8Vampiro"&&victim==getPlayerEnt()){
if(Level.getGameMode()==0){
if(Entity.getHealth(getPlayerEnt())>=1){
morf3=Math.ceil(Math.random()*10);
switch(morf3){
case 6:
vampcount=1;
break;
}
}
}
}
if(Player.getCarriedItem()==636){
toolUse(100,636);
}
if(Entity.getNameTag(victim)=="§8Cerdo Fantasma"&&Entity.isSneaking(getPlayerEnt())==true){
preventDefault();
//var pigv=victim;
if(Player.getCarriedItem()==264){
addItemInventory(264,-1);
pigd=Math.ceil(Math.random()*10);
switch(pigd){
case 3:
clientMessage("ohh! oohhh!");
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,264,5,0);
break;
case 7:
clientMessage("ohh! oohhh!");
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,264,2,0);
break;
}
pigb=Math.ceil(Math.random()*20);
switch(pigb){
case 13:
clientMessage("ohh! oohhh! bye");
Entity.remove(victim);
break;
}
}
else{
if(Entity.setImmobile(victim)==false){
Entity.setImmobile(victim,true);
}
else if(Entity.setImmobile(victim)==true){
Entity.setImmobile(victim,false);
}
//CerdoGUI();
}
}
}

function deathHook(attacker,victim){
if(Entity.getEntityTypeId(victim)==19){
woolbat=Math.ceil(Math.random()*7);
switch(woolbat){
case 2:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,621,1,0);
break;
case 5:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,621,3,0);
break;
}
}
if(Entity.getEntityTypeId(victim)==EntityType.witch){
dropwitch=Math.ceil(Math.random()*13);
switch(dropwitch){
case 2:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,626,1,0);
break;
case 5:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,626,3,0);
break;
case 7:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,617,1,0);
break;
}
}
if(Entity.getMobSkin(victim)=="entity/escoba.png"){
preventDefault();
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,610,1,0);
}
if(Entity.getMobSkin(victim)=="mob/vampire.png"){
drop3=Math.ceil(Math.random()*10);
switch(drop3){
case 3:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,625,1,0);
break;
case 6:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,621,1,0);
break;
case 8:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,438,1,24);
break;
}
}
if(victim==getPlayerEnt()&&vampcount==1||victim==getPlayerEnt()&&Entity.getMobSkin(attacker)=="mob/vampire.png"){
vamp = Level.spawnMob(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),EntityType.ZOMBIE);
Entity.setRenderType(vamp,3);
Entity.setArmor(vamp,0,625);
Entity.setMobSkin(vamp,"mob/vampire.png");
Entity.setNameTag(vamp,"§8Vampiro");
}
if(Entity.getEntityTypeId(victim)==33&&Player.getCarriedItem()==636&&attacker==getPlayerEnt()){
dropcora=Math.ceil(Math.random()*2);
switch(dropcora){
case 2:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,637,1,0);
break;
}
}
else if(Entity.getEntityTypeId(victim)==34&&Player.getCarriedItem()==636&&attacker==getPlayerEnt()){
dropcora=Math.ceil(Math.random()*7);
switch(dropcora){
case 5:
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,397,1,0);
break;
}
}
//misiones
if(Entity.getEntityTypeId(victim)==10&&mision==0&&attacker==getPlayerEnt()&&misionface==2){
misioncount++;
}
else if(Entity.getEntityTypeId(victim)==11&&mision==1&&attacker==getPlayerEnt()&&misionface==1){
misioncount++;
}
else if(Entity.getEntityTypeId(victim)==12&&mision==1&&attacker==getPlayerEnt()&&misionface==1){
misioncount2++;
}
else if(Entity.getEntityTypeId(victim)==32&&mision==2&&attacker==getPlayerEnt()&&misionface==1){
misioncount++;
}
else if(Entity.getEntityTypeId(victim)==44&&mision==2&&attacker==getPlayerEnt()&&misionface==1){
misioncount++;
}
else if(Entity.getEntityTypeId(victim)==35&&mision==3&&attacker==getPlayerEnt()&&misionface==1){
misioncount++;
}
else if(Entity.getEntityTypeId(victim)==40&&mision==3&&attacker==getPlayerEnt()&&misionface==1){
misioncount++;
}
else if(Entity.getEntityTypeId(victim)==41&&mision==4&&attacker==getPlayerEnt()&&misionface==1){
misioncount++;
}
}

function modTick(){
//save
if(save>=1){
save++;
if(save==3600){
Saveconfig();
save=1;
}
}
if(druid==1){
manatime++;
if(manatime==60){

if(manalvl==0){
mana=mana+2;
if(mana>=101){
mana=100;
}
}
if(manalvl==1){
mana=mana+4
if(mana>=131){
mana=130;
}
}
if(manalvl==2){
mana=mana+6;
if(mana>=161){
mana=160;
}
}
if(manalvl==3){
mana=mana+8;
if(mana>=191){
mana=190;
}
}
if(manalvl==4){
mana=mana+10;
if(mana>=221){
mana=220;
}
}
if(manalvl==5){
mana=mana+12;
if(mana>=251){
mana=250;
}
}
if(manalvl==6){
mana=mana+12;
if(mana>=281){
mana=280;
}
}
if(manalvl==7){
mana=mana+12;
if(mana>=311){
mana=310;
}
}
if(manalvl==8){
mana=mana+12;
if(mana>=341){
mana=340;
}
}
if(manalvl==9){
mana=mana+12;
if(mana>=371){
mana=370;
}
}
if(manalvl==10){
mana=mana+12;
if(mana>=401){
mana=400;
}
}
if(manalvl>=11){
mana=mana+12;
if(mana>=501){
mana=500;
}
}

manatime=0;
}

}
//
//botas de hielo
if(Player.getArmorSlot(3)==603){
//agua
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 8||getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 9){
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ(),174);
currentred.push({tipored:"agua",time:360,rX:getPlayerX(),rY:getPlayerY()-2,rZ:getPlayerZ()});
}
if(getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()) == 8||getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()) == 9){
setTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ(),174);
currentred.push({tipored:"agua",time:240,rX:getPlayerX()+1,rY:getPlayerY()-2,rZ:getPlayerZ()});
}
if(getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()) == 8||getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()) == 9){
setTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ(),174);
currentred.push({tipored:"agua",time:270,rX:getPlayerX()-1,rY:getPlayerY()-2,rZ:getPlayerZ()});
}
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()+1) == 8||getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()+1) == 9){
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ()+1,174);
currentred.push({tipored:"agua",time:260,rX:getPlayerX(),rY:getPlayerY()-2,rZ:getPlayerZ()+1});
}
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()-1) == 8||getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()-1) == 9){
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ()-1,174);
currentred.push({tipored:"agua",time:227,rX:getPlayerX(),rY:getPlayerY()-2,rZ:getPlayerZ()-1});
}
if(getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()+1) == 8||getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()+1) == 9){
setTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()+1,174);
currentred.push({tipored:"agua",time:320,rX:getPlayerX()+1,rY:getPlayerY()-2,rZ:getPlayerZ()+1});
}
if(getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()-1) == 8||getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()-1) == 9){
setTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()-1,174);
currentred.push({tipored:"agua",time:280,rX:getPlayerX()+1,rY:getPlayerY()-2,rZ:getPlayerZ()-1});
}
if(getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()+1) == 8||getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()+1) == 9){
setTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()+1,174);
currentred.push({tipored:"agua",time:230,rX:getPlayerX()-1,rY:getPlayerY()-2,rZ:getPlayerZ()+1});
}
if(getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()-1) == 8||getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()-1) == 9){
setTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()-1,174);
currentred.push({tipored:"agua",time:280,rX:getPlayerX()-1,rY:getPlayerY()-2,rZ:getPlayerZ()-1});
}
//lava
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 10||getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 11){
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ(),49);
currentred.push({tipored:"agua",time:360,rX:getPlayerX(),rY:getPlayerY()-2,rZ:getPlayerZ()});
}
if(getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()) == 10||getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()) == 11){
setTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ(),49);
currentred.push({tipored:"agua",time:280,rX:getPlayerX()+1,rY:getPlayerY()-2,rZ:getPlayerZ()});
}
if(getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()) == 10||getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()) == 11){
setTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ(),49);
currentred.push({tipored:"agua",time:290,rX:getPlayerX()-1,rY:getPlayerY()-2,rZ:getPlayerZ()});
}
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()+1) == 10||getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()+1) == 11){
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ()+1,49);
currentred.push({tipored:"agua",time:340,rX:getPlayerX(),rY:getPlayerY()-2,rZ:getPlayerZ()+1});
}
if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()-1) == 10||getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()-1) == 11){
setTile(getPlayerX(),getPlayerY()-2,getPlayerZ()-1,49);
currentred.push({tipored:"agua",time:390,rX:getPlayerX(),rY:getPlayerY()-2,rZ:getPlayerZ()-1});
}
if(getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()+1) == 10||getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()+1) == 11){
setTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()+1,49);
currentred.push({tipored:"agua",time:270,rX:getPlayerX()+1,rY:getPlayerY()-2,rZ:getPlayerZ()+1});
}
if(getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()-1) == 10||getTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()-1) == 11){
setTile(getPlayerX()+1,getPlayerY()-2,getPlayerZ()-1,49);
currentred.push({tipored:"agua",time:245,rX:getPlayerX()+1,rY:getPlayerY()-2,rZ:getPlayerZ()-1});
}
if(getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()+1) == 10||getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()+1) == 11){
setTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()+1,49);
currentred.push({tipored:"agua",time:240,rX:getPlayerX()-1,rY:getPlayerY()-2,rZ:getPlayerZ()+1});
}
if(getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()-1) == 10||getTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()-1) == 11){
setTile(getPlayerX()-1,getPlayerY()-2,getPlayerZ()-1,49);
currentred.push({tipored:"agua",time:250,rX:getPlayerX()-1,rY:getPlayerY()-2,rZ:getPlayerZ()-1});
}

}

for(var g=0;g<currentred.length;g++){
currentred[g].time--;
if(currentred[g].time==0){
if(currentred[g].tipored=="agua"){
if(getTile(currentred[g].rX,currentred[g].rY,currentred[g].rZ)==174){
setTile(currentred[g].rX,currentred[g].rY,currentred[g].rZ,8);
currentred.splice(g,1);
}
else if(getTile(currentred[g].rX,currentred[g].rY,currentred[g].rZ)==49){
setTile(currentred[g].rX,currentred[g].rY,currentred[g].rZ,10);
currentred.splice(g,1);
}
}
}
}
//
//plamtas trampa
var mob=Entity.getAll();
for(var i=0;i<mob.length;i++){
var Enti=mob[i];
if(getTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti))==200&&getTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti))==38||getTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti))==200&&getTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti))==38){
if(Entity.getEntityTypeId(Enti)==EntityType.ARROW||Entity.getEntityTypeId(Enti)==EntityType.BOAT||Entity.getEntityTypeId(Enti)==EntityType.EGG||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_ORB||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_POTION||Entity.getEntityTypeId(Enti)==EntityType.FALLING_BLOCK||Entity.getEntityTypeId(Enti)==EntityType.FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.FISHING_HOOK||Entity.getEntityTypeId(Enti)==EntityType.ITEM||Entity.getEntityTypeId(Enti)==EntityType.LIGHTNING_BOLT||Entity.getEntityTypeId(Enti)==EntityType.MINECART||Entity.getEntityTypeId(Enti)==EntityType.PAINTING||Entity.getEntityTypeId(Enti)==EntityType.PRIMED_TNT||Entity.getEntityTypeId(Enti)==EntityType.SMALL_FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.SNOWBALL||Entity.getEntityTypeId(Enti)==EntityType.THROWN_POTION){

}
else{
Entity.setFireTicks(Enti,2);
}
}
if(getTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti))==201&&getTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti))==31||getTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti))==201&&getTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti))==31){
if(Entity.getEntityTypeId(Enti)==EntityType.ARROW||Entity.getEntityTypeId(Enti)==EntityType.BOAT||Entity.getEntityTypeId(Enti)==EntityType.EGG||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_ORB||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_POTION||Entity.getEntityTypeId(Enti)==EntityType.FALLING_BLOCK||Entity.getEntityTypeId(Enti)==EntityType.FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.FISHING_HOOK||Entity.getEntityTypeId(Enti)==EntityType.ITEM||Entity.getEntityTypeId(Enti)==EntityType.LIGHTNING_BOLT||Entity.getEntityTypeId(Enti)==EntityType.MINECART||Entity.getEntityTypeId(Enti)==EntityType.PAINTING||Entity.getEntityTypeId(Enti)==EntityType.PRIMED_TNT||Entity.getEntityTypeId(Enti)==EntityType.SMALL_FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.SNOWBALL||Entity.getEntityTypeId(Enti)==EntityType.THROWN_POTION){

}
else{
Entity.addEffect(Enti,MobEffect.poison,6*20,0,true,true);
}
}
if(getTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti))==202&&getTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti))==38||getTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti))==202&&getTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti))==38){
if(Entity.getEntityTypeId(Enti)==EntityType.ARROW||Entity.getEntityTypeId(Enti)==EntityType.BOAT||Entity.getEntityTypeId(Enti)==EntityType.EGG||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_ORB||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_POTION||Entity.getEntityTypeId(Enti)==EntityType.FALLING_BLOCK||Entity.getEntityTypeId(Enti)==EntityType.FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.FISHING_HOOK||Entity.getEntityTypeId(Enti)==EntityType.ITEM||Entity.getEntityTypeId(Enti)==EntityType.LIGHTNING_BOLT||Entity.getEntityTypeId(Enti)==EntityType.MINECART||Entity.getEntityTypeId(Enti)==EntityType.PAINTING||Entity.getEntityTypeId(Enti)==EntityType.PRIMED_TNT||Entity.getEntityTypeId(Enti)==EntityType.SMALL_FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.SNOWBALL||Entity.getEntityTypeId(Enti)==EntityType.THROWN_POTION){

}
else{
if(getTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti))==202){
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0);
setTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti),3);
}
else if(getTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti))==202){
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti),0);
setTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti),3);
}
Level.addParticle(ParticleType.cloud,Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)+0.1,Entity.getY(Enti)+1,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti)+0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)-0.1,Entity.getY(Enti)+1,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti)-0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)+0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)+0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)+0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)-0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)-0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)+0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)-0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)-0.1,0,0,0,0);
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti),30);
setTile(Entity.getX(Enti)-1,Entity.getY(Enti)-1,Entity.getZ(Enti),30);
setTile(Entity.getX(Enti)+1,Entity.getY(Enti)-1,Entity.getZ(Enti),30);
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti)+1,30);
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti)-1,30);
setTile(Entity.getX(Enti)+1,Entity.getY(Enti),Entity.getZ(Enti),30);
setTile(Entity.getX(Enti)-1,Entity.getY(Enti),Entity.getZ(Enti),30);
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+1,30);
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-1,30);
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),30);
setTile(Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti),30);
}
}
if(getTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti))==203&&getTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti))==38||getTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti))==203&&getTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti))==38){
if(Entity.getEntityTypeId(Enti)==EntityType.ARROW||Entity.getEntityTypeId(Enti)==EntityType.BOAT||Entity.getEntityTypeId(Enti)==EntityType.EGG||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_ORB||Entity.getEntityTypeId(Enti)==EntityType.EXPERIENCE_POTION||Entity.getEntityTypeId(Enti)==EntityType.FALLING_BLOCK||Entity.getEntityTypeId(Enti)==EntityType.FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.FISHING_HOOK||Entity.getEntityTypeId(Enti)==EntityType.ITEM||Entity.getEntityTypeId(Enti)==EntityType.LIGHTNING_BOLT||Entity.getEntityTypeId(Enti)==EntityType.MINECART||Entity.getEntityTypeId(Enti)==EntityType.PAINTING||Entity.getEntityTypeId(Enti)==EntityType.PRIMED_TNT||Entity.getEntityTypeId(Enti)==EntityType.SMALL_FIREBALL||Entity.getEntityTypeId(Enti)==EntityType.SNOWBALL||Entity.getEntityTypeId(Enti)==EntityType.THROWN_POTION){

}
else{
if(getTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti))==203){
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0);
setTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti),3);
}
else if(getTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti))==203){
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti),0);
setTile(Entity.getX(Enti),Entity.getY(Enti)-3,Entity.getZ(Enti),3);
}
Level.addParticle(ParticleType.cloud,Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)+0.1,Entity.getY(Enti)+1,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti)+0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)-0.1,Entity.getY(Enti)+1,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti),Entity.getY(Enti)+1,Entity.getZ(Enti)-0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)+0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)+0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)+0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)-0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)-0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)+0.1,0,0,0,0);
Level.addParticle(ParticleType.cloud,Entity.getX(Enti)-0.1,Entity.getY(Enti)+1,Entity.getZ(Enti)-0.1,0,0,0,0);
setTile(Entity.getX(Enti)+1,Entity.getY(Enti)-2,Entity.getZ(Enti),12);
setTile(Entity.getX(Enti)-1,Entity.getY(Enti)-2,Entity.getZ(Enti),12);
setTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti)+1,12);
setTile(Entity.getX(Enti),Entity.getY(Enti)-2,Entity.getZ(Enti)-1,12);
setTile(Entity.getX(Enti)+1,Entity.getY(Enti)-1,Entity.getZ(Enti),81);
setTile(Entity.getX(Enti)-1,Entity.getY(Enti)-1,Entity.getZ(Enti),81);
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti)+1,81);
setTile(Entity.getX(Enti),Entity.getY(Enti)-1,Entity.getZ(Enti)-1,81);
setTile(Entity.getX(Enti)+1,Entity.getY(Enti),Entity.getZ(Enti),81);
setTile(Entity.getX(Enti)-1,Entity.getY(Enti),Entity.getZ(Enti),81);
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+1,81);
setTile(Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-1,81);
}
}

if(Player.getArmorSlot(1)==627){
if(Entity.getX(Enti)-Entity.getX(Player.getEntity())<1&&Entity.getX(Enti)-Entity.getX(Player.getEntity())>-1&& Entity.getY(Enti)-Entity.getY(Player.getEntity())<1&&Entity.getY(Enti)-Entity.getY(Player.getEntity())>-1&& Entity.getZ(Enti)-Entity.getZ(Player.getEntity())<1&&Entity.getZ(Enti)-Entity.getZ(Player.getEntity())>-1){
if(Entity.getNameTag(Enti)=="§8Vampiro"){
var coX = Math.round(Entity.getX(Enti));	
var coZ = Math.round(Entity.getZ(Enti));
var vX = 0, vZ = 0;

var sEX = Math.round(Player.getX());
var sEY = Math.round(Player.getY());
var sEZ = Math.round(Player.getZ());
var yaw = Math.atan2((sEZ - coZ), (sEX - coX));
if((sEX - 3) > coX){
vX = -2;
}
if((sEZ - 3) > coZ){
vZ = -2;
}
if(coX > (sEX + 3)){
vX = 2;
}
if(coZ > (sEZ + 3)){
vZ = 2;
}
Entity.setVelX(Enti, vX);
Entity.setVelZ(Enti, vZ);
Entity.setRot(Enti, (((yaw * 180) / 3.14) + 270), Entity.getPitch(Enti));

}
}
if(Entity.getX(Enti)-Entity.getX(Player.getEntity())<3&&Entity.getX(Enti)-Entity.getX(Player.getEntity())>-3&& Entity.getY(Enti)-Entity.getY(Player.getEntity())<3&&Entity.getY(Enti)-Entity.getY(Player.getEntity())>-3&& Entity.getZ(Enti)-Entity.getZ(Player.getEntity())<3&&Entity.getZ(Enti)-Entity.getZ(Player.getEntity())>-3){
if(Entity.getNameTag(Enti)=="§8Vampiro"){
var coX = Math.round(Entity.getX(Enti));	
var coZ = Math.round(Entity.getZ(Enti));
var vX = 0, vZ = 0;

var sEX = Math.round(Player.getX());
var sEY = Math.round(Player.getY());
var sEZ = Math.round(Player.getZ());
var yaw = Math.atan2((sEZ - coZ), (sEX - coX));
if((sEX - 3) > coX){
vX = -1;
}
if((sEZ - 3) > coZ){
vZ = -1;
}
if(coX > (sEX + 3)){
vX = 1;
}
if(coZ > (sEZ + 3)){
vZ = 1;
}
Entity.setVelX(Enti, vX);
Entity.setVelZ(Enti, vZ);
Entity.setRot(Enti, (((yaw * 180) / 3.14) + 270), Entity.getPitch(Enti));

}
}
if(Entity.getX(Enti)-Entity.getX(Player.getEntity())<6&&Entity.getX(Enti)-Entity.getX(Player.getEntity())>-6&& Entity.getY(Enti)-Entity.getY(Player.getEntity())<6&&Entity.getY(Enti)-Entity.getY(Player.getEntity())>-6&& Entity.getZ(Enti)-Entity.getZ(Player.getEntity())<6&&Entity.getZ(Enti)-Entity.getZ(Player.getEntity())>-6){
if(Entity.getNameTag(Enti)=="§8Vampiro"){
var coX = Math.round(Entity.getX(Enti));	
var coZ = Math.round(Entity.getZ(Enti));
var vX = 0, vZ = 0;

var sEX = Math.round(Player.getX());
var sEY = Math.round(Player.getY());
var sEZ = Math.round(Player.getZ());
var yaw = Math.atan2((sEZ - coZ), (sEX - coX));
if((sEX - 3) > coX){
vX = -0.15;
}
if((sEZ - 3) > coZ){
vZ = -0.15;
}
if(coX > (sEX + 3)){
vX = 0.15;
}
if(coZ > (sEZ + 3)){
vZ = 0.15;
}
Entity.setVelX(Enti, vX);
Entity.setVelZ(Enti, vZ);
Entity.setRot(Enti, (((yaw * 180) / 3.14) + 270), Entity.getPitch(Enti));

}
}

}

if(Entity.getX(Enti)-Entity.getX(Player.getEntity())<2&&Entity.getX(Enti)-Entity.getX(Player.getEntity())>-2&& Entity.getY(Enti)-Entity.getY(Player.getEntity())<2&&Entity.getY(Enti)-Entity.getY(Player.getEntity())>-2&& Entity.getZ(Enti)-Entity.getZ(Player.getEntity())<2&&Entity.getZ(Enti)-Entity.getZ(Player.getEntity())>-2){
if(Entity.getNameTag(Enti)=="§8Vampiro"){
vamptime++;
if(vamptime==60){
if(Level.getGameMode()==0){
if(Entity.getHealth(getPlayerEnt())>=1){
morf3=Math.ceil(Math.random()*10);
switch(morf3){
case 6:
vampcount=1;
break;
}
}
}
vamptime=0;
}

}
}

if(Entity.getNameTag(Enti)=="§8teleport"){
teletime++;
if(teletime==20){
Level.addParticle(ParticleType.happyVillager,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==40){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==60){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==80){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==100){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==120){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==140){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==160){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==180){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==200){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==220){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==240){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==260){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==280){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}
if(teletime==300){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
}

if(teletime==320){
Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.5,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.5,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.5,Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti)+0.2,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)+0.2,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti)-0.2,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti)-0.2,Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.2,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)+0.2,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.2,0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti)-0.2,0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)+0.2,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)+0.2,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti)-0.2,Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti)-0.2,Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.hugeexplosionSeed,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);

Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.portal,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Level.addParticle(ParticleType.enchantmenttable,Entity.getX(Enti),Entity.getY(Enti),Entity.getZ(Enti),0,0,0,0);
Entity.remove(Enti);
teletime=0;
}
}
if(Entity.getNameTag(Enti)=="§8Cerdo Fantasma"){
fantime++;
if(fantime==250){
Entity.addEffect(Enti,MobEffect.invisibility,6*20,0,false, false);
fantime=0;
}
}
if(Entity.getX(Enti)-Entity.getX(Player.getEntity())<0.5&&Entity.getX(Enti)-Entity.getX(Player.getEntity())>-0.5&& Entity.getY(Enti)-Entity.getY(Player.getEntity())<0.9&&Entity.getY(Enti)-Entity.getY(Player.getEntity())>-1&& Entity.getZ(Enti)-Entity.getZ(Player.getEntity())<0.5&&Entity.getZ(Enti)-Entity.getZ(Player.getEntity())>-0.5){
if(Entity.getNameTag(Enti)=="§8teleport"){
Entity.remove(Enti);
teletime=0;
//ModPE.showTipMessage("Teleport");
}
}


}
if(vampcount==1){
ModPE.showTipMessage("Fuiste Infectado por un Vampiro");
Entity.addEffect(getPlayerEnt(),MobEffect.wither,64*20,0,false, false);
if(Entity.getHealth(getPlayerEnt())<=3.5&&vampcount==1){
for(var i=1;i<37;i++){
if(Player.getInventorySlot(i)==624){
var diamante=Player.getInventorySlotCount(i);
if(diamante>=1){
Player.setHealth(20);
Entity.removeEffect(getPlayerEnt(),MobEffect.wither);
addItemInventory(624,-1);
vampcount=0;
}
}
}

}
}
//
//botones
if(getCarriedItem()==604&&gui==true||getCarriedItem()==605&&gui==true||getCarriedItem()==606&&gui==true||getCarriedItem()==607&&gui==true||getCarriedItem()==623&&gui==true||getCarriedItem()==634&&gui==true){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
try{
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

var button = new android.widget.Button(ctx);
if(Player.getCarriedItem()==604||Player.getCarriedItem()==605||Player.getCarriedItem()==606||Player.getCarriedItem()==607){
button.setText('Lanzar');
}
if(Player.getCarriedItem()==623||Player.getCarriedItem()==634){
button.setText('Leer');
}
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
if(Player.getCarriedItem()==604){
var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180; 
var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180; 
var xx=Math.sin(p)*Math.cos(y); 
var yy=Math.sin(p)*Math.sin(y); 
var zz=Math.cos(p);
potiontelaraña = Entity.spawnMob(Player.getX()+xx,Player.getY()+zz-0.3,Player.getZ()+yy,EntityType.SNOWBALL);
Entity.setRenderType(potiontelaraña,EntityRenderType.thrownPotion);
distan=Math.ceil(Math.random()*3);
switch(distan){
case 1:
setVelX(potiontelaraña,0.5*xx);
setVelY(potiontelaraña,0.5*zz);
setVelZ(potiontelaraña,0.5*yy);
break;
case 2:
setVelX(potiontelaraña,0.5*xx);
setVelY(potiontelaraña,0.7*zz);
setVelZ(potiontelaraña,0.5*yy);
break;
case 3:
setVelX(potiontelaraña,0.6*xx);
setVelY(potiontelaraña,0.6*zz);
setVelZ(potiontelaraña,0.6*yy);
break;
}
//clientMessage("§2telaraña");
addItemInventory(604,-1);
}
if(Player.getCarriedItem()==605){
var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180; 
var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180; 
var xx=Math.sin(p)*Math.cos(y); 
var yy=Math.sin(p)*Math.sin(y); 
var zz=Math.cos(p);
potiontrampa = Entity.spawnMob(Player.getX()+xx,Player.getY()+zz-0.3,Player.getZ()+yy,EntityType.SNOWBALL);
Entity.setRenderType(potiontrampa,EntityRenderType.thrownPotion);
distan=Math.ceil(Math.random()*3);
switch(distan){
case 1:
setVelX(potiontrampa,0.5*xx);
setVelY(potiontrampa,0.5*zz);
setVelZ(potiontrampa,0.5*yy);
break;
case 2:
setVelX(potiontrampa,0.5*xx);
setVelY(potiontrampa,0.7*zz);
setVelZ(potiontrampa,0.5*yy);
break;
case 3:
setVelX(potiontrampa,0.6*xx);
setVelY(potiontrampa,0.6*zz);
setVelZ(potiontrampa,0.6*yy);
break;
}
//clientMessage("§2trampa");
addItemInventory(605,-1);
}
if(Player.getCarriedItem()==606){
var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180; 
var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180; 
var xx=Math.sin(p)*Math.cos(y); 
var yy=Math.sin(p)*Math.sin(y); 
var zz=Math.cos(p);
potionexplosion = Entity.spawnMob(Player.getX()+xx,Player.getY()+zz-0.3,Player.getZ()+yy,EntityType.SNOWBALL);
Entity.setRenderType(potionexplosion,EntityRenderType.thrownPotion);
distan=Math.ceil(Math.random()*3);
switch(distan){
case 1:
setVelX(potionexplosion,0.5*xx);
setVelY(potionexplosion,0.5*zz);
setVelZ(potionexplosion,0.5*yy);
break;
case 2:
setVelX(potionexplosion,0.5*xx);
setVelY(potionexplosion,0.7*zz);
setVelZ(potionexplosion,0.5*yy);
break;
case 3:
setVelX(potionexplosion,0.6*xx);
setVelY(potionexplosion,0.6*zz);
setVelZ(potionexplosion,0.6*yy);
break;
}
//clientMessage("§2explosion");
addItemInventory(606,-1);
}
if(Player.getCarriedItem()==607){
var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180; 
var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180; 
var xx=Math.sin(p)*Math.cos(y); 
var yy=Math.sin(p)*Math.sin(y); 
var zz=Math.cos(p);
potionfuego = Entity.spawnMob(Player.getX()+xx,Player.getY()+zz-0.3,Player.getZ()+yy,EntityType.SNOWBALL);
Entity.setRenderType(potionfuego,EntityRenderType.thrownPotion);
distan=Math.ceil(Math.random()*3);
switch(distan){
case 1:
setVelX(potionfuego,0.5*xx);
setVelY(potionfuego,0.5*zz);
setVelZ(potionfuego,0.5*yy);
break;
case 2:
setVelX(potionfuego,0.5*xx);
setVelY(potionfuego,0.7*zz);
setVelZ(potionfuego,0.5*yy);
break;
case 3:
setVelX(potionfuego,0.6*xx);
setVelY(potionfuego,0.6*zz);
setVelZ(potionfuego,0.6*yy);
break;
}
//clientMessage("§2fuego");
addItemInventory(607,-1);
}
if(Player.getCarriedItem()==623){
manualGUI();
}
if(Player.getCarriedItem()==634){
bookGUI();
}

}
}));
layout.addView(button);

GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 85);
}catch(err){
print('An error occured: ' + err);
}
}}));
vari++;
//ModPE.showTipMessage(vari+" Boton");
gui=false;
}
if(getCarriedItem()!=604&&gui==false||getCarriedItem()!=605&&gui==false||getCarriedItem()!=606&&gui==false||getCarriedItem()!=607&&gui==false||getCarriedItem()==623&&gui==true||getCarriedItem()==634&&gui==true){
vari++;
if(vari==21){
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
if(GUI != null){
GUI.dismiss();
GUI = null;
}
}}));
vari=0;
gui=true;
}
}

if(getCarriedItem()==617){
if(druid==1){
ModPE.showTipMessage("Mana: "+ChatColor.BLUE+mana);
}
else if(druid==0){
ModPE.showTipMessage("No eres una witch");
}
}
//
//escoba
if(escobaon==true){
if(getCarriedItem()==617&&Player.getArmorSlot(0)==600){
volar4();
}
else if(getCarriedItem()==617){
volar3();
}
else if(Player.getArmorSlot(0)==600){
volar2();
}
else{
volar();
}
}
if(Entity.getHealth(escoba)>=1){
if(getPlayerX()<Entity.getX(escoba)-0.5||getPlayerX()>Entity.getX(escoba) +0.5||getPlayerZ()<Entity.getZ(escoba)-0.5||getPlayerZ()>Entity.getZ(escoba)+0.5){
setVelX(escoba,0);
setVelY(escoba,-0.5);
setVelZ(escoba,0);
setRot(escoba,0,0);
escobaon=false;
if(getTile(Entity.getX(escoba),Entity.getY(escoba)-0.1,getPlayerZ())){
Entity.setImmobile(escoba,true);
}
else if(getTile(Entity.getX(escoba),Entity.getY(escoba)-0.1,getPlayerZ())==0){
Entity.setImmobile(escoba,false);
}
}
}
//
//altar
if(subirenergia==true){
timeenergia++;
//ModPE.showTipMessage(timeenergia);
for(var f3 = 0; f3 <= 8; f3++){
if(timeenergia==250){
if(getTile(a1+f3,b1,c1)==0||getTile(a1-f3,b1,c1)==0||getTile(a1,b1,c1+f3)==0||getTile(a1,b1,c1-f3)==0||getTile(a1+f3,b1,c1+f3)==0||getTile(a1+f3,b1,c1-f3)==0||getTile(a1-f3,b1,c1+f3)==0||getTile(a1-f3,b1,c1-f3)==0||getTile(a1+f3,b1,c1)||getTile(a1-f3,b1,c1)||getTile(a1,b1,c1+f3)||getTile(a1,b1,c1-f3)||getTile(a1+f3,b1,c1+f3)||getTile(a1+f3,b1,c1-f3)||getTile(a1-f3,b1,c1+f3)||getTile(a1-f3,b1,c1-f3)){
energia++;
}
if(getTile(a1+f3,b1,c1)==6||getTile(a1-f3,b1,c1)==6||getTile(a1,b1,c1+f3)==6||getTile(a1,b1,c1-f3)==6||getTile(a1+f3,b1,c1+f3)==6||getTile(a1+f3,b1,c1-f3)==6||getTile(a1-f3,b1,c1+f3)==6||getTile(a1-f3,b1,c1-f3)==6){
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==17||getTile(a1-f3,b1,c1)==17||getTile(a1,b1,c1+f3)==17||getTile(a1,b1,c1-f3)==17||getTile(a1+f3,b1,c1+f3)==17||getTile(a1+f3,b1,c1-f3)==17||getTile(a1-f3,b1,c1+f3)==17||getTile(a1-f3,b1,c1-f3)==17){
energia++;
energia++;
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==18||getTile(a1-f3,b1,c1)==18||getTile(a1,b1,c1+f3)==18||getTile(a1,b1,c1-f3)==18||getTile(a1+f3,b1,c1+f3)==18||getTile(a1+f3,b1,c1-f3)==18||getTile(a1-f3,b1,c1+f3)==18||getTile(a1-f3,b1,c1-f3)==18){
energia++;
energia++;
energia++;
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==31||getTile(a1-f3,b1,c1)==31||getTile(a1,b1,c1+f3)==31||getTile(a1,b1,c1-f3)==31||getTile(a1+f3,b1,c1+f3)==31||getTile(a1+f3,b1,c1-f3)==31||getTile(a1-f3,b1,c1+f3)==31||getTile(a1-f3,b1,c1-f3)==31){
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==37||getTile(a1-f3,b1,c1)==37||getTile(a1,b1,c1+f3)==37||getTile(a1,b1,c1-f3)==37||getTile(a1+f3,b1,c1+f3)==37||getTile(a1+f3,b1,c1-f3)==37||getTile(a1-f3,b1,c1+f3)==37||getTile(a1-f3,b1,c1-f3)==37){
energia++;
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==38||getTile(a1-f3,b1,c1)==38||getTile(a1,b1,c1+f3)==38||getTile(a1,b1,c1-f3)==38||getTile(a1+f3,b1,c1+f3)==38||getTile(a1+f3,b1,c1-f3)==38||getTile(a1-f3,b1,c1+f3)==38||getTile(a1-f3,b1,c1-f3)==38){
energia++;
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==106||getTile(a1-f3,b1,c1)==106||getTile(a1,b1,c1+f3)==106||getTile(a1,b1,c1-f3)==106||getTile(a1+f3,b1,c1+f3)==106||getTile(a1+f3,b1,c1-f3)==106||getTile(a1-f3,b1,c1+f3)==106||getTile(a1-f3,b1,c1-f3)==106){
energia++;
energia++;
energia++;
energia++;
}
if(getTile(a1+f3,b1,c1)==161||getTile(a1-f3,b1,c1)==161||getTile(a1,b1,c1+f3)==161||getTile(a1,b1,c1-f3)==161||getTile(a1+f3,b1,c1+f3)==161||getTile(a1+f3,b1,c1-f3)==161||getTile(a1-f3,b1,c1+f3)==161||getTile(a1-f3,b1,c1-f3)==161){
energia++;
energia++;
energia++;
}
}
if(timeenergia==251){
timeenergia=0;
}
}
for(var f7 = 0; f7 <= 2; f7++){
if(getTile(a1,b1+1,c1)==144||getTile(a1+f7,b1+1,c1)==144||getTile(a1-f7,b1+1,c1)==144||getTile(a1,b1+1,c1+f7)==144||getTile(a1,b1+1,c1-f7)==144||getTile(a1+f7,b1+1,c1+f7)==144||getTile(a1+f7,b1+1,c1-f7)==144||getTile(a1-f7,b1+1,c1+f7)==144){
if(mlevel==2){

}
else{
mlevel=1;
}
}
}
if(mlevel==0){
if(energia>=360){
energia=360;
}
}
if(mlevel==1){
if(energia>=750){
energia=750;
}
}
if(mlevel==2){
if(energia>=1100){
energia=1100;
}
}
if(mlevel==3){
if(energia>=2000){
energia=2000;
}
}
}

//misiones
if(mision==4&&misionface==1){
if(misioncount>=3){
clientMessage("<mision> Quest Completada! Ghast 3/3");
misionface=2;
Saveconfig();
}
}
else if(mision==3&&misionface==1){
if(misioncount>=300){
clientMessage("<mision> Quest Completada! Spider/Araña 300/300");
misionface=2;
Saveconfig();
}
}
else if(mision==2&&misionface==1){
if(misioncount>=200){
clientMessage("<mision> Quest Completada! Zombies 200/200");
misionface=2;
Saveconfig();
}
}
else if(mision==1&&misionface==1){
if(misioncount>=50&&misioncount2>=50){
clientMessage("<mision> Quest Completada! Cows/Vacas 50/50 & Pigs/Cerdos 50/50");
misionface=2;
Saveconfig();
}
}
else if(mision==0&&misionface==2){
if(misioncount>=100){
clientMessage("<mision> Quest Completada! Chickens/pollos 100/100");
misionface=3;
Saveconfig();
}
}


//evento


} 

function entityAddedHook(entity){
if(Entity.getEntityTypeId(entity)==EntityType.ZOMBIE&&Entity.getNameTag(entity)=="§8Vampiro"){
Entity.setRenderType(entity,3);
Entity.setMobSkin(entity,"mob/vampire.png");
}
if(Entity.getEntityTypeId(entity)==EntityType.CHICKEN&&Entity.getNameTag(entity)=="§8escoba"){
Entity.setRenderType(entity,escobaencantada.renderType);
Entity.setMobSkin(entity,"entity/escoba.png");
}
if(Entity.getEntityTypeId(entity)==EntityType.PIG&&Entity.getNameTag(entity)=="§8Cerdo Fantasma"){
Entity.setMobSkin(entity,"mob/pig_fantasma.png");
Entity.addEffect(entity,MobEffect.invisibility,5*20,0,true,true);
}
if(Entity.getEntityTypeId(entity)==EntityType.ZOMBIE){
spawnvampiro=Math.ceil(Math.random()*30);
switch(spawnvampiro){
case 8:
vamp = Level.spawnMob(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),EntityType.ZOMBIE);
Entity.remove(entity);
Entity.setRenderType(vamp,3);
Entity.setMobSkin(vamp,"mob/vampire.png");
Entity.setNameTag(vamp,"§8Vampiro");
break;
case 16:
vamp = Level.spawnMob(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),EntityType.ZOMBIE);
Entity.remove(entity);
Entity.setRenderType(vamp,3);
Entity.setMobSkin(vamp,"mob/vampire.png");
Entity.setNameTag(vamp,"§8Vampiro");
break;
case 27:
vamp = Level.spawnMob(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),EntityType.ZOMBIE);
Entity.remove(entity);
Entity.setRenderType(vamp,3);
Entity.setMobSkin(vamp,"mob/vampire.png");
Entity.setNameTag(vamp,"§8Vampiro");
break;
}
}
if(Entity.getEntityTypeId(entity)==EntityType.COW){
spawnaventu=Math.ceil(Math.random()*30);
switch(spawnaventu){
case 14:
NPC = Level.spawnMob(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),15);
Entity.setMobSkin(NPC,"mob/vendor.png");
Entity.setRenderType(NPC , 3);
Entity.setHealth(NPC , 20);
Entity.setNameTag(NPC,"§8aventurero");
break;
case 25:
NPC = Level.spawnMob(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),15);
Entity.setMobSkin(NPC,"mob/vendor.png");
Entity.setRenderType(NPC , 3);
Entity.setHealth(NPC , 20);
Entity.setNameTag(NPC,"§8aventurero");
Entity.rideAnimal(NPC,entity);
break;
}
}
if(Entity.getEntityTypeId(entity)==10&&Entity.getNameTag(entity)=="§8teleport"){
Entity.setRenderType(entity,teleportren.renderType);
Entity.setHealth(entity, 1000000);
Entity.setImmobile(entity,true);
}
if(Entity.getEntityTypeId(entity)==15&&Entity.getNameTag(entity)=="§8aventurero"){
NPC = Level.spawnMob(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),15);
Entity.remove(entity);
Entity.setRenderType(NPC,EntityRenderType.human);
Entity.setMobSkin(NPC,"mob/apothecary.png");
Entity.setNameTag(NPC,"§8Apothecary");
Entity.setHealth(NPC , 20);
}
if(Entity.getEntityTypeId(entity)==15&&Entity.getNameTag(entity)=="§8Apothecary"){
Entity.setRenderType(entity,EntityRenderType.human);
Entity.setMobSkin(entity,"mob/apothecary.png");
}
}

function toDirectionalVector(vector, yaw, pitch) {
vector[0] = Math.cos(yaw) * Math.cos(pitch);
if(getPitch() < 3 && getPitch() > -3 ){
vector[1] = Math.sin(pitch);
}
if(getPitch() > 3){
vector[1] = -0.3;
}
if(getPitch() < -3){
vector[1] = 0.3;
}
vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function volar() {
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
setVelX(escoba, escobaSpeed * playerDir[0]);
setVelY(escoba, escobaSpeed * playerDir[1]);
setVelZ(escoba, escobaSpeed * playerDir[2]);
}
function volar2() {
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
setVelX(escoba, escobaSpeed2 * playerDir[0]);
setVelY(escoba, escobaSpeed2 * playerDir[1]);
setVelZ(escoba, escobaSpeed2 * playerDir[2]);
}
function volar3() {
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
setVelX(escoba, escobaSpeed3 * playerDir[0]);
setVelY(escoba, escobaSpeed3 * playerDir[1]);
setVelZ(escoba, escobaSpeed3 * playerDir[2]);
}
function volar4() {
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
setVelX(escoba, escobaSpeed4 * playerDir[0]);
setVelY(escoba, escobaSpeed4 * playerDir[1]);
setVelZ(escoba, escobaSpeed4 * playerDir[2]);
}

function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side){
if(projectile==potiontelaraña){
Entity.spawnMob(blockX,blockY,blockZ,EntityType.THROWN_POTION);
setTile(blockX+1,blockY+1,blockZ,30);
setTile(blockX-1,blockY+1,blockZ,30);
setTile(blockX,blockY+1,blockZ+1,30);
setTile(blockX,blockY+1,blockZ-1,30);
setTile(blockX,blockY+1,blockZ,30);
setTile(blockX,blockY+2,blockZ,30);
}
if(projectile==potiontrampa){
Entity.spawnMob(blockX,blockY,blockZ,EntityType.THROWN_POTION);
setTile(blockX+1,blockY,blockZ,12);
setTile(blockX-1,blockY,blockZ,12);
setTile(blockX,blockY,blockZ+1,12);
setTile(blockX,blockY,blockZ-1,12);
setTile(blockX+1,blockY+1,blockZ,81);
setTile(blockX-1,blockY+1,blockZ,81);
setTile(blockX,blockY+1,blockZ+1,81);
setTile(blockX,blockY+1,blockZ-1,81);
setTile(blockX+1,blockY+2,blockZ,81);
setTile(blockX-1,blockY+2,blockZ,81);
setTile(blockX,blockY+2,blockZ+1,81);
setTile(blockX,blockY+2,blockZ-1,81);
}
if(projectile==potionexplosion){
Entity.spawnMob(blockX,blockY,blockZ,EntityType.THROWN_POTION);
explode(blockX,blockY,blockZ,2);
}
if(projectile==potionfuego){
Entity.spawnMob(blockX,blockY,blockZ,EntityType.THROWN_POTION);
setTile(blockX,blockY+1,blockZ,51);
setTile(blockX+1,blockY+1,blockZ,51);
setTile(blockX-1,blockY+1,blockZ,51);
setTile(blockX,blockY+1,blockZ+1,51);
setTile(blockX,blockY+1,blockZ-1,51);
}
}

function projectileHitEntityHook(projectile, targetEntity){
if(projectile==potiontelaraña){
Entity.spawnMob(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity),EntityType.THROWN_POTION);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity),30);
setTile(Entity.getX(targetEntity)-1,Entity.getY(targetEntity),Entity.getZ(targetEntity),30);
setTile(Entity.getX(targetEntity)+1,Entity.getY(targetEntity),Entity.getZ(targetEntity),30);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity)+1,30);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity)-1,30);
setTile(Entity.getX(targetEntity)+1,Entity.getY(targetEntity)+1,Entity.getZ(targetEntity),30);
setTile(Entity.getX(targetEntity)-1,Entity.getY(targetEntity)+1,Entity.getZ(targetEntity),30);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)+1,Entity.getZ(targetEntity)+1,30);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)+1,Entity.getZ(targetEntity)-1,30);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)+1,Entity.getZ(targetEntity),30);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)+2,Entity.getZ(targetEntity),30);
}
if(projectile==potiontrampa){
Entity.spawnMob(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity),EntityType.THROWN_POTION);
setTile(Entity.getX(targetEntity)+1,Entity.getY(targetEntity)-1,Entity.getZ(targetEntity),12);
setTile(Entity.getX(targetEntity)-1,Entity.getY(targetEntity)-1,Entity.getZ(targetEntity),12);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)-1,Entity.getZ(targetEntity)+1,12);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)-1,Entity.getZ(targetEntity)-1,12);
setTile(Entity.getX(targetEntity)+1,Entity.getY(targetEntity),Entity.getZ(targetEntity),81);
setTile(Entity.getX(targetEntity)-1,Entity.getY(targetEntity),Entity.getZ(targetEntity),81);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity)+1,81);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity)-1,81);
setTile(Entity.getX(targetEntity)+1,Entity.getY(targetEntity)+1,Entity.getZ(targetEntity),81);
setTile(Entity.getX(targetEntity)-1,Entity.getY(targetEntity)+1,Entity.getZ(targetEntity),81);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)+1,Entity.getZ(targetEntity)+1,81);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity)+1,Entity.getZ(targetEntity)-1,81);
}
if(projectile==potionexplosion){
Entity.spawnMob(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity),EntityType.THROWN_POTION);
explode(Entity.getX(targetEntity), Entity.getY(targetEntity), Entity.getZ(targetEntity), 2);
}
if(projectile==potionfuego){
Entity.spawnMob(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity),EntityType.THROWN_POTION);
Entity.setFireTicks(targetEntity,3);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity),51);
setTile(Entity.getX(targetEntity)+1,Entity.getY(targetEntity),Entity.getZ(targetEntity),51);
setTile(Entity.getX(targetEntity)-1,Entity.getY(targetEntity),Entity.getZ(targetEntity),51);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity)+1,51);
setTile(Entity.getX(targetEntity),Entity.getY(targetEntity),Entity.getZ(targetEntity)-1,51);
}
}

function toolUse(maxDamage,id) {
if(Level.getGameMode()==0){
var pcid=Player.getCarriedItemData();
if(pcid!==maxDamage){
Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
}else if(pcid==maxDamage) {
Level.playSound(Player.getX(),Player.getY(),Player.getZ(),"random.break",2);
Entity.setCarriedItem(getPlayerEnt(),0,0,0);
}
}
}

function manualGUI(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try
{
var layoutInfo = new android.widget.LinearLayout(ctx);
layoutInfo.setOrientation(android.widget.LinearLayout.VERTICAL);

var scrollInfo = new android.widget.ScrollView(ctx);
scrollInfo.addView(layoutInfo);
			
var popupInfo = new android.app.Dialog(ctx); 
popupInfo.setContentView(scrollInfo);
popupInfo.setTitle("MANUAL");

var threadButton = new android.widget.Button(ctx); 
threadButton.setText("Canal de Youtube"); 
threadButton.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try
{
var intentBrowser = new android.content.Intent(ctx);
intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
intentBrowser.setData(android.net.Uri.parse("https://www.youtube.com/channel/UC4uMALmt3KWKKIUze4BRXeQ"));
ctx.startActivity(intentBrowser);
}catch (err)
{
clientMessage("Error: " + err);
clientMessage("Maybe GUI is not supported for your device. Reporta al creador.");
}
}
});

popupInfo.dismiss();
}
}); 
layoutInfo.addView(threadButton);

/*var threadButton = new android.widget.Button(ctx); 
threadButton.setText("Crafteos"); 
threadButton.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
crafteoGUI();
popupInfo.dismiss();
}
}); 
layoutInfo.addView(threadButton);*/

var threadButton6 = new android.widget.Button(ctx); 
threadButton6.setText("Facebook"); 
threadButton6.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try
{
var intentBrowser = new android.content.Intent(ctx);
intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/SalasxdModsMcPE/"));
ctx.startActivity(intentBrowser);
}catch (err)
{
clientMessage("Error: " + err);
clientMessage("Maybe GUI is not supported for your device. Reporta al creador.");
}
}
});

popupInfo.dismiss();
}
}); 
layoutInfo.addView(threadButton6);

/*var threadButton7 = new android.widget.Button(ctx); 
threadButton7.setText("Crafteos de Evento"); 
threadButton7.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
crafteoeventoGUI();
popupInfo.dismiss();
}
}); 
layoutInfo.addView(threadButton7);*/

var exit = new android.widget.Button(ctx); 
exit.setText("Cerrar"); 
exit.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){
popupInfo.dismiss();
}
}); 
layoutInfo.addView(exit);

popupInfo.show();

}catch (err){
clientMessage("Error: " + err);
clientMessage("Maybe GUI is not supported for your device. Reporta al creador");
}
}
});
}

function altarGUI(){
if(mlevel==0){
var lvlm=360;
}
if(mlevel==1){
var lvlm=750;
}
if(mlevel==2){
var lvlm=1100;
}
if(mlevel==3){
var lvlm=2000;
}
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Altar");
alert.setMessage("Energia"+" "+"("+(energia)+"%  /  "+lvlm+"%)"); 
alert.setNegativeButton("Salir",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){}
});
alert.show();
}
}));
}

function informaNPCGUI(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try
{
var layoutInfor = new android.widget.LinearLayout(ctx);
layoutInfor.setOrientation(android.widget.LinearLayout.VERTICAL);

var scrollInfor = new android.widget.ScrollView(ctx);
scrollInfor.addView(layoutInfor);
			
var popupInfor = new android.app.Dialog(ctx); 
popupInfor.setContentView(scrollInfor);
popupInfor.setTitle("Apothecary");

var inforText = new android.widget.TextView(ctx);
inforText.setText("Hola! "+Entity.getNameTag(getPlayerEnt()));
layoutInfor.addView(inforText);

var threaddButton = new android.widget.Button(ctx); 
threaddButton.setText("Mission"); 
threaddButton.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
popupInfor.dismiss();
NPCmision();
}
}); 
layoutInfor.addView(threaddButton);

if(evento==2){
var threaddButton2 = new android.widget.Button(ctx); 
threaddButton2.setText("Mission Evento"); 
threaddButton2.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
popupInfor.dismiss();
NPCmisionEvento();
}
}); 
layoutInfor.addView(threaddButton2);
}

var exitInforButton = new android.widget.Button(ctx); 
exitInforButton.setText("Cerrar"); 
exitInforButton.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
popupInfor.dismiss();
clientMessage("<Apothecary> Nosvemos "+Entity.getNameTag(getPlayerEnt()));
}
}); 
layoutInfor.addView(exitInforButton); 
popupInfor.show();
}catch (err)
{
clientMessage("Error: " + err);
clientMessage("Maybe GUI is not supported for your device. Reporta al creador");
}
}
});
}

function NPCmision(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Apothecary");
if(mision==5&&misionface>=1){
alert.setMessage("No Tengo mas Misiones Para Ti"+
"\nRegresa en La Proxima Actualizacion"+
"\nPara Mas Misiones");
}
else if(mision==5&&misionface==0){
alert.setMessage("No Tengo mas Misiones Para Ti"+
"\nRegresa en La Proxima Actualizacion"+
"\nPara Mas Misiones");
}
if(mision==4&&misionface>=1){
alert.setMessage("Ghast: "+misioncount+"/3"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n5 Lagrimas de Ghast"+
"\n10 Lingotes de Oro"+
"\n1 Nivel de Witch(Si Eres Witch)"+
"\n5 Ajos");
}
else if(mision==4&&misionface==0){
alert.setMessage("¿Has Explorado el Nether?"+
"\nConsigue Matar 3 Ghast"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n5 Lagrimas de Ghast"+
"\n10 Lingotes de Oro"+
"\n1 Nivel de Witch(Si Eres Witch)"+
"\n5 Ajos");
}
if(mision==3&&misionface>=1){
alert.setMessage("Spider/Araña: "+misioncount+"/300"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n1 Spawn de Spider/Araña"+
"\n20 Cuerdas"+
"\n1 Nivel de Witch(Si Eres Witch)"+
"\n1 Telaraña instantania"+
"\n10 Ojos de Araña");
}
else if(mision==3&&misionface==0){
alert.setMessage("Una Araña Me Mordio"+
"\nSi ves Una Araña Normal o de Cueva"+
"\nConsigue Matar 300 de Ellas"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n1 Spawn de Spider/Araña"+
"\n20 Cuerdas"+
"\n1 Nivel de Witch(Si Eres Witch)"+
"\n1 Telaraña instantania"+
"\n10 Ojos de Araña");
}
if(mision==2&&misionface>=1){
alert.setMessage("Zombies: "+misioncount+"/200"+
"\n"+
"\nRecompensas:"+
"\n10 Botellas de Expe"+
"\n4 Diamantes"+
"\n1 Spawn de Zombie"+
"\n12 Carne Podrida"+
"\n1 Ajo");
}
else if(mision==2&&misionface==0){
alert.setMessage("Aniquilando Zombies"+
"\nConsigue Matar 200 Zombies"+
"\n"+
"\nRecompensas:"+
"\n10 Botellas de Expe"+
"\n4 Diamantes"+
"\n1 Spawn de Zombie"+
"\n12 Carne Podrida"+
"\n1 Ajo");
}
if(mision==1&&misionface>=1){
alert.setMessage("Cows/Vacas: "+misioncount+"/50"+
"\nPigs/Cerdos: "+misioncount2+"/50"+
"\n"+
"\nRecompensas:"+
"\n3 Botellas de Expe"+
"\n2 Diamantes"+
"\n1 Spawn de Vaca"+
"\n1 Spawn de Cerdo"+
"\n12 Carne de Vaca"+
"\n12 Carne de Cerdo"+
"\n3 Lingotes de Oro");
}
else if(mision==1&&misionface==0){
alert.setMessage("Listo Para La Proxima Mision"+
"\nConsigue Matar 50 Cows/Vacas"+
"\nConsigue Matar 50 Pigs/Cerdos"+
"\n"+
"\nRecompensas:"+
"\n3 Botellas de Expe"+
"\n2 Diamantes"+
"\n1 Spawn de Vaca"+
"\n1 Spawn de Cerdo"+
"\n12 Carne de Vaca"+
"\n12 Carne de Cerdo"+
"\n3 Lingotes de Oro");
}
if(mision==0&&misionface>=2){
alert.setMessage("Chickens/pollos: "+misioncount+"/100"+
"\n"+
"\nRecompensas:"+
"\n4 Botellas de Expe"+
"\n2 Esmeraldas"+
"\n1 Spawn de Pollo"+
"\n8 Carne de Pollo"+
"\n12 Plumas");
}
else if(mision==0&&misionface==1){
alert.setMessage("Para Tu Primera Mision"+
"\nConsigue Matar 100 Chickens/pollos"+
"\n"+
"\nRecompensas:"+
"\n4 Botellas de Expe"+
"\n2 Esmeraldas"+
"\n1 Spawn de Pollo"+
"\n8 Carne de Pollo"+
"\n12 Plumas");
}
else if(mision==0&&misionface==0){
alert.setMessage("Te Gustaria Tener Items a Cambio de Hacer una Tareas");
}
alert.setPositiveButton("Acepto",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
if(mision==5&&misionface>=1){

}
else if(mision==5&&misionface==0){
//misionface=1;
//clientMessage("<Apothecary> ");
clientMessage("<Apothecary> Nosvemos "+Entity.getNameTag(getPlayerEnt()));
}
if(mision==4&&misionface>=1){
if(misioncount>=3){
addItemInventory(384,20);
addItemInventory(370,5);
addItemInventory(266,10);
if(druid==1){
manalvl=manalvl+1;
}
else if(druid==0){
clientMessage("<Aventurero> Lo Siento Si No Eres Witch No Te Dare un Nivel Mas");
}
addItemInventory(626,5);
clientMessage("<Aventurero> Eres Muy Bueno");
mision=5;
misionface=0;
misioncount=0;
}
else if(misioncount<=2){
clientMessage("<Aventurero> Vamos Aun Te Falta");
}
}
else if(mision==4&&misionface==0){
misionface=1;
clientMessage("<Apothecary> Suerte en el Nether");
}
if(mision==3&&misionface>=1){
if(misioncount>=300){
addItemInventory(384,20);
addItemInventory(383,1,35);
addItemInventory(287,20);
addItemInventory(375,10);
if(druid==1){
manalvl=manalvl+1;
}
else if(druid==0){
clientMessage("<Aventurero> Lo Siento Si No Eres Witch No Te Dare un Nivel Mas");
}
addItemInventory(604,1);
clientMessage("<Aventurero> Son Rapidas Sierto");
mision=4;
misionface=0;
misioncount=0;
}
else if(misioncount<=299){
clientMessage("<Aventurero> Vamos Aun Te Falta");
}
}
else if(mision==3&&misionface==0){
misionface=1;
clientMessage("<Apothecary> Muerte a las Arañas");
}
if(mision==2&&misionface>=1){
if(misioncount>=200){
addItemInventory(384,10);
addItemInventory(264,4);
addItemInventory(383,1,32);
addItemInventory(367,12);
addItemInventory(626,1);
clientMessage("<Aventurero> Pense Que los Zombies Te Avian Comido");
mision=3;
misionface=0;
misioncount=0;
}
else if(misioncount<=199){
clientMessage("<Aventurero> Vamos Aun Te Falta");
}
}
else if(mision==2&&misionface==0){
misionface=1;
clientMessage("<Apothecary> Cuidado Con Los Zombies");
}
if(mision==1&&misionface>=1){
if(misioncount>=50&&misioncount2>=50){
addItemInventory(384,3);
addItemInventory(264,2);
addItemInventory(383,1,11);
addItemInventory(383,1,12);
addItemInventory(363,12);
addItemInventory(319,12);
addItemInventory(266,3);
clientMessage("<Aventurero> Muy Facil Verdad");
mision=2;
misionface=0;
misioncount=0;
misioncount2=0;
}
else if(misioncount<=49&&misioncount2<=49){
clientMessage("<Aventurero> Vamos Aun Te Falta");
}
}
else if(mision==1&&misionface==0){
misionface=1;
clientMessage("<Apothecary> Regresa Cuando Ayas Terminado");
}
if(mision==0&&misionface>=2){
if(misioncount>=100){
addItemInventory(384,4);
addItemInventory(388,2);
addItemInventory(383,1,10);
addItemInventory(365,8);
addItemInventory(288,12);
clientMessage("<Aventurero> Muy Facil Verdad");
mision=1;
misionface=0;
misioncount=0;
}
else if(misioncount<=99){
clientMessage("<Aventurero> Vamos Aun Te Falta");
}
}
else if(mision==0&&misionface==1){
clientMessage("<Apothecary> Regresa Cuando Ayas Terminado");
misionface=2;
}
else if(mision==0&&misionface==0){
addItemInventory(634,1);
clientMessage("<Apothecary> "+Entity.getNameTag(getPlayerEnt())+" Ese Libro Te Informara de Tus Misiones Activas");
misionface=1;
NPCmision();
}
Saveconfig();
}
});
alert.setNegativeButton("Salir",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
clientMessage("<Apothecary> Nosvemos "+Entity.getNameTag(getPlayerEnt()));
}
});
alert.show();
}
}));
}

function bookGUI(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Quest Book");
if(mision==0&&misionface==2){
alert.setMessage("Chickens/pollos: "+misioncount+"/100"+
"\n"+
"\nRecompensas:"+
"\n4 Botellas de Expe"+
"\n2 Esmeraldas"+
"\n1 Spawn de Pollo"+
"\n8 Carne de Pollo"+
"\n12 Plumas");
}
else if(mision==1&&misionface>=1){
alert.setMessage("Cows/Vacas: "+misioncount+"/50"+
"\nPigs/Cerdos: "+misioncount2+"/50"+
"\n"+
"\nRecompensas:"+
"\n3 Botellas de Expe"+
"\n2 Diamantes"+
"\n1 Spawn de Vaca"+
"\n1 Spawn de Cerdo"+
"\n12 Carne de Vaca"+
"\n12 Carne de Cerdo"+
"\n3 Lingotes de Oro");
}
else if(mision==2&&misionface>=1){
alert.setMessage("Zombies: "+misioncount+"/200"+
"\n"+
"\nRecompensas:"+
"\n10 Botellas de Expe"+
"\n4 Diamantes"+
"\n1 Spawn de Zombie"+
"\n12 Carne Podrida"+
"\n1 Ajo");
}
else if(mision==3&&misionface>=1){
alert.setMessage("Spider/Araña: "+misioncount+"/300"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n1 Spawn de Spider/Araña"+
"\n20 Cuerdas"+
"\n1 Nivel de Witch(Si Eres Witch)"+
"\n1 Telaraña instantania"+
"\n10 Ojos de Araña");
}
else if(mision==4&&misionface>=1){
alert.setMessage("Ghast: "+misioncount+"/3"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n5 Lagrimas de Ghast"+
"\n10 Lingotes de Oro"+
"\n1 Nivel de Witch(Si Eres Witch)"+
"\n5 Ajos");
}
else if(mision==5&&misionface>=1){
alert.setMessage("Proxima Actualizacion");
}
else if(mision==6&&misionface>=1){
alert.setMessage("");
}
else if(mision==7&&misionface>=1){
alert.setMessage("");
}
else{
alert.setMessage("Habla con el Apothecary para una Mision");
}
if(evento==2){
alert.setMessage("Ataque del Necromancer"+
"\nConsigue Matar al Necromancer"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n10 Diamantes"+
"\n1 Poppet Vampiric"+
"\n1 Collar de Ajo"+
"\n1 Nivel de Witch"+
"\nUso Exclusivo de un Item para el Final del Evento");
}
alert.setNegativeButton("Salir",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){}
});
alert.show();
}
}));
}

function NPCmisionEvento(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Apothecary");
if(evento==0||evento==1){
alert.setMessage("Evento no Activado por el Momento");
}
if(evento==2){
alert.setMessage("Ataque del Necromancer"+
"\nConsigue Matar al Necromancer"+
"\n"+
"\nRequisitos:"+
"\n* Actualizar el Mod"+
"\n"+
"\nRecompensas:"+
"\n20 Botellas de Expe"+
"\n10 Diamantes"+
"\n1 Poppet Vampiric"+
"\n1 Collar de Ajo"+
"\n1 Nivel de Witch"+
"\nUso Exclusivo de un Item para el Final del Evento");
}
alert.setPositiveButton("Acepto",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
if(evento==0||evento==1){
clientMessage("Evento no Activado por el Momento");
}
if(evento==2){
clientMessage("<Apothecary> Actualiza Para Estar en el Evento!");
//addItemInventory(635,1);
}
}
});
alert.setNegativeButton("Salir",new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
clientMessage("<Apothecary> Nosvemos "+Entity.getNameTag(getPlayerEnt()));
}
});
alert.show();
}
}));
}

function CerdoGUI(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try
{
var layoutInfor = new android.widget.LinearLayout(ctx);
layoutInfor.setOrientation(android.widget.LinearLayout.VERTICAL);

var scrollInfor = new android.widget.ScrollView(ctx);
scrollInfor.addView(layoutInfor);
			
var popupInfor = new android.app.Dialog(ctx); 
popupInfor.setContentView(scrollInfor);
popupInfor.setTitle("Aventurero");

var inforText = new android.widget.TextView(ctx);
inforText.setText("ooH! ooooH!");
layoutInfor.addView(inforText);

if(Entity.setImmobile(pigv)==false){
var threaddButton2 = new android.widget.Button(ctx); 
threaddButton2.setText("Sentado"); 
threaddButton2.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
popupInfor.dismiss();
Entity.setImmobile(pigv,true);
}
}); 
layoutInfor.addView(threaddButton2);
}

else if(Entity.setImmobile(pigv)==true){
var threaddButton = new android.widget.Button(ctx); 
threaddButton.setText("Arriba"); 
threaddButton.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
popupInfor.dismiss();
Entity.setImmobile(pigv,false);
}
}); 
layoutInfor.addView(threaddButton);
}

var exitInforButton = new android.widget.Button(ctx); 
exitInforButton.setText("Cerrar"); 
exitInforButton.setOnClickListener(new android.view.View.OnClickListener(){ 
onClick: function(){ 
popupInfor.dismiss();

}
}); 
layoutInfor.addView(exitInforButton); 
popupInfor.show();
}catch (err)
{
clientMessage("Error: " + err);
clientMessage("Maybe GUI is not supported for your device. Reporta al creador");
}
}
});
}

