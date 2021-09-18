const { Manager } = require("../lib/Manager");

describe('Manager', () => {

    it('should be an instance of "Manager"', () => {
        const IronMan = new Manager();
        expect(IronMan).toBeInstanceOf(Manager);
    });

});