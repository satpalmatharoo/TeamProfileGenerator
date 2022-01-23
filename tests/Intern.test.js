const { Intern } = require("../lib/Intern");

describe('Intern', () => {

    it('should be an instance of "Intern"', () => {
        const kevin = new Intern();
        expect(kevin).toBeInstanceOf(Intern);
    });

    // it('returns "school"', () => {
    //     expect(Intern.getSchool()).toBe("UOB");
    // });

});