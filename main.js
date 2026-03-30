const bikes = [
  {
    name: "bike1",
    weight: 10,
  },
  {
    name: "bike2",
    weight: 9,
  },
  {
    name: "bike3",
    weight: 15,
  },
  {
    name: "bike4",
    weight: 12,
  },
];

let lighterBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lighterBike.weight) {
    lighterBike = bikes[i];
  }
}
console.log(lighterBike);

const teamFootBall = [
  {
    name: "milan",
    goals: 0,
    fouls: 0,
  },
  {
    name: "inter",
    goals: 0,
    fouls: 0,
  },
  {
    name: "napoli",
    goals: 0,
    fouls: 0,
  },
  {
    name: "palermo",
    goals: 0,
    fouls: 0,
  },
];
let randomGoalsFouls = teamFootBall;

for (let i = 0; i < teamFootBall.length; i++) {
  teamFootBall[i].goals = Math.floor(Math.random() * 10) + 1;
  teamFootBall[i].fouls = Math.floor(Math.random() * 10) + 1;
}

console.log(randomGoalsFouls);

const withoutGoals = teamFootBall.map((team) => {
  return {
    name: team.name,
    fouls: team.fouls,
  };
});
console.log(withoutGoals);
