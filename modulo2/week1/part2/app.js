//importar
const express = require("express");
const hbs = require("hbs");
//ejecuar express
const app = express();
//config para hbs y otras cosas de express
app.use(express.static("public"));
//AHORA!!! setup de hbs
app.set("view engine","hbs") // {{perro}}
//res.sendFile(__dirname +"/views/perro.html") ---> res.render("perro")
app.set("views", __dirname + "/views")
//config partials
//?¿
hbs.registerPartials(__dirname + "/views/partials")

/**
 * vamos a recordar
 * .send() => para enviar solo texto (X)
 * .sendFile() => para mandar documetos (X)
 * 
 * .render()** este nos facilita el usuo de los templetes de hbs
 * .json()** es para mandar un JSON a la vista {"key":"value"} module 3
 */


//rutas
app.get("/", (req, res, next) => {
    //el metod .render("nombreArchivo",{key:value})
    //res.render("nombre",{...})
    const student = {
        name:"Pedro",
        age:31,
        email:"pedroamericacampeon@hotmail.com"
    }
    //res.render("index",student) <--- ? si
    //res.render("index",{...student}) {name:..,age:..emai:...} <----- ? si
    //---
    //res.render("index",{student})//{student} ---> { student:{name:..,age:..emai:...} } <------ ? si
    //res.render("index",{student:student}) <--- ? si
    res.render("index",{...student})
});

app.get("/perro",(req,res,next)=>{
    
    const dog ={
        name:"Nova",
        age:2,
        email:"nova.torres@email.com"
    }
    res.render("index",dog)

})


app.get("/about",(req,res,next)=>{
    const news = {
        title:"Hoy gran bailazo de feria!!",
        description:"Ven come y juega!!"
    }
    res.render("about", { news })
})


app.get("/player", (req,res,next)=>{
    const player = {
        'name': 'Rusell',
        'lastName': 'Westbrook',
        'team': 'OKC',
        'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
    }

    res.render("onePlayer",{ player })
})

app.get("/allPlayers",(req,res,next)=>{
    const players = [
        {
            'name': 'Rusell',
            'lastName': 'Westbrook',
            'team': 'OKC',
            'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
        },
        {
            'name': 'Kevin',
            'lastName': 'Durant',
            'team': 'GSW',
            'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
        },
        {
            'name': 'Lebron',
            'lastName': 'James',
            'team': 'CLE',
            'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
        },
        {
            'name': 'Emanuel',
            'lastName': 'Ginóbilli',
            'team': 'SAS',
            'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
        },
        {
            'name': 'Kyrie',
            'lastName': 'Irving',
            'team': 'BOS',
            'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf'
        },
        {
            'name': 'Kobe',
            'lastName': 'Bryant',
            'team': 'LAK',
            'photo': 'https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg'
        },
    ];  

    res.render("all",{ players })
})

//en la ultima linea?
app.listen(3000, () => {
  console.log("Estoy corriendo para part2 en el 3000");
});
