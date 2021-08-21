const { Employee } = require("../lib/Employee");

describe('Employee', () => {

    it('should be an instance of "Employee"', () => {
        const kevin = new Employee();
        expect(kevin).toBeInstanceOf(Employee);
    });

});