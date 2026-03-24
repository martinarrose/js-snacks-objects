const ff = [2, 7, 6, 88, 5445, -9];

let smallerNumber = ff[0];

for (let i = 1; i < ff.length; i++) {
  const element = ff[i];
  if (element < smallerNumber) {
    smallerNumber = element;
  }
}
console.log(smallerNumber);

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

const bikes = [
  {
    name: "City Bike",
    weight: 20,
  },
  {
    name: "Mountain Bike",
    weight: 14,
  },
  {
    name: "racing bike",
    weight: 7.5,
  },
  {
    name: "BMX",
    weight: 9.5,
  },
];

let lighterBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  const element = bikes[i];

  if (element.weight < lighterBike.weight) {
    lighterBike = element;
  }
}
console.log(lighterBike);

//---------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const soccerPlayers = [
  {
    name: "argentina",
    goalScored: 0,
    foulDrown: 0,
  },
  {
    name: "Italia",
    goalScored: 0,
    foulDrown: 0,
  },
  {
    name: "Brasile",
    goalScored: 0,
    foulDrown: 0,
  },
];

soccerPlayers.forEach((team) => {
  team.goalScored = Math.floor(Math.random() * 21);
  team.foulDrown = Math.floor(Math.random() * 21);
});

console.log(soccerPlayers);

const withoutFoulDrown = soccerPlayers.map((team) => {
  return {
    name: team.name,
    goalScored: team.goalScored,
  };
});
console.log(withoutFoulDrown);
