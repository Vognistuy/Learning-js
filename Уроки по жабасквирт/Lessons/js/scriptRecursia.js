// Использование Object.values()

let students = {
    js: [{
        name: 'Jonh',
        progress: 100
    },
    {
        name: 'Oleg',
        progress: 60
    }],

    html:{
        basic: [{
            name: 'Peter',
            progress: 20
        },
        {
            name: 'Ann',
            progress: 50
        }],

        pro: [{
            name: 'Sam',
            progress: 70
        }]
    }
};

function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){
        if(Array.isArray(course)){
            students += course.length;
            for(let i = 0; i < course.length; i++){
                total += course[i].progress;
            }
        }
        else{
            for(let subCourse of Object.values(course)){
                students += subCourse.length;
                for(let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}


function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total = 0;

        for(let i = 0; i < data.length; i++){
            total += data[i].progress;
        }
        return [total, data.length]
    } else{
        let total = [0,0];
        for(let subData of Object.values(data)){
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0]; 
            total[1] += subDataArray[1]; 
            
        }
        return total;
    }
}
const res = getTotalProgressByRecursion(students);

console.log(res[0]/res[1]);
