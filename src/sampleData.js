// Script for loading sample data
const addData = (setPersonalData, setEduData, setExpData) => {
    setPersonalData({});
    setEduData([]);
    setExpData([]);

    setPersonalData({
        name: "James P. Sullivan", 
        email: "jSull2321@gmail.com",
        linkedIn: "www.linkedin.com/in/theScareMonster2",
        github: "github.com/theScareMonster2",
    });
    setEduData([{
        school: "Monsters University",
        major:  "MS in Scarinomics",
        gpa: "3.90",
        startDate: "2024-08-15",
        gradDate: "2028-05-15",
    },
    {
        school: "Harvard University",
        major: "B.S. in Fine Arts",
        gpa: "3.99",        
        startDate: "2012-08-15",
        gradDate: "2014-05-15",
    }]);
    setExpData([
        {
            company: "Tesla",
            jobTitle: "Principle Swag Engineer",
            startDate: "1998-08-15",
            endDate: "2024-08-15",
            location: "Dallas, TX",
            description: "Supported senior researchers on accessibility"+
            " standards for the open web. Created and usability tested "+
            "wireframes and prototypes. Produced interactive documentation"+
            " for quick onboarding of new researchers.",
        },
        {
            company: "Tesla",
            jobTitle: "Principle Swag Engineer",
            startDate: "1998-08-15",
            endDate: "2024-08-15",
            location: "Dallas, TX",
            description: "Supported senior researchers on accessibility"+
            " standards for the open web. Created and usability tested "+
            "wireframes and prototypes. Produced interactive documentation"+
            " for quick onboarding of new researchers.",
        },
    ]);
 
}

export default addData;