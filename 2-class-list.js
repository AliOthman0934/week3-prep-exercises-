import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  const getPeopleOfClass = (className) => {
    const peopleOfClass = [
    {name:"ali",role:"student",class:"html"},
     {name:"ahmed",role:"student",class:"html"},
      {name:"carmen",role:"student",class:"css"},
       {name:"salam",role:"mentor",class:"html"},
    ]
    
  const classOf = peopleOfClass.filter(function(peopleClass){
  return peopleClass.class === className ;
  })
  
  
  return classOf ;
  
  };
  
  console.log(getPeopleOfClass("html"))
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  
    const activeClasses = {
      class45: [{ name: "ali", role: "student" }, { name: "ahsan", role: "mentor" }, { availability: true }],
      class46: [{ name: "ali", role: "student" }, { name: "ahsan", role: "mentor" }, { availability: false }],
    };
  
    const classNames = Object.keys(activeClasses);
  
    classNames.forEach(function (className) {
      const classInfo = activeClasses[className];
  
      classInfo.forEach(function (ele) {
        if (ele.availability === true) {
          console.log(`Class ${className} is active, ${ele.name} is a ${ele.role}`);
        } else {
          console.log(`Class ${className} is not active, ${ele.name} is a ${ele.role}`);
        }
      });
    });
  };
  
  getActiveClasses();
  

// You can uncomment out this line to try your function
// console.log(getActiveClasses());
