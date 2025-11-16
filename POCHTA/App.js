const objectOfApartaments = {
    37: {
        apart: ['37/1-10', '37/1-27', '37/1-27', '37/1-27', '37/1-104', '37/2-51', '37/2-53', '37/2-96'],
        count: 8
    },

    103: { 
        apart: ['103-7', '103-38', '103-38', '103-116', '103-118', '103-124'],
        count: 6
    }
}

 

function getObjectPension(arrayOfPension){
    const newObject = {
        houseAddress: arrayOfPension[0],
        pension: arrayOfPension[1],
        GIRC: arrayOfPension.slice(2),
        allPayments: arrayOfPension.slice(1)
    };

    const arrayOfGIRC = newObject.GIRC;
    const arrayOfAllPayments = newObject.allPayments;

    let q = 0;
    arrayOfGIRC.forEach(el => {
        if (el !== 0) q += 1
    })
    
    newObject.countGIRC = q;
    newObject.summOfGIRC = sumOfArray(arrayOfGIRC);
    newObject.summOfAllPayments = sumOfArray(arrayOfAllPayments);

    return newObject
}



function createAllObjectsPension(arrayOfArrayPensions){
    const arrayOfObjectPensions = [];

    arrayOfArrayPensions.forEach(pension => {
        const newObject = getObjectPension(pension);
        arrayOfObjectPensions.push(newObject);
    })

    return arrayOfObjectPensions
}






function sumOfArray(array){
    let sumResult = 0;

    array.forEach(element => sumResult += element);

    return +sumResult.toFixed(2);
}




function totalSums(arrayOfObjectPensions){
    const arrayOfPensions = [];
    const arrayOfGIRC = [];
    const arrayOfAllPayments = [];
    let lenghtGIRC = 0;

    arrayOfObjectPensions.forEach(object => {
        const pension = object.pension;
        const summOfGIRC = object.summOfGIRC;
        const summOfAllPayments = object.summOfAllPayments;
        const lenghtOfGIRC = object.countGIRC;
        

        arrayOfPensions.push(pension);
        arrayOfGIRC.push(summOfGIRC);
        arrayOfAllPayments.push(summOfAllPayments);
        lenghtGIRC += lenghtOfGIRC;
    })

    const totalPension = sumOfArray(arrayOfPensions);
    const totalGIRC = sumOfArray(arrayOfGIRC);
    const totalAllPayments = sumOfArray(arrayOfAllPayments);

    return [totalPension, totalGIRC, totalAllPayments, lenghtGIRC];

}
