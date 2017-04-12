function cadre(context) {
  context.strokeRect(20, 10, 600, 500);
  context.font = "12pt Calibri,Geneva,Arial";
  context.fillStyle = "#000";
}

function indicateurGauche(context) {
  var xIndicatorLeft = 0;
  var yIndicatorLeft = 0;
  context.lineWidth = -2;
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

var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

cadre(context);
indicateurGauche(context);
indicateurBas(context,10);
