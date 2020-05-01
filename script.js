top.focus();

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

function OpenNewWindow(url, width, height, mode, msg, name){
// Mode 0: Window without bars
// Mode 1: Window with menu only
// Mode 2: Window with toolbar only
// Mode 3: Window without bars and fixed size
// Mode 4: Window without bars, resizable 

	var features;
	var newWin;

	switch(mode){

		case 0:
		features = "menubar=no,location=no,toolbar=no,directories=no,scrollbars=yes,status=no,resizable=yes";
		break;

		case 1:
		features = "menubar=yes,location=no,toolbar=no,directories=no,scrollbars=yes,status=no,resizable=yes";
		break;

		case 2:
		features = "menubar=no,location=no,toolbar=yes,directories=no,scrollbars=yes,status=no,resizable=yes";
		break;

		case 3:
		features = "menubar=no,location=no,toolbar=no,directories=no,scrollbars=no,status=no,resizable=no";
		break;
		
		case 4:
		features = "menubar=no,location=no,toolbar=no,directories=no,scrollbars=no,status=no,resizable=yes";
		break;

		case 100:
		features = "menubar=no,location=no,toolbar=no,directories=no,scrollbars=no,status=yes,resizable=no";
		break;
	}
	if (height != 0)
		features += ",height="+height;
	if (width != 0)
		features += ",width="+width;
	if (msg != "")
		alert(msg);

	newWin = window.open (url, name, features);
	newWin.focus();
}
