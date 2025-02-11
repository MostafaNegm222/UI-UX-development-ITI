enum Roles {
    USER = "USER" , 
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN"
}

interface IUser {
    id : string | number
    name : string
    age? : number
    role : Roles
}

type User = IUser;
 
const users: User[] = [
 {
   id: 1,
   name: "Ahmed",
   role: Roles.SUPER_ADMIN,
 },
 {
   id: "2",
   name: "Mohammed",
   age: 32,
   role: Roles.USER,
 },
 {
   id: 3,
   name: "Ali",
   age: 36,
   role: Roles.ADMIN,
 },
];