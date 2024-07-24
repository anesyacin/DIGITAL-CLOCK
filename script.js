function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let am_pm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12; 
  hours = hours ? hours : 12;

  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');


  let timeString = `${hours}:${minutes}:${seconds} ${am_pm}`;

  document.getElementById('time').textContent = timeString;
  const today = new Date();

let year = today.getFullYear(); 
let month = today.getMonth() + 1; 
let day = today.getDate();
month = month.toString().padStart(2, '0');
day = day.toString().padStart(2, '0');

document.getElementById('date').textContent = `${year} / ${month} / ${day}`;

  
}
updateTime();
setInterval(updateTime, 1000);
function redcolor(){
  window.red=rhex();
}
function greencolor(){
  window.green=rhex();
}
function bluecolor(){
  window.blue=rhex();
}
redcolor()
setInterval(redcolor,1000);
greencolor()
setInterval(greencolor, 3600000);
bluecolor()
setInterval(bluecolor, 3600000);

function generateRandomcolor() {
  document.getElementById('hex').textContent = '#'+blue+green+red;
  document.getElementById('COLORS').style.background = '#'+blue+green+red;
}

function rhex(){ 
  const letters = '0123456789ABCDEF';
  let color='';
  
  for (let i = 0; i < 2; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateRandomcolor()
setInterval(generateRandomcolor, 1000);

