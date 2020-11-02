class Person {
  constructor(name, gender, head, hairColor, hair, hat, eyes, eyebrows, glasses, ears, nose, mouth, moustache, beard, chin) {
    this.name = name;
    this.gender = gender;
    this.head = head;
    this.hairColor = hairColor;
    this.hair = hair;
    this.hat = hat;
    this.eyes = eyes;
    this.eyebrows = eyebrows;
    this.glasses = glasses;
    this.ears = ears;
    this.nose = nose;
    this.mouth = mouth;
    this.moustache = moustache;
    this.beard = beard;
    this.chin = chin;
  }
}

let allPeople = [];

let createNewPerson = (name, gender, head, hairColor, hair, hat, eyes, eyebrows, glasses, ears, nose, mouth, moustache, beard, chin) => {
  let newPerson = new Person(name, gender, head, hairColor, hair, hat, eyes, eyebrows, glasses, ears, nose, mouth, moustache, beard, chin);
  allPeople.push(newPerson);
}

let male = ['man', 'boy', 'male'];
let female = ['woman', 'girl', 'female'];

let hairColorBlack = ['black', 'dark brown'];
let hairColorRed = ['red', 'orange'];
let hairColorBlonde = ['blonde', 'yellow'];
let hairColorBrown = ['brown', 'light brown'];

createNewPerson(
  'Alex', // Name
  male, // Gender
  ['big', 'wide', 'square', 'boxy'], // Head
  hairColorBlack, // Hair color
  ['curly', 'short'], // Hair
  [], // Hat
  ['brown'], // Eyes
  ['normal', 'average', 'thin'], // Eyebrows
  [], // Glasses
  ['big'], // Ears
  ['normal', 'average'], // Nose
  ['big', 'wide', 'thick', 'pink'], // Mouth
  ['normal', 'average', 'thin'], // Moustache
  [], // Beard
  ['big', 'wide', 'round'] // Chin
);

createNewPerson(
  'Alfred', // Name
  male, // Gender
  ['thin', 'round', 'oval'], // Head
  hairColorRed, // Hair color
  ['straight', 'long'], // Hair
  [], // Hat
  ['blue'], // Eyes
  ['normal', 'average', 'thin'], // Eyebrows
  [], // Glasses
  ['big'], // Ears
  ['normal', 'average'], // Nose
  ['small'], // Mouth
  ['normal', 'average', 'thin', 'long'], // Moustache
  [], // Beard
  ['big', 'round'] // Chin
);

createNewPerson(
  'Anita', // Name
  female, // Gender
  ['small', 'round', 'circular'], // Head
  hairColorBlonde, // Hair color
  ['straight', 'long', 'pigtails'], // Hair
  [], // Hat
  ['blue'], // Eyes
  ['normal', 'average', 'thin', 'small'], // Eyebrows
  [], // Glasses
  ['small'], // Ears
  ['small'], // Nose
  ['small', 'pink'], // Mouth
  [], // Moustache
  [], // Beard
  ['small', 'round'] // Chin
);

createNewPerson(
  'Anne', // Name
  female, // Gender
  ['big', 'wide', 'round', 'circular'], // Head
  hairColorBlack, // Hair color
  ['curly', 'short'], // Hair
  [], // Hat
  ['brown'], // Eyes
  ['normal', 'average', 'thin'], // Eyebrows
  [], // Glasses
  ['small', 'earrings'], // Ears
  ['big'], // Nose
  ['small', 'red'], // Mouth
  [], // Moustache
  [], // Beard
  ['big', 'round'] // Chin
);

createNewPerson(
  'Bernard', // Name
  male, // Gender
  ['square', 'boxy'], // Head
  hairColorBrown, // Hair color
  ['straight', 'short'], // Hair
  ['gray'], // Hat
  ['brown'], // Eyes
  ['normal', 'average', 'thin'], // Eyebrows
  [], // Glasses
  ['big'], // Ears
  ['big'], // Nose
  ['small'], // Mouth
  [], // Moustache
  [], // Beard
  ['big', 'dimple', 'butt'] // Chin
);

console.log(allPeople);