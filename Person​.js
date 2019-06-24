function person(name,surname,id,organisation){
  this.name=name,
  this.surname = surname,
  this.organisation=organisation,
  this.id       =id,
  this.printId = function() {
	  console.log(this.id);
    return this.name + " " + this.surname;
  },
this.printName = function() {
	  console.log(this.name + " " + this.surname);
  return this.organisation;
},
  this.printOrg = function() {
	  console.log(this.organisation);
  return this.organisation;
}

};

var P1 = new person("John", "Doe", 50, "blue");
var P2 = new person("Sally", "Rally", 48, "green");
var P3 = new person("hello", "su", 42, "green");

P1.printName();


