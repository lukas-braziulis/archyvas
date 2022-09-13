export class Alus {
    constructor(name, price, kick) {
        this.pavadinimas = name;
        this.kaina = price;
        this.laipsniai = kick;
    }

    shouldStudentsBuy(){
        if(this.kaina <= 1.3 && this.laipsniai >= 5) {
            return `Studentas pirks ${this.pavadinimas}`;
        } else if (this.kaina > 1.3 || this.laipsniai < 5) {
            return `Studentas nepirks ${this.pavadinimas}`;        } 
    }

}