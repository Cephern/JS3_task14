const { o3: obj } = require("./protochain");

const prototypeNames = [];

const prototypeCounter = (obj, arr) => {
  let prototype = Object.getPrototypeOf(obj);

  if (prototype !== null) {
    prototypeNames.push(prototype.name);
    prototypeCounter(prototype, prototypeNames);
  }

  return `Количество ненулевых прототипов: ${prototypeNames.length}.\nПрототипы объекта o3: ${prototypeNames}
  `;
};

console.log(prototypeCounter(obj));

export default prototypeNames;
