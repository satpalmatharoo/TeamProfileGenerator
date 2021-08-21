const { Manager } = require("../lib/Manager");

describe('Manager', () => {

    it('should be an instance of "Manager"', () => {
        const kevin = new Manager();
        expect(kevin).toBeInstanceOf(Manager);
    });

});