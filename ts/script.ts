interface user {
    name?: string,
    surname: string
}
const obj1 : user = {
    name: 'John',
    surname: 'Smith'
}
obj1.name = 'Pete';
delete obj1.name;

//Task#3
type myCustom = Array<number>;
const arr: myCustom = [1, 2, 3, -1, -2, -3];
function isPositive (a:myCustom) :boolean{
    return  a.every(item => item > 0)
}
