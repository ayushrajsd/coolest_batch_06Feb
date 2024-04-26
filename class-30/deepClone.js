function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Array) {
    const copy = []; // [1,[2,3],4,{a:1}]
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  if (obj instanceof Function) {
    return obj.bind({});
  }
  if (obj instanceof Object) {
    const copy = {};
    for (let key in obj) {
      copy[key] = deepClone(obj[key]);
    }
    return copy;
  }
  throw new Error("unable to copu. its type is not supported");
}
