function newObject(){
    return  Object.create(null);
}
const myNewObject = newObject();
console.log(myNewObject);