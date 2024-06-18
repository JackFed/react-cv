// Script for loading sample data
const addData = (setPersonalData, setEduData, setExpData) => {
    setPersonalData({});
    setEduData([]);
    setExpData([]);

    setPersonalData({
        name: "James P. Sullivan", 
        email: "jsullivan@monster.org",
        linkedIn: "JPSullivan",
        github: "theScareMonster5",
    });
    setEduData([{
        school: "Harvard University",
        major: "B.S. in Fine Arts",
        gpa: "3.99",
        startDate: "2024-08-15",
        gradDate: "2028-05-15", 
    },
    {
        school: "Monsters University",
        major:  "MS in Scarinomics",
        gpa: "3.01",       
        startDate: "2012-08-15",
        gradDate: "2014-05-15",
    },
    ]);
    setExpData([
        {
            company: "Monster's Inc",
            jobTitle: "Lead Scarrer",
            startDate: "2017-08-15",
            endDate: "2023-10-01",
            location: "CONFIDENTIAL",
            description: "The Lead Scarer at Monster's Inc. is a prestigious and "+
            "high-impact role within our company, known for generating the energy "+
            "that powers Monstropolis through expert scare tactics. The Lead Scarer"+
            " is responsible for mastering the art of scaring, mentoring junior "+
            "scarers, and ensuring the efficient collection of scream energy. This "+
            "position requires a unique blend of talent, experience, and dedication"+
            " to uphold Monster's Inc.'s reputation as the leading provider of scream energy.",
        },
        {
            company: "Tesla",
            jobTitle: "Principle Swag Engineer",
            startDate: "2014-01-15",
            endDate: "2016-10-15",
            location: "Dallas, TX",
            description: "Supported senior researchers on accessibility"+
            " standards for the open web. Created and usability tested "+
            "wireframes and prototypes. Produced interactive documentation"+
            " for quick onboarding of new researchers.",
        },
    ]);
 
}

export default addData;