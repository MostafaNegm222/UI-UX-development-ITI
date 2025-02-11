"use strict";
var Roles;
(function (Roles) {
    Roles["USER"] = "USER";
    Roles["ADMIN"] = "ADMIN";
    Roles["SUPER_ADMIN"] = "SUPER_ADMIN";
})(Roles || (Roles = {}));
const users = [
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
