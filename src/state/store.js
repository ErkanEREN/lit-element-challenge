class Store {
    constructor() {
      this.employees = [
        { id: 1737911059207, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059208, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059209, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059211, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059212, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059213, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059214, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059215, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059216, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059217, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059218, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059219, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059220, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059221, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059222, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059223, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059224, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059225, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059226, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059227, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059228, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059229, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059230, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059231, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059232, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059233, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059234, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059235, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059236, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059237, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059238, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059239, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059240, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059241, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059242, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059243, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059244, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059245, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059246, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059247, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        // { id: 1737911059248, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059249, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059250, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059251, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},
        { id: 1737911059252, firstName:'Ahmet', lastName:'Sourtimes', employmentDate:'2015-01-15', birthDate:'1993-02-03', phone:905341234567, email:'ahmet@sourtimes.org', department:'tech', position:'jun'},

      ];
      this.subscribers = [];
    }
  
    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    notify() {
      this.subscribers.forEach(callback => callback());
    }
  
    getEmployees() {
      return this.employees;
    }
  
    getEmployeeById(id) {
      return this.employees.find(emp => emp.id === parseInt(id, 10));
    }
  
    addEmployee(employee) {
      employee.id = Date.now();
      this.employees.push(employee);
      this.notify();
    }
  
    updateEmployee(updatedEmployee) {
      this.employees = this.employees.map(emp =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      );
      this.notify();
    }
  
    deleteEmployee(id) {
      this.employees = this.employees.filter(emp => emp.id !== id);
      this.notify();
    }
  }
  
  export const store = new Store();
  