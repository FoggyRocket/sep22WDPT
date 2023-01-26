
// fetch("https://rickandmortyapi.com/api/character")
// .then(response => response.json())
// .then(data => console.log(data));

axios.get("https://rickandmortyapi.com/api/character")
.then(res=>{
    console.log("que es el res",res)
}).catch(error=>console.log("error:",error))

// fetch("https://rickandmortyapi.com/api/character", {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//get
//trabaja en base a promesas eso quiere decir (then y catch)

//axios.verb("direccion")

//axios.post("direccion",{..body})
axios.post("https://tododemo.onrender.com/api/auth/login",{ email:"nova182@gmail.com",password:"perro182A" })
.then(res=>{
    console.log("login res:",res)
})
.catch(error=>console.log("el error login",error))