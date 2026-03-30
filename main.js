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
