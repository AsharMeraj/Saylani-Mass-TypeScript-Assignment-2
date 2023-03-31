console.log(`                                 Welcome To Our Vehicle Rental Services`);

abstract class Vehicle{
    constructor(
        private Company: string,  
        private Name: string, 
        private Year: number,
        public Rented: boolean,
    ){}

    get getCompany() {
        return this.Company;
    }
    get getName() {
        return this.Name;
    }
    get getYear() {
        return this.Year;
    }

    get getRented() {
        return this.Rented;
    }
    set setRented(rent: boolean){
        this.Rented = rent;
    }

    abstract rentalRate(): number;

    rent(){
        if(this.Rented){
            console.log(`This vehicle is already rented`);
        }
        else{
            this.Rented = true;
            console.log(`Congratulations! This vehicle has been rented`);
        }
    }
       
    return(){
            if(this.Rented){
                this.Rented = false;
                console.log(`This vehicle has been returned`);
            }
            else{
                console.log(`Sorry! This vehicle has not been rented yet`);
            }
        }

}

class Car extends Vehicle{
       constructor( 
        Company: string,  
        Name: string, 
        Year: number, 
        private Seaters: number,
        public Rented: boolean
       ){
        super(Company, Name, Year, Rented);
       }

       rentalRate() {
          var rate: number =   3000;
          return rate;
       }
       get getSeaters(){
        return this.Seaters;
       }
}

class Bike extends Vehicle{
       constructor( 
        Company: string,  
        Name: string, 
        Year: number, 
        private MaxSpeed: number,
        public Rented: boolean
       ){
        super(Company, Name, Year, Rented);
       }

       rentalRate() {
          var rate: number =   1000;
          return rate;
       }
       get getMaxSpeed(){
            return this.MaxSpeed
       }
}

class Truck extends Vehicle{
       constructor( 
        Company: string,  
        Name: string, 
        Year: number,      
        public Horsepower: number,
        public Rented: boolean
       ){
        super(Company, Name, Year, Rented);
       }

       rentalRate() {
          var rate: number =   8000;
          return rate;
       }
       get getHorsepower(){
        return this.Horsepower
   }
}

// Examples

const Mehran = new Car(`Suzuki`, `Mehran`, 2011, 4, false);
console.log(`The Company is: ${Mehran.getCompany}`);
console.log(`The Name is: ${Mehran.getName}`);
console.log(`The Year is: ${Mehran.getYear}`);
console.log(`The Seats are: ${Mehran.getSeaters}`);
console.log(`The Rental rate is: ${Mehran.rentalRate()} per day`);
console.log(`Is it rented?: ${Mehran.getRented}`);
Mehran.rent()
console.log(`\n`);

const Gto125 = new Bike(`Honda`, `Gto125`, 2016, 144, false);
console.log(`The Company is: ${Gto125.getCompany}`);
console.log(`The Name is: ${Gto125.getName}`);
console.log(`The Year is: ${Gto125.getYear}`);
console.log(`The Seats are: ${Gto125.getMaxSpeed}`);
console.log(`The Rental rate is: ${Gto125.rentalRate()} per day`);
console.log(`Is it rented?: ${Gto125.getRented}`);
Gto125.rent()
console.log(`\n`);

const Roadrunner = new Truck(`RTS`, `Roadrunner`, 2017, 355, false);
console.log(`The Company is: ${Roadrunner.getCompany}`);
console.log(`The Name is: ${Roadrunner.getName}`);
console.log(`The Year is: ${Roadrunner.getYear}`);
console.log(`The Seats are: ${Roadrunner.getHorsepower}`);
console.log(`The Rental rate is: ${Roadrunner.rentalRate()} per day`);
console.log(`Is it rented?: ${Roadrunner.getRented}`);
Roadrunner.rent()
console.log(`\n`);

console.log(`The Company is: ${Mehran.getCompany}`);
console.log(`The Name is: ${Mehran.getName}`);
console.log(`The Year is: ${Mehran.getYear}`);
console.log(`The Seats are: ${Mehran.getSeaters}`);
console.log(`The Rental rate is: ${Mehran.rentalRate()} per day`);
console.log(`Is it rented?: ${Mehran.getRented}`);
Mehran.return();
console.log(`\n`);

console.log(`The Company is: ${Mehran.getCompany}`);
console.log(`The Name is: ${Mehran.getName}`);
console.log(`The Year is: ${Mehran.getYear}`);
console.log(`The Seats are: ${Mehran.getSeaters}`);
console.log(`The Rental rate is: ${Mehran.rentalRate()} per day`);
console.log(`Is it rented?: ${Mehran.getRented}`);

