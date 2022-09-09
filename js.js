// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    //console.log(contacts[i].firstName);
    if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
      console.log(contacts[i].prop);
      return contacts[i].prop;
    }
    
  }
  
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//contacts[i].firstName
//contacts[i].hasOwnProperty(firstName);
contacts[0].firstName === name; 
console.log(contacts[0].hasOwnProperty('number')) //prop

console.log(contacts[3].firstName === 'Kristian' );
console.log('test');