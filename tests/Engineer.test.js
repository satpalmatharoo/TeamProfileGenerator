const { Engineer } = require("../lib/Engineer");

describe('Engineer', () => {

    it('should be an instance of "Engineer"', () => {
        const Thor = new Engineer();
        expect(Thor).toBeInstanceOf(Engineer);
    });

    it('should get role of "Engineer"', () => {
        const coolEngineer = new Engineer();
        expect(coolEngineer).toBeInstanceOf(Engineer);
    });

});