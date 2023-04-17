var name='Mildred';
var age=30;
var hasHobbies =true;
function person(userName, userAge,userhasHobbies)
{
    return 'Name is : '+userName+
    'Age is: '+ userAge+ 
    ' hobbies : '+ userhasHobbies;
}
console.log( person(name,age,hasHobbies));