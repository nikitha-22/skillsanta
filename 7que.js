//Q7. Create a nested array object called operating System and add below key and values
//Name - Ubuntu , version - 18.4 , license - open source

const os= {
    Name:'Ubuntu',
    version:'18.4',
    license:'open source'
};

const keys=Object.entries(os);

console.log(keys);

keys.forEach(entry => {
    
    console.log("${key}:${value}");

});