 
  import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
  const possibleMentorsForModule = (moduleName) => {
    const subjectName = {
      ahmed: "css",
      ali: "html", // corrected the typo here from "htmal" to "html"
      carmen: "js"
    };
  
    const mentors = Object.keys(subjectName).filter(function (mentor) {
      return subjectName[mentor] === moduleName;
    });
  
    return mentors;
  };
  
console.log(`Possible mentors for HTML:${mentors}`);
  
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

  const findMentorForModule = (moduleName) => {
    const randomSubjectName = {
      ahmed: "css",
      ali: "html",
      carmen: "js",
      salam: "html",
    };
  
    const mentors = Object.keys(randomSubjectName).filter(function (mentor) {
      return randomSubjectName[mentor] === moduleName;
    });
  
    const randomMentor = mentors[Math.floor(Math.random() * mentors.length)];
    return randomMentor;
  };
  
  console.log(`Random mentor for HTML: ${findMentorForModule('html')}`);
  
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));
