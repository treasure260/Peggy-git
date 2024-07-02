// let count = 0;

// const wheel = document.querySelector(".spin")

// spin();

// function spin() {
//   count++;
//   // wheel.style.translate = `150px`
//   // wheel.style.transform = `rotate(${count}deg)`
//   setTimeout(spin, 30);
// }

// let index = 0;
// const containerE = document.querySelector('.cont');
// const stan = `Thank you lord for providing for me`

// kiss();

// function kiss() {
//   if(index < stan.length) {
//     containerE.innerHTML += stan[index] + '';
//     index++;
//     setTimeout(kiss, 200);

//     console.log(containerE);

//   }
// }
// console.log(stan[0]); 


const containerE = document.querySelector('.container');

const sports = ['Football', 'Basketball', 'Volleyball', 'Table tennis', 'and Swimming.'];

let index = 0;
let characterIndex = 0;

generateSports();

function generateSports() {
  characterIndex++;
  containerE.innerHTML = `
  <h1>My favourite sports are:<br><span>${sports[index].slice(0, characterIndex)}</span></h1>
`;


  if(characterIndex === sports[index].length) {
    index++;
    characterIndex = 0;
    // index.color = 'red';
    
    if(index === sports.length) {
      index = 0;
    }

  }

  setTimeout(generateSports, 400);


}

