const { Employee } = require("../lib/Employee");

describe('Employee', () => {

    it('should be an instance of "Employee"', () => {
        const Thor = new Employee("Thor", "Thor@Marvel.com");
       // const Response = new Employee("Thor", "Thor@Marvel.com");
        expect(Thor).toBeInstanceOf(Employee);
    });

    //it('should getName of "Employee"', () => {
      //  expect(Response.getName()).toBe(Thor.getName());
    //});

   
});