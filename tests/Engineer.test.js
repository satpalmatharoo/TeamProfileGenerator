const { Engineer } = require("../lib/Engineer");

describe('Engineer', () => {

    it('should be an instance of "Engineer"', () => {
        const kevin = new Engineer();
        expect(kevin).toBeInstanceOf(Engineer);
    });

});