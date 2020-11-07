class Person {
  constructor(name, gender, hair, hat, eyes, earrings, nose, moustache, beard, shirt) {
    this.name = name;
    this.gender = gender;
    this.hair = hair;
    this.hat = hat;
    this.eyes = eyes;
    this.earrings = earrings;
    this.nose = nose;
    this.moustache = moustache;
    this.beard = beard;
    this.shirt = shirt;
  }
}

let allPeople = [];

let createNewPerson = (name, gender, hair, hat, eyes, earrings, nose, moustache, beard, shirt) => {
  let newPerson = new Person(name, gender, hair, hat, eyes, earrings, nose, moustache, beard, shirt);
  allPeople.push(newPerson);
}

createNewPerson(
  'Adam', // Name
  'man', // Gender
  'brown', // Hair
  false, // Hat
  'brown', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'blue' // Shirt
);

createNewPerson(
  'Amber', // Name
  'woman', // Gender
  'blond', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'yellow' // Shirt
);

createNewPerson(
  'Bobby', // Name
  'man', // Gender
  'red', // Hair
  false, // Hat
  'green', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'yellow' // Shirt
);

createNewPerson(
  'Chris', // Name
  'man', // Gender
  'brown', // Hair
  false, // Hat
  'green', // Eyes
  false, // Earrings
  'bigger', // Nose
  false, // Moustache
  true, // Beard
  'red' // Shirt
);

createNewPerson(
  'Dave', // Name
  'man', // Gender
  'red', // Hair
  true, // Hat
  'brown', // Eyes
  false, // Earrings
  'bigger', // Nose
  false, // Moustache
  true, // Beard
  'purple' // Shirt
);

createNewPerson(
  'Ellie', // Name
  'woman', // Gender
  'blond', // Hair
  false, // Hat
  'brown', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'blue' // Shirt
);

createNewPerson(
  'Emily', // Name
  'woman', // Gender
  'black', // Hair
  false, // Hat
  'green', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'green' // Shirt
);

createNewPerson(
  'Emma', // Name
  'woman', // Gender
  'red', // Hair
  false, // Hat
  'green', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'purple' // Shirt
);

createNewPerson(
  'Hannah', // Name
  'woman', // Gender
  'black', // Hair
  true, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'green' // Shirt
);

createNewPerson(
  'Henry', // Name
  'man', // Gender
  'brown', // Hair
  true, // Hat
  'green', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'red' // Shirt
);

createNewPerson(
  'Holly', // Name
  'woman', // Gender
  'brown', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'red' // Shirt
);

createNewPerson(
  'Jake', // Name
  'man', // Gender
  'gray', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'bigger', // Nose
  true, // Moustache
  false, // Beard
  'blue' // Shirt
);

createNewPerson(
  'Jess', // Name
  'woman', // Gender
  'red', // Hair
  false, // Hat
  'green', // Eyes
  true, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'red' // Shirt
);

createNewPerson(
  'Joey', // Name
  'man', // Gender
  'black', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'purple' // Shirt
);

createNewPerson(
  'Mary', // Name
  'woman', // Gender
  'gray', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'blue' // Shirt
);

createNewPerson(
  'Matt', // Name
  'man', // Gender
  'black', // Hair
  false, // Hat
  'brown', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  true, // Beard
  'green' // Shirt
);

createNewPerson(
  'Megan', // Name
  'woman', // Gender
  'black', // Hair
  false, // Hat
  'brown', // Eyes
  true, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'purple' // Shirt
);

createNewPerson(
  'Molly', // Name
  'woman', // Gender
  'brown', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'green' // Shirt
);

createNewPerson(
  'Myra', // Name
  'woman', // Gender
  'brown', // Hair
  true, // Hat
  'brown', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'red' // Shirt
);

createNewPerson(
  'Oliver', // Name
  'man', // Gender
  'blond', // Hair
  false, // Hat
  'green', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'purple' // Shirt
);

createNewPerson(
  'Rick', // Name
  'man', // Gender
  'blond', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'blue' // Shirt
);

createNewPerson(
  'Sami', // Name
  'man', // Gender
  'black', // Hair
  false, // Hat
  'brown', // Eyes
  false, // Earrings
  'smaller', // Nose
  true, // Moustache
  false, // Beard
  'purple' // Shirt
);

createNewPerson(
  'Sarah', // Name
  'woman', // Gender
  'red', // Hair
  false, // Hat
  'brown', // Eyes
  false, // Earrings
  'smaller', // Nose
  false, // Moustache
  false, // Beard
  'red' // Shirt
);

createNewPerson(
  'Thomas', // Name
  'man', // Gender
  'black', // Hair
  false, // Hat
  'blue', // Eyes
  false, // Earrings
  'bigger', // Nose
  false, // Moustache
  false, // Beard
  'yellow' // Shirt
);

console.log(allPeople); // Test