const { Employee } = require("../lib/Employee");

describe('Employee', () => {

    it('should be an instance of "Employee"', () => {
        const Thor = new Employee();
        expect(Thor).toBeInstanceOf(Employee);
    });

    it('should be an instance of "Employee"', () => {
        const Thor = new Employee();
        expect(Thor).toBeInstanceOf(Employee);
    });

});