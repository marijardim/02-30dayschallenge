const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
 

function addRotation(){
  const data = new Date(); //Deve ficar no escopo da função para os ponteiros atualizarem autom.
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();
  
  hourHand.style.transform = `rotate(${(360 / 12 ) * hora}deg)`;
  minHand.style.transform = `rotate(${(360 / 60 ) * minuto}deg)`;
  secondHand.style.transform = `rotate(${(360 / 60 ) * segundo}deg)`;
}
setInterval(addRotation, 1000);
addRotation()



