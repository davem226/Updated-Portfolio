// --------------------------------------------------------------------------------
// This file contains each section of the webpage as an object with the contents of 
//  each section as the properties.
// --------------------------------------------------------------------------------

// Create section objects
var sections = {

    aboutMe: {
        title: "About Me",

        nav: {
            imageURL: "./assets/content/images/nav/about-me.jpg",
        },
        main: {
            imageURL: "./assets/content/images/main/about-me.jpg",
            content: ["Hi, I'm Dave and I'm an aspiring web developer. My path to this point has been perhaps a bit unusual. In college, I realized that I love nature -- birds especially -- and majored in Ecology and Evolutionary Biology at the University of Michigan. After earning my BS, I took the next step toward becoming a professor and earned an MS from Auburn University, where I studied the evolution of bird genomes. As much as nature fascinates me, academia irritates me, and through a lengthy and difficult process I decided I'm better off elsewhere. However, not a total loss, my experience in academia provided me a great deal of practice analyzing complex problems and -- fortuitously -- coding.",
                "After researching many new career options, I decided the satisfaction I got from coding -- along with my general affinity for abstract thinking, problem solving, and creativity -- pointed me toward the world of web development. To this end, I have recently begun a six-month 'coding bootcamp' at Case Western Reserve University in Cleveland, OH. There, I aim to build my web development skills to where I can compete for entry-level developer jobs upon completion of the program.",
                "Outside of career aspirations, I love to bird (basically birdwatching, but a lot more fun), hike, play and watch a myriad of sports -- especially golf, lift weights, think about how coding and nature can be combined, and learn about the world in any way I can. Please take a look at my projects and feel free to contact me for any reason. Thanks!"]
        }
    },

    projects: {
        title: "Projects",

        nav: {
            imageURL: "./assets/content/images/nav/projects.png",
        },
        main: {
            imageURLs: ["./assets/content/images/main/projects/meet-me.png",
                "./assets/content/images/main/projects/rupee-game.png",
                "./assets/content/images/main/projects/rps-game.png"],

            content: ["Meet Me in the Middle", "Rupee Collector Game", "Rock, Paper, Scissors"]
        }
    },

    contact: {
        title: "Contact",

        nav: {
            imageURL: "./assets/content/images/nav/contact.jpg",
        },
        main: {
            imageURLs: ["./assets/content/images/main/contact/linkedin.png",
                "./assets/content/images/main/contact/github.png",
                "./assets/content/images/main/contact/email.jpg"],

            content: ["David W Morris", "davem226", "davem226@yahoo.com"]
        }
    },
}


