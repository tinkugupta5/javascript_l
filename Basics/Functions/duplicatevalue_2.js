function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  employee.prototype.salary = 2000;
  
  const fred = new employee("Fred Flintstone", "Caveman", 1970);
  console.log("salary" in fred);