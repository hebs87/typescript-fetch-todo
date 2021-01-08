// Array containing strings
const carMakers: string[] = [];
carMakers.push('ford', 'toyota', 'chevy');

// Two-dimensional array containing strings and numbers
const carMakesAndYears: (string | number)[][] = [];
carMakesAndYears.push(
    ['f150', 2020],
    ['corolla', 2020],
    ['camaro', 2020]
)

// Mapping over arrays
carMakers.map((car: string):string => {
    return car.toUpperCase();
});
