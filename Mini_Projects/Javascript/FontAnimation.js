//CHAIN
function breakChain() {
  let chain = document.getElementById('chain');
  chain.innerHTML = '&#xf0c1';
  setTimeout(() => {
    chain.innerHTML = '&#xf127';
  }, 1000);
}
breakChain();
setInterval(breakChain, 2000);
//BATTERY CHARGE

function chargeBattery() {
  let battery = document.getElementById('battery');
  battery.innerHTML = '&#xf244';
  setTimeout(() => {
    battery.innerHTML = '&#xf243';
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = '&#xf242';
  }, 1600);
  setTimeout(() => {
    battery.innerHTML = '&#xf241';
  }, 2200);
  setTimeout(() => {
    battery.innerHTML = '&#xf240';
  }, 2900);
}
chargeBattery();
setInterval(chargeBattery, 3400);

//hourglass
function hourGlass() {
  let hourGlass = document.getElementById('hourglass');
  hourGlass.innerHTML = '&#xf251';
  setTimeout(() => {
    hourGlass.innerHTML = '&#xf252';
  }, 1000);

  setTimeout(() => {
    hourGlass.innerHTML = '&#xf253';
  }, 1600);
}
setInterval(hourGlass, 2400);
hourGlass();
