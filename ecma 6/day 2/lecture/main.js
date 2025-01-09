// let getIds = new Promise(function (res,rej) {

//     setTimeout(function() {
//         let ids = [1,2,3]
//         if (ids) {
//             res(ids)
//         } else {
//             rej("no ids found")
//         }
//     },3000)

// })

// function getUsers (id) {
// let getUs = new Promise (function (res,rej) {

//     setTimeout(function () {
//         let user = {
//             id : id ,
//             cartId : 2
//         }
    
//         if (user) {
//             res(user)
//         } else {
//             rej("there is no users")
//         }      
//     },2000)
// })

// return getUs

// }

// function getCart (cartId) {
//     let cart = new Promise (function (res,rej) {
//         setTimeout(function () {
//             let cart = {
//                 id : cartId ,
//                 data : ["sssss"]
//             }

//             if(cart) {
//                 res(cart)
//             } else {
//                 rej("there is no cart")
//             }
//         },3000)
//     })

//     return cart
// }


// getIds.then(function (ids) {

//     console.log(ids);
//     return getUsers(ids[0])

// }).then(function(user){

//     console.log(user);
//     return getCart(user.cartId)
    
// }).then(function (cart) {

//     console.log(cart);
    
// }).catch(function (err) {

//     console.log(err);

// })


// ----------------------------------------------------------------

let getIds = new Promise(function (res,rej) {

    setTimeout(function() {
        let ids = [1,2,3]
        if (ids) {
            res(ids)
        } else {
            rej("no ids found")
        }
        console.log("first");
    },2000)

})

function getUsers (id) {
let getUs = new Promise (function (res,rej) {

    setTimeout(function () {
        let user = {
            id : id ,
            cartId : 2
        }
    
        if (user) {
            res(user)
        } else {
            rej("there is no users")
        }      
        console.log("second");
        
    },992   )
})

return getUs

}

function getCart (cartId) {
    let cart = new Promise (function (res,rej) {
        setTimeout(function () {
            let cart = {
                id : cartId ,
                data : ["sssss"]
            }

            if(cart) {
                res(cart)
            } else {
                rej("there is no cart")
            }
        },3000)
    })

    return cart
}


async function test () {
    let ids = await getIds ;
    console.log(ids);
    let users = await getUsers(ids[0])
    console.log(users);
    let cart = await getCart(users.cartId)
    console.log(cart);
}                                        // async always return promise return 5 ---> return promise

setTimeout(function () {
    console.log("hello");
    
},3000)
// promise is always excute first because micro and macro in the same time with async functions

test()