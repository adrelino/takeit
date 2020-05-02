//https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var extension = ".gif";
var count = 0;
var path = "img/";

function Card(v,d1,d2)
{
  this.v = v;
  this.d1 = d1;
  this.d2 = d2;
}

function InitCards()
{
  CurrentCard = new Card(0,0,0);
  Cards = new Array(27);
  for (i=0; i < Cards.length; ++i)
    {
      Cards[i] = new Array(4);
	  Cards[i][3] = false;
	}
  Cards[0][0] = 1;
  Cards[0][1] = 2;
  Cards[0][2] = 3;
  Cards[1][0] = 1;
  Cards[1][1] = 2;
  Cards[1][2] = 4;
  Cards[2][0] = 1;
  Cards[2][1] = 2;
  Cards[2][2] = 8;
  Cards[3][0] = 1;
  Cards[3][1] = 6;
  Cards[3][2] = 3;
  Cards[4][0] = 1;
  Cards[4][1] = 6;
  Cards[4][2] = 4;
  Cards[5][0] = 1;
  Cards[5][1] = 6;
  Cards[5][2] = 8;
  Cards[6][0] = 1;
  Cards[6][1] = 7;
  Cards[6][2] = 3;
  Cards[7][0] = 1;
  Cards[7][1] = 7;
  Cards[7][2] = 4;
  Cards[8][0] = 1;
  Cards[8][1] = 7;
  Cards[8][2] = 8;
  
  Cards[9][0] = 5;
  Cards[9][1] = 2;
  Cards[9][2] = 3;
  Cards[10][0] = 5;
  Cards[10][1] = 2;
  Cards[10][2] = 4;
  Cards[11][0] = 5;
  Cards[11][1] = 2;
  Cards[11][2] = 8;
  Cards[12][0] = 5;
  Cards[12][1] = 6;
  Cards[12][2] = 3;
  Cards[13][0] = 5;
  Cards[13][1] = 6;
  Cards[13][2] = 4;
  Cards[14][0] = 5;
  Cards[14][1] = 6;
  Cards[14][2] = 8;
  Cards[15][0] = 5;
  Cards[15][1] = 7;
  Cards[15][2] = 3;
  Cards[16][0] = 5;
  Cards[16][1] = 7;
  Cards[16][2] = 4;
  Cards[17][0] = 5;
  Cards[17][1] = 7;
  Cards[17][2] = 8;  

  Cards[18][0] = 9;
  Cards[18][1] = 2;
  Cards[18][2] = 3;
  Cards[19][0] = 9;
  Cards[19][1] = 2;
  Cards[19][2] = 4;
  Cards[20][0] = 9;
  Cards[20][1] = 2;
  Cards[20][2] = 8;
  Cards[21][0] = 9;
  Cards[21][1] = 6;
  Cards[21][2] = 3;
  Cards[22][0] = 9;
  Cards[22][1] = 6;
  Cards[22][2] = 4;
  Cards[23][0] = 9;
  Cards[23][1] = 6;
  Cards[23][2] = 8;
  Cards[24][0] = 9;
  Cards[24][1] = 7;
  Cards[24][2] = 3;
  Cards[25][0] = 9;
  Cards[25][1] = 7;
  Cards[25][2] = 4;
  Cards[26][0] = 9;
  Cards[26][1] = 7;
  Cards[26][2] = 8;  
  
}

function InitFields()
{
  Fields = new Array(19);
  for (i=0; i < Fields.length; ++i)
    Fields[i] = new Array(4);
}

function DrawNewCard()
{
  var NewCard;
  var Drawn = false;
  var V;
  var D1;
  var D2;
  while (Drawn == false)
  {
    //NewCard = Math.round(Math.random()*100)%27;
    NewCard = Math.abs(myrng.int32())%27;
    if (Cards[NewCard][3] != true)
	{
	  V = Cards[NewCard][0];
	  D1 = Cards[NewCard][1];
	  D2 = Cards[NewCard][2];
	  DisplayNewCard(V,D1,D2);
	  CurrentCard.v = V;
	  CurrentCard.d1 = D1;
	  CurrentCard.d2 = D2;
	  Cards[NewCard][3] = true;
	  Drawn = true;
	}
  }
}

function DisplayNewCard(V,D1,D2)
{
  var PictName = "Vorschau";
  var PictPath;
  PictPath = path + V + D1 + D2 + extension; 
  MM_swapImage(PictName,'',PictPath,0); 
  if(typeof tab != "undefined") addImg(window.location.origin+window.location.pathname+PictPath);
}

function PlayIt()
{ 
  if (count < 19)
  {
    if (count == 0)
	{
	  InitCards();
	  InitFields();
	}
  DrawNewCard();
  count++;
  }
  else
  {
    CountPoints();
  }
}

function PlaceCard(FieldNr)
{ 
  var nr;
  var PictName;
  var PictPath;
  nr = FieldNr - 1;
  if (Fields[nr][3] != true)
  {
    PictName = "F" + FieldNr;
    PictPath = path + CurrentCard.v + CurrentCard.d1 + CurrentCard.d2 + extension; 
    MM_swapImage(PictName,'',PictPath,0);
    SetValues(nr);
  }
  else alert("Sorry, schon belegt,\nbitte ein anderes Feld wählen!"); 
}


function SetValues(nr)
{ 
  Fields[nr][0] = CurrentCard.v;
  Fields[nr][1] = CurrentCard.d1;
  Fields[nr][2] = CurrentCard.d2;
  Fields[nr][3] = true;
  PlayIt();
}

function CountPoints()
{
  var PictName = "Vorschau";
  var EmptyPictPath;
  EmptyPictPath = path + "leer.gif"; 
  MM_swapImage(PictName,'',EmptyPictPath,0);
 
  var V1=0;
  var V2=0;
  var V3=0;
  var V4=0;
  var V5=0;
  
  var D11=0;
  var D12=0;
  var D13=0;
  var D14=0;
  var D15=0;
  
  var D21=0;
  var D22=0;
  var D23=0;
  var D24=0;
  var D25=0;
  
  if (Fields[0][0] == Fields[3][0] && Fields[3][0] == Fields[7][0]) V1 = Fields[0][0] + Fields[3][0] + Fields[7][0];
  if (Fields[1][0] == Fields[4][0] && Fields[4][0] == Fields[8][0] && Fields[8][0] == Fields[12][0]) V2 = Fields[1][0] + Fields[4][0] + Fields[8][0] + Fields[12][0]; 
  if (Fields[2][0] == Fields[5][0] && Fields[5][0] == Fields[9][0] && Fields[9][0] == Fields[13][0] && Fields[13][0] == Fields[16][0]) V3 = Fields[2][0] + Fields[5][0] + Fields[9][0] + Fields[13][0] + Fields[16][0]; 
  if (Fields[6][0] == Fields[10][0] && Fields[10][0] == Fields[14][0] && Fields[14][0] == Fields[17][0]) V4 = Fields[6][0] + Fields[10][0] + Fields[14][0] + Fields[17][0]; 
  if (Fields[11][0] == Fields[15][0] && Fields[15][0] == Fields[18][0]) V5 = Fields[11][0] + Fields[15][0] + Fields[18][0];

  if (Fields[0][1] == Fields[1][1] && Fields[1][1] == Fields[2][1]) D11 = Fields[0][1] + Fields[1][1] + Fields[2][1];
  if (Fields[3][1] == Fields[4][1] && Fields[4][1] == Fields[5][1] && Fields[5][1] == Fields[6][1]) D12 = Fields[3][1] + Fields[4][1] + Fields[5][1] + Fields[6][1]; 
  if (Fields[7][1] == Fields[8][1] && Fields[8][1] == Fields[9][1] && Fields[9][1] == Fields[10][1] && Fields[10][1] == Fields[11][1]) D13 = Fields[7][1] + Fields[8][1] + Fields[9][1] + Fields[10][1] + Fields[11][1]; 
  if (Fields[12][1] == Fields[13][1] && Fields[13][1] == Fields[14][1] && Fields[14][1] == Fields[15][1]) D14 = Fields[12][1] + Fields[13][1] + Fields[14][1] + Fields[15][1]; 
  if (Fields[16][1] == Fields[17][1] && Fields[17][1] == Fields[18][1]) D15 = Fields[16][1] + Fields[17][1] + Fields[18][1];

  if (Fields[2][2] == Fields[6][2] && Fields[6][2] == Fields[11][2]) D21 = Fields[2][2] + Fields[6][2] + Fields[11][2];
  if (Fields[1][2] == Fields[5][2] && Fields[5][2] == Fields[10][2] && Fields[10][2] == Fields[15][2]) D22 = Fields[1][2] + Fields[5][2] + Fields[10][2] + Fields[15][2]; 
  if (Fields[0][2] == Fields[4][2] && Fields[4][2] == Fields[9][2] && Fields[9][2] == Fields[14][2] && Fields[14][2] == Fields[18][2]) D23 = Fields[0][2] + Fields[4][2] + Fields[9][2] + Fields[14][2] + Fields[18][2]; 
  if (Fields[3][2] == Fields[8][2] && Fields[8][2] == Fields[13][2] && Fields[13][2] == Fields[17][2]) D24 = Fields[3][2] + Fields[8][2] + Fields[13][2] + Fields[17][2]; 
  if (Fields[7][2] == Fields[12][2] && Fields[12][2] == Fields[16][2]) D25 = Fields[7][2] + Fields[12][2] + Fields[16][2];

  points = V1 + V2 + V3 + V4 + V5 + D11 + D12 + D13 + D14 + D15 + D21 + D22 + D23 + D24 + D25;
  alert("Das Spiel ist fertig!\nDu hast " + points +" Punkte erreicht.")
}

function PlayItInit(ss){
  //console.log(ss);
  //Math.seedrandom(ss);
  myrng = new Math.seedrandom(ss);
	PlayIt();
}

function OnLoad(){
	var href = window.location.href;
	var query = window.location.search;
	var parts = query.split("=");
	if(parts.length==2 && parts[0]=="?seed"){
		document.getElementById('seed1').value = parts[1];
		PlayItInit(parts[1]);
		var words = generateWords(1);
		document.getElementById('seed').value = words[0];	
	}else if(query.length==0){
		var words = generateWords(1);
		window.location.search="?seed="+words[0];
	}

    //document.getElementById('linkCurrent').innerHTML = href;
	//document.getElementById('linkCurrent').href = href;
}

function FormPressed(ss){
    //window.location.search="?seed="+ss;
}

function addImg(src){
  console.log(src);
  var s = 3;
  var w = 99*s;
  var h = 56*s;
  var html = `<img name="Vorschau" border="0" src="${src}" width="${w}" height="${h}">`;
  tab.document.body.insertAdjacentHTML('afterbegin', html);
}

function imgclick(imgt){
  //https://javascript.info/popup-windows
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=600,left=500,top=100`;
  tab = window.open("about:blank", "hello", params);
  tab.onload = function() {
    addImg(imgt.src);
  };
}