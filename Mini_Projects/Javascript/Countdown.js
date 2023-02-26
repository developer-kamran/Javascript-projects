const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const giveAway = document.querySelector('.giveaway'),
  deadLine = document.querySelector('.deadline'),
  items = document.querySelectorAll('.deadline-format h4');

// console.log(items);
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate=new Date(2021,11,10,8,00,00);
// console.log(futureDate);
const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 8, 00, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];

// and Another Way
const weekDay = weekDays[futureDate.getDay()];

giveAway.textContent = `Giveaway Ends On ${weekDay} ${date} ${month} ${year} 0${hours}:${mins} am`;

//future time in millisecond
const futureTime = futureDate.getTime();

getRemainingTime = () => {
  const today = new Date().getTime();

  const t = futureTime - today;
  // console.log(t);

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate all values

  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //Set Values Array
  const values = [days, hours, minutes, seconds];
  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countDown);
    giveAway.textContent = `Giveaway Ended at ${weekDay} ${date} ${month} ${year} 0${hours}:${mins} am`;
    deadLine.innerHTML = `<h4 class="expired">Sorry, This Giveaway Has Expired. </h4>`;
  }
};
//CountDown
let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
