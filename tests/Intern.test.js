const { Intern } = require("../lib/Intern");

describe('Intern', () => {

    it('should be an instance of "Intern"', () => {
        const kevin = new Intern();
        expect(kevin).toBeInstanceOf(Intern);
    });

    it('returns "school"', () => {
        const UOB = new school();
        expect(UOB).toReturn(school);
    });

});