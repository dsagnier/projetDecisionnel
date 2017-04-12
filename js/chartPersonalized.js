function cadreGlobal(context) {
  context.strokeRect(0, 0, 640, 540);
  context.font = "12pt Calibri,Geneva,Arial";
  context.fillStyle = "#000";
}

function cadre(context) {
  context.strokeRect(20, 10, 600, 500);
  context.font = "12pt Calibri,Geneva,Arial";
  context.fillStyle = "#000";
}

function indicateurGauche(context) {
  var xIndicatorLeft = 0;
  var yIndicatorLeft = 0;
  for (note=0;note<11;note++){
    xIndicatorLeft = 3;
    yIndicatorLeft = 516-(note*50);
    if(note >= 10) {
      xIndicatorLeft = -2;
    }
    context.fillText(note.toString(),xIndicatorLeft,yIndicatorLeft);

    if(note > 0 && note < 10) {
      context.lineWidth = "0.2";
      context.beginPath();
      context.moveTo(xIndicatorLeft+18,yIndicatorLeft-5);
      context.lineTo(xIndicatorLeft+620,yIndicatorLeft-5);
      context.stroke();
      context.lineWidth = "1";
    }
  }
}

function indicateurBas(context,monthNumber) {
  var month = ["Jan.", "Fev.", "Mars", "Avr.", "Mai", "Juin", "Juil", "Aout", "Sept.", "Oct.", "Nov.", "Dec."];
  var xIndicatorBottom = 27;
  for(i=0; i < month.length; i++){
    context.fillText(month[monthNumber], xIndicatorBottom,530);
    xIndicatorBottom+=50;
    monthNumber+=1;
    if(monthNumber>11){
      monthNumber = 0;
    }
  }
}

function placerPoint(context, month, note) {
  context.beginPath();
  context.arc(43+(month*50), 511-(note*50), 5, 0, Math.PI * 2);
  context.fill();
}

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

cadre(context);
indicateurGauche(context);
indicateurBas(context,10);
//cadreGlobal(context);
var note=[5,8,7,5,6,9,5,1,4,2,3,6]
for(var i=0; i<12;i++) {
  placerPoint(context,i,note[i]);
}
