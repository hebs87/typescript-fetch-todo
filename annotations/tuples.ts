const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Tuple format - declare the order of types in square brackets to ensure the order cannot be mixed
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Alternative - define a type which can then apply to multiple tuples
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 50];
const sprite: Drink = ['clear', true, 40];
