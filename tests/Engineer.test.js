const { Engineer } = require("../lib/Engineer");

describe('Engineer', () => {

    it('should be an instance of "Engineer"', () => {
        const kevin = new Engineer();
        expect(kevin).toBeInstanceOf(Engineer);
    });

    it('should get role of "Engineer"', () => {
        const coolEnginner = new Engineer();
        expect(coolEngineer).toBeInstanceOf(Engineer);
    });

});