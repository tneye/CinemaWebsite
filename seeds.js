var mongoose    = require('mongoose');
var Movies      = require('./models/movies.js');
var Cinemas     = require('./models/cinema.js');
var Liked       = require('./models/liked.js');
var User        = require('./models/user.js');

var data = [
    {
        name: "The Conjuring 2 ",
        image: "/images/movies/conju/pic.jpg",
        banner: "/images/movies/conju/banner.jpg",
        trailer: "https://www.youtube.com/embed/4X2YanoU0YY",
        desc: "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
        genre: "Horror,thriller",
        director: "James Wan",
        date: "June 3, 2021",
        runtime: "135",
        score: 6.2,
        type: "nowshow",
    },
    {
        name: "Those Who Wish Me Dead",
        image: "/images/movies/those/pic.jpg",
        banner: "/images/movies/those/banner.jpg",
        trailer: "https://www.youtube.com/embed/ZpzQ1eyomJ8",
        desc: "A teenage murder witness finds himself pursued by twin assassins in the Montana wilderness with a survival expert tasked with protecting him and a forest fire threatening to consume them all.",
        genre: "Action/Thriller",
        director: "Ilya Naishuller",
        date: "April 13, 2021",
        runtime: "92",
        score: 7.4,
        type: "nowshow",
    },
    {
        name: "Godzilla vs. Kong",
        image: "/images/movies/god-kong/pic.jpg",
        banner: "/images/movies/god-kong/banner.jpg",
        trailer: "https://www.youtube.com/embed/A6E_ijAMnPI",
        desc: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
        genre: "Sci-fi/Drama",
        director: "Adam Wingard",
        date: "March 25, 2021",
        runtime: "113",
        score: 6.5,
        type: "nowshow",
    },
    {
        name: "Wrath of Man",
        image: "/images/movies/wrath/pic.jpg",
        banner: "/images/movies/wrath/banner.jpg",
        trailer: "https://www.youtube.com/embed/qNWAjUqjjIM",
        desc: "The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.",
        genre: "Action",
        director: "Takashi Yamazaki, Ryuichi Yagi",
        date: "May 7, 2021",
        runtime: "149",
        score: 7.5,
        type: "nowshow",
    },
    {
        name: "Judas and the Black Messiah",
        image: "/images/movies/judas/poster.jfif",
        banner: "/images/movies/judas/banner.jpg",
        trailer: "https://www.youtube-nocookie.com/embed/sSjtGqRXQ9Y",
        desc: "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.",
        genre: "Drama",
        director: "Shaka King",
        date: "April 22, 2021",
        runtime: "126",
        score: 7.5,
        type: "nowshow",
    },
    {
        name: "Promising Young Woman",
        image: "/images/movies/promisa/pic.jpg",
        banner: "/images/movies/promisa/banner.jpg",
        trailer: "https://www.youtube.com/embed/l-yi5eS64x8",
        desc: "A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.",
        genre: "Thriller/Comedy",
        director: "Emerald Fennell",
        date: "April 22, 2021",
        runtime: "114",
        score: 7.5,
        type: "nowshow",
    },
    {
        name: "The Lord of the Rings",
        image: "/images/movies/lord/pic.jpg",
        banner: "/images/movies/lord/banner.jpg",
        trailer: "https://www.youtube.com/embed/j2Cx5riEYbc",
        desc: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        genre: " Action/Drama",
        director: "Peter Jackson",
        date: "June 10, 2021",
        runtime: "180",
        score: 7.6,
        type: "nowshow",

    },



    {
        name: "Quiet Place Part II, A",
        image: "/images/movies/quiet/pig.jpg",
        banner: "/images/movies/quiet/banner.jpg",
        trailer: "https://www.youtube.com/embed/E9DOgOGmlPg",
        desc: "Following the deadly events at home, the Abbott family (Emily Blunt, Millicent Simmonds, Noah Jupe) must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
        genre: " Thriller",
        director: "John Krasinski",
        date: "June  17, 2021",
        runtime: "100",
        score: 0,
        type: "coming",
    },
    {
        name: "Cruella",
        image: "/images/movies/cruella/pic.jpg",
        banner: "/images/movies/cruella/banner.jpg",
        trailer: "https://www.youtube.com/embed/w5UhXremEes",
        desc: "A live-action prequel feature film following a young Cruella de Vil.",
        genre: "Comedy",
        director: "Craig Gillespie",
        date: "June 24, 2021",
        runtime: "0",
        score: 0,
        type: "coming",
    },
    {
        name: "Fast & Furious 9",
        image: "/images/movies/fast/pic.jpg",
        banner: "/images/movies/fast/bannner.jpg",
        trailer: "https://www.youtube.com/embed/LF4M_RplsxY&t=1s",
        desc: " Vin Diesel's Dom Toretto is leading a quiet life off the grid with Letty and his son, little Brian, but they know that danger always lurks just over their peaceful horizon. This time, that threat will force Dom to confront the sins of his past if he's going to save those he loves most. His crew joins together to stop a world-shattering plot led by the most skilled assassin and high-performance driver they've ever encountered: a man who also happens to be Dom's forsaken brother, Jakob (John Cena)",
        genre: "Action",
        director: "Justin Lin",
        date: "June 30, 2021",
        runtime: "0",
        score: 0,
        type: "coming",
    },
    {
        name: "United States VS Billie Holiday, The",
        image: "/images/movies/billie/pic.jpg",
        banner: "/images/movies/billie/banner.jpg",
        trailer: "https://www.youtube.com/embed/76qRzjRdWs8&t=1s",
        desc: "Follows Holiday during her career as she is targeted by the Federal Department of Narcotics with an undercover sting operation led by black Federal Agent Jimmy Fletcher, with whom she had a tumultuous affair.",
        genre: "Drama",
        director: "Lee Daniels",
        date: "June 24, 2021",
        runtime: "130",
        score: 0,
        type: "coming",
    },
]

var CinemaData = [
    {
        name: "Emprive' Cineclub Emporium Sukhumvit",
        image: "/images/cinema/emprive/unnamed.jpg",
        logo: "/images/cinema/emprive/download.png",
        slogan: "สุนทรียะบันเทิงเหนือระดับ กับ CINECLUB แห่งแรกในเมืองไทย  ที่สุดโรงภาพยนตร์หรูหราระดับเวิลด์คลาส โดดเด่นด้วยดีไซน์ และความสะดวกสบายสุด Exclusive พร้อมบริการระดับ 6 ดาว ",
        mapadd: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8138126695862!2d100.56684071534698!3d13.72971950150268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f022976dad3%3A0x7a170736824af54b!2sEMPRIVE%20CINECLUB!5e0!3m2!1sen!2sth!4v1623396440481!5m2!1sen!2sth",
        seat: [ [0, 0, 0 ,0] , [0, 0, 0, 0] , [0, 0, 0, 0] ],
        time: [11,14,17,20],
    },
    {
        name: "SF WORLD CINEMA Central World",
        image: "/images/cinema/cenworld/unnamed.png",
        logo: "/images/cinema/cenworld/sf-cinema.jpg",
        mapadd: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5412722952547!2d100.53581131483038!3d13.7461999903511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ2LjMiTiAxMDDCsDMyJzE2LjgiRQ!5e0!3m2!1sen!2sth!4v1623400829117!5m2!1sen!2sth",
        slogan: "ล้ำโลกภาพยนตร์ กับโรงภาพยนตร์  Flagship ด้วยจำนวนโรงและความพิเศษหลากหลาย รองรับทุกไลฟ์สไตล์บันเทิง สำหรับคนรุ่นใหม่ที่ชอบความทันสมัยไม่ซ้ำใคร",
        seat: [ [0, 0, 0 ,0] , [0, 0, 0, 0] , [0, 0, 0, 0] ],
        time: [10,13,16,19,22],
    },
    {
        name: "Quartier CineArt",
        image: "/images/cinema/quartire/t.jpg",
        logo: "/images/cinema/quartire/qlogo.png",
        mapadd: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.158758640744!2d100.569545!3d13.731179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzUyLjIiTiAxMDDCsDM0JzEwLjQiRQ!5e0!3m2!1sen!2sus!4v1623405551981!5m2!1sen!2sus",
        slogan: "ประสบการณ์บันเทิงใหม่ ของโรงภาพยนตร์แห่งอนาคต ครั้งแรกในเมืองไทย ที่ เอ็มควอเทียร์",
        seat: [ [0, 0, 0 ,0] , [0, 0, 0, 0] , [0, 0, 0, 0] ],
        time: [10,13,16,19,22],
    },
    {
        name: "Paragon Cineplex",
        image: "/images/cinema/paragon/huay.jpg",
        logo: "/images/cinema/paragon/paragon.png",
        mapadd: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.214132203742!2d100.535349!3d13.745459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQzLjciTiAxMDDCsDMyJzA3LjMiRQ!5e0!3m2!1sen!2sus!4v1623405891980!5m2!1sen!2sus",
        slogan: "The Best Cinema in Thailand, The Best cinema in Bangkok .",
        seat: [ [0, 0, 0 ,0] , [0, 0, 0, 0] , [0, 0, 0, 0]],
        time: [10,13,16,19,22],
    },

    
   
]



function seedDB(){
    Movies.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Remove Movies Complete");
            data.forEach(function(seed){
                Movies.create(seed, function(err, movie){
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Movies data added');
                    }
                });
            });
        }
    });
    Cinemas.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Remove Cinemas Complete");
            CinemaData.forEach(function(seed){
                Cinemas.create(seed, function(err, cinema){
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Cinemas data added');
                    }
                });
            });
        }
    });
    Liked.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            User.updateMany({likes: []}, function(err){
                if(err){
                    console.log(err);
                } else {
                    console.log("Remove Liked Complete");
                }
            });
        }
    });
}

module.exports = seedDB;