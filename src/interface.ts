interface User{
    firstName: string;
    lastName: string;
    age: number
};
function isOld(user: User){
    if(user.age > 18){
        return true;
    } else {
        return false;
    }
}
function greeet(user: User){
    console.log("Hello: " +user.firstName);
}
isOld({
    firstName: "John",
    lastName: "Doe",
    age: 36
})