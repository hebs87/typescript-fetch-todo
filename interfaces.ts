// Define an interface - definition of an object - and then use this as the reference in the function, instead of
// having to declare each property individually
interface Reportable {
    // Function that takes no arguments and returns a string - commented out line is alternative version
    summary: () => string,
    // summary(): string
}

const oldCivic = {
    name: 'civic',
    year: new Date('2000-06-01'),
    broken: true,
    summary(): string {
        return `
            Name: ${this.name}
            Year: ${this.year}
            Broken? ${this.broken}        
        `
    }
};

const pepsi = {
    color: 'brown',
    carbonated: true,
    suger: 40,
    summary(): string {
        return `
            Color: ${this.color}
            Carbonated? ${this.carbonated}
            Sugar Content: ${this.suger}g
        `
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(pepsi);
