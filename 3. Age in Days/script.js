const personData = {
    firstName: "Akash",
    lastName: "Singh",
    Age: 18
}

function ageInDays(perObj, callback) {
    let fullname = `${perObj.firstName} ${perObj.lastName}`
    let ageInDays = parseInt(perObj.age * 365)
    callback(fullname, ageInDays)
}


function logResult(fullname, ageInDays) {
    console.log(`Full Name is ${fullname}`);
    console.log(`Age of ${fullname} in days is ${ageInDays}`);
}


ageInDays(personData, logResult)