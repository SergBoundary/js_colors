var colorLight = new Array ("#ffffff", "#ffff71", "#d4ff71", "#71ff71", "#00d680", "#6565ff", "#9f4bff", "#d800d8", "#e83686", "#ff7171", "#ff9d71", "#ffc671", "#fee370");
var colorMiddle = new Array ("#ffffff", "#ffff00", "#83ff00", "#00f000", "#00a660", "#0000ff", "#6600d3", "#a600a6", "#d4166c", "#ff0000", "#ff5100", "#ffa600", "#ffd109");
var colorDark = new Array ("#ffffff", "#c0c000", "#7cb200", "#009a00", "#007443", "#000080", "#370076", "#5c0056", "#95213e", "#a60000", "#b23800", "#b26a00", "#ce980f");

function goCycleLeft() {
  colorround-- ;
  switch(colorlist) {
    case "2": 
      if (colorround==0) {
        colorround=12 ;
      }
      break;
    case "3":  
      if (colorround==0) {
        colorround=8 ;
      }
      break;
    case "4": 
      if (colorround==0) {
        colorround=6 ;
      }
      break;
  }
  document.images["colorarrow"].src="img/"+colorlist+colorround+".png" ; 
  /* return colorround ;
  document.getElementById("cycleerror").innerHTML="list="+colorlist+" round="+colorround ; */
  goSchemeList();
}

function goCycleRight() {
  colorround++ ;
  switch(colorlist) {
    case "2": 
      if (colorround==13) {
        colorround=1 ;
      }
      break;
    case "3":  
      if (colorround==9) {
        colorround=1 ;
      }
      break;
    case "4": 
      if (colorround==7) {
        colorround=1 ;
      }
      break;
  }
  document.images["colorarrow"].src="img/"+colorlist+colorround+".png" ; 
  /* return colorround ;
  document.getElementById("cycleerror").innerHTML="list="+colorlist+" round="+colorround ; */
  goSchemeList();
}

function goPalettesList() {
  var list = document.forms[1].palettelist;
  colorlist = list.options[list.selectedIndex].value;
  /* Clean palette */
  colorround=0;
  document.getElementById("example").style.background=colorMiddle[0];
  document.getElementById("example").style.color=colorMiddle[0];
  document.getElementById("example-h1-1").style.color=colorMiddle[0];
  /* Start palette */
  goCycleRight(colorlist);
  /*document.getElementById("cycleerror").innerHTML="list="+colorlist+" round="+colorround ;
  document.getElementById("nameimg").innerHTML="list="+colorlist+" round="+colorround ;*/
}

function goSchemeList() {
  var form = document.forms[2];
  for (var i=0; i < form.schemes.length; i++) {
    if (form.schemes[i].checked) {
	  break;
	}
  }
  switch(i) {
    case 0: 
      switch(colorlist) {
        case "2":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[1];
              document.getElementById("example").style.color=colorMiddle[7];
              document.getElementById("example-h1-1").style.color=colorMiddle[7]; //
			  document.getElementById("btn_group").style.background=colorLight[7];
			  document.getElementById("btn_group").style.color=colorMiddle[1];
			  break;
            case 2:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[2];
              document.getElementById("example").style.color=colorMiddle[8];
              document.getElementById("example-h1-1").style.color=colorMiddle[8];
			  document.getElementById("btn_group").style.background=colorLight[8];
			  document.getElementById("btn_group").style.color=colorMiddle[2];
			  break;
            case 3:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[3];
              document.getElementById("example").style.color=colorMiddle[9];
			  document.getElementById("example-h1-1").style.color=colorMiddle[9];
			  document.getElementById("btn_group").style.background=colorLight[9];
			  document.getElementById("btn_group").style.color=colorMiddle[3];
			  break;
            case 4:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[4];
              document.getElementById("example").style.color=colorMiddle[10];
			  document.getElementById("example-h1-1").style.color=colorMiddle[10];
			  document.getElementById("btn_group").style.background=colorLight[10];
			  document.getElementById("btn_group").style.color=colorMiddle[4];
			  break;
            case 5:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[5];
              document.getElementById("example").style.color=colorMiddle[11];
			  document.getElementById("example-h1-1").style.color=colorMiddle[11];
			  document.getElementById("btn_group").style.background=colorLight[11];
			  document.getElementById("btn_group").style.color=colorMiddle[5];
			  break;
            case 6:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[6];
              document.getElementById("example").style.color=colorMiddle[12];
			  document.getElementById("example-h1-1").style.color=colorMiddle[12];
			  document.getElementById("btn_group").style.background=colorLight[12];
			  document.getElementById("btn_group").style.color=colorMiddle[6];
			  break;
            case 7:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[7];
              document.getElementById("example").style.color=colorMiddle[1];
			  document.getElementById("example-h1-1").style.color=colorMiddle[1];
			  document.getElementById("btn_group").style.background=colorLight[1];
			  document.getElementById("btn_group").style.color=colorMiddle[7];
			  break;
            case 8:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[8];
              document.getElementById("example").style.color=colorMiddle[2];
			  document.getElementById("example-h1-1").style.color=colorMiddle[2];
			  document.getElementById("btn_group").style.background=colorLight[2];
			  document.getElementById("btn_group").style.color=colorMiddle[8];
			  break;
            case 9:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[9];
              document.getElementById("example").style.color=colorMiddle[3];
			  document.getElementById("example-h1-1").style.color=colorMiddle[3];
			  document.getElementById("btn_group").style.background=colorLight[3];
			  document.getElementById("btn_group").style.color=colorMiddle[9];
			  break;
            case 10:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[10];
              document.getElementById("example").style.color=colorMiddle[4];
			  document.getElementById("example-h1-1").style.color=colorMiddle[4];
			  document.getElementById("btn_group").style.background=colorLight[4];
			  document.getElementById("btn_group").style.color=colorMiddle[10];
			  break;
            case 11:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[11];
              document.getElementById("example").style.color=colorMiddle[5];
			  document.getElementById("example-h1-1").style.color=colorMiddle[5];
			  document.getElementById("btn_group").style.background=colorLight[5];
			  document.getElementById("btn_group").style.color=colorMiddle[11];
			  break;
            case 12:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[12];
              document.getElementById("example").style.color=colorMiddle[6];
			  document.getElementById("example-h1-1").style.color=colorMiddle[6];
			  document.getElementById("btn_group").style.background=colorLight[6];
			  document.getElementById("btn_group").style.color=colorMiddle[12];
			  break;
          }
          break;
        case "3":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[1];
              document.getElementById("example").style.color=colorMiddle[5];
              document.getElementById("example-h1-1").style.color=colorMiddle[5];
			  break;
            case 2:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[2];
              document.getElementById("example").style.color=colorMiddle[6];
              document.getElementById("example-h1-1").style.color=colorMiddle[6];
			  break;
            case 3:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[3];
              document.getElementById("example").style.color=colorMiddle[7];
              document.getElementById("example-h1-1").style.color=colorMiddle[7];
			  break;
            case 4:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[4];
              document.getElementById("example").style.color=colorMiddle[8];
              document.getElementById("example-h1-1").style.color=colorMiddle[8];
			  break;
            case 5:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[5];
              document.getElementById("example").style.color=colorMiddle[9];
              document.getElementById("example-h1-1").style.color=colorMiddle[9];
			  break;
            case 6:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[6];
              document.getElementById("example").style.color=colorMiddle[10];
              document.getElementById("example-h1-1").style.color=colorMiddle[10];
			  break;
            case 7:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[7];
              document.getElementById("example").style.color=colorMiddle[11];
              document.getElementById("example-h1-1").style.color=colorMiddle[11];
			  break;
            case 8:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[8];
              document.getElementById("example").style.color=colorMiddle[12];
              document.getElementById("example-h1-1").style.color=colorMiddle[12];
			  break;
            case 9:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[9];
              document.getElementById("example").style.color=colorMiddle[1];
              document.getElementById("example-h1-1").style.color=colorMiddle[1];
			  break;
            case 10:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[10];
              document.getElementById("example").style.color=colorMiddle[2];
              document.getElementById("example-h1-1").style.color=colorMiddle[2];
			  break;
            case 11:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[11];
              document.getElementById("example").style.color=colorMiddle[3];
              document.getElementById("example-h1-1").style.color=colorMiddle[3];
			  break;
            case 12:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[12];
              document.getElementById("example").style.color=colorMiddle[4];
              document.getElementById("example-h1-1").style.color=colorMiddle[4];
			  break;
          }
          break;
        case "4":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[1];
              document.getElementById("example").style.color=colorMiddle[7];
			  break;
            case 2:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[2];
              document.getElementById("example").style.color=colorMiddle[8];
			  break;
            case 3:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[3];
              document.getElementById("example").style.color=colorMiddle[9];
			  break;
            case 4:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[4];
              document.getElementById("example").style.color=colorMiddle[10];
			  break;
            case 5:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[5];
              document.getElementById("example").style.color=colorMiddle[11];
			  break;
            case 6:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[6];
              document.getElementById("example").style.color=colorMiddle[12];
			  break;
            case 7:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[7];
              document.getElementById("example").style.color=colorMiddle[1];
			  break;
            case 8:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[8];
              document.getElementById("example").style.color=colorMiddle[2];
			  break;
            case 9:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[9];
              document.getElementById("example").style.color=colorMiddle[3];
			  break;
            case 10:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[10];
              document.getElementById("example").style.color=colorMiddle[4];
			  break;
            case 11:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[11];
              document.getElementById("example").style.color=colorMiddle[5];
			  break;
            case 12:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[12];
              document.getElementById("example").style.color=colorMiddle[6];
			  break;
          }
          break;
      }
      break;
    case 1:  
      switch(colorlist) {
        case "2":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="B-2-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="B-2-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="B-2-3";
			  break;
            case 4:  
              document.getElementById("test").innerHTML="B-2-4";
			  break;
            case 5:  
              document.getElementById("test").innerHTML="B-2-5";
			  break;
            case 6:  
              document.getElementById("test").innerHTML="B-2-6";
			  break;
          }
          break;
        case "3":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[1];
              document.getElementById("example").style.color=colorMiddle[5];
              document.getElementById("example-h1-1").style.color=colorMiddle[9];
			  break;
            case 2:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[2];
              document.getElementById("example").style.color=colorMiddle[6];
              document.getElementById("example-h1-1").style.color=colorMiddle[10];
			  break;
            case 3:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[3];
              document.getElementById("example").style.color=colorMiddle[7];
              document.getElementById("example-h1-1").style.color=colorMiddle[11];
			  break;
            case 4:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[4];
              document.getElementById("example").style.color=colorMiddle[8];
              document.getElementById("example-h1-1").style.color=colorMiddle[12];
			  break;
            case 5:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[5];
              document.getElementById("example").style.color=colorMiddle[9];
              document.getElementById("example-h1-1").style.color=colorMiddle[1];
			  break;
            case 6:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[6];
              document.getElementById("example").style.color=colorMiddle[10];
              document.getElementById("example-h1-1").style.color=colorMiddle[2];
			  break;
            case 7:  
              document.getElementById("test").innerHTML="A-2-1";
              document.getElementById("example").style.background=colorMiddle[7];
              document.getElementById("example").style.color=colorMiddle[11];
              document.getElementById("example-h1-1").style.color=colorMiddle[3];
			  break;
            case 8:  
              document.getElementById("test").innerHTML="A-2-2";
              document.getElementById("example").style.background=colorMiddle[8];
              document.getElementById("example").style.color=colorMiddle[12];
              document.getElementById("example-h1-1").style.color=colorMiddle[4];
			  break;
            case 9:  
              document.getElementById("test").innerHTML="A-2-3";
              document.getElementById("example").style.background=colorMiddle[9];
              document.getElementById("example").style.color=colorMiddle[1];
              document.getElementById("example-h1-1").style.color=colorMiddle[5];
			  break;
            case 10:  
              document.getElementById("test").innerHTML="A-2-4";
              document.getElementById("example").style.background=colorMiddle[10];
              document.getElementById("example").style.color=colorMiddle[2];
              document.getElementById("example-h1-1").style.color=colorMiddle[6];
			  break;
            case 11:  
              document.getElementById("test").innerHTML="A-2-5";
              document.getElementById("example").style.background=colorMiddle[11];
              document.getElementById("example").style.color=colorMiddle[3];
              document.getElementById("example-h1-1").style.color=colorMiddle[7];
			  break;
            case 12:  
              document.getElementById("test").innerHTML="A-2-6";
              document.getElementById("example").style.background=colorMiddle[12];
              document.getElementById("example").style.color=colorMiddle[4];
              document.getElementById("example-h1-1").style.color=colorMiddle[8];
			  break;
          }
          break;
        case "4":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="B-4-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="B-4-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="B-4-3";
			  break;
          }
          break;
      }
      break;
    case 2: 
      switch(colorlist) {
        case "2":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="C-2-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="C-2-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="C-2-3";
			  break;
            case 4:  
              document.getElementById("test").innerHTML="C-2-4";
			  break;
            case 5:  
              document.getElementById("test").innerHTML="C-2-5";
			  break;
            case 6:  
              document.getElementById("test").innerHTML="C-2-6";
			  break;
          }
          break;
        case "3":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="C-3-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="C-3-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="C-3-3";
			  break;
            case 4:  
              document.getElementById("test").innerHTML="C-3-4";
			  break;
          }
          break;
        case "4":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="C-4-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="C-4-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="C-4-3";
			  break;
          }
          break;
      }
      break;
    case 3: 
      switch(colorlist) {
        case "2":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="D-2-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="D-2-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="D-2-3";
			  break;
            case 4:  
              document.getElementById("test").innerHTML="D-2-4";
			  break;
            case 5:  
              document.getElementById("test").innerHTML="D-2-5";
			  break;
            case 6:  
              document.getElementById("test").innerHTML="D-2-6";
			  break;
          }
          break;
        case "3":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="D-3-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="D-3-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="D-3-3";
			  break;
            case 4:  
              document.getElementById("test").innerHTML="D-3-4";
			  break;
          }
          break;
        case "4":  
          switch(colorround) {
            case 1:  
              document.getElementById("test").innerHTML="D-4-1";
			  break;
            case 2:  
              document.getElementById("test").innerHTML="D-4-2";
			  break;
            case 3:  
              document.getElementById("test").innerHTML="D-4-3";
			  break;
          }
          break;
      }
      break;
  }
  /*document.getElementById("cycleerror").innerHTML="list="+colorlist+" round="+colorround ;
  document.getElementById("test").innerHTML="list="+colorlist+" round="+colorround ;*/
}
