function checkResult(object, propertyName){
    return object.hasOwnProperty(propertyName);
}
const exampleObject = {
    name: "Ivan",
    age: 36,
    Job: "developer"
}

const checkPropertyName = "age";
const result = checkResult(exampleObject,checkPropertyName);
console.log(result); 








