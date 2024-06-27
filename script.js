let count = 0;

const wheel = document.querySelector(".spin")

spin();

function spin() {
  count++;
  // wheel.style.translate = `150px`
  // wheel.style.transform = `rotate(${count}deg)`
  setTimeout(spin, 30);
}

let index = 0;
const containerE = document.querySelector('.cont');
const stan = `Thank you lord for providing for me`

kiss();

function kiss() {
  if(index < stan.length) {
    containerE.innerHTML += stan[index] + '';
    index++;
    setTimeout(kiss, 200);

    console.log(containerE);

  }
}
console.log(stan[0]); 