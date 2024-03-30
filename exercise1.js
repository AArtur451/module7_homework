/*
function printMyProperty(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`)
        }
    }
}

const myObj = {
    name: 'Ivan',
    age: 45
}

printMyProperty(myObj);
*/

function printMyProperties(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const myObj = {
    name: 'Ivan',
    age: 45
};

printMyProperties(myObj);












