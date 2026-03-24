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
