const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProperty = (object, key, value) => {
   return object[key] = value;
};

addProperty(lesson2, 'turno', 'manhã');
console.log(lesson2);

const showKeys = (object) => {
  return Object.keys(object);
};

console.log(showKeys(lesson1));

const objectSize = (object) => {
  return showKeys(object).length;
};

console.log(objectSize(lesson3));

const showValues = (object) => {
  return Object.values(object);
};

// const allLessons = {
//   lesson1: Object.assign({}, lesson1),
//   lesson2: Object.assign({}, lesson2),
//   lesson3: Object.assign({}, lesson3)
// };
// const allLessons = {};
// allLessons['lesson1'] = Object.assign({}, lesson1);
// allLessons['lesson2'] = Object.assign({}, lesson2);
// allLessons['lesson3'] = Object.assign({}, lesson3);
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const allStudents = (object) => {
  return (object.lesson1['numeroEstudantes'] + object.lesson2['numeroEstudantes'] + object.lesson3['numeroEstudantes']);
};

console.log(allStudents(allLessons));

const getSpecificKey = (object, index) => {
  return showValues(object)[index];
};

console.log(getSpecificKey(lesson1, 0));

const verifyPair = (object, key, value) => {
  if (object[key] === value) {
    return true;
  } else {
    return false;
  }
};

console.log(verifyPair(lesson1, 'materia', 'Matemática'))
