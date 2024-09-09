const Projetos = [
    {
        id: 1,
        title: "Members Only",
        banner: "/static/images/membersonly.png",
        description: "This Node/Express server-side rendering project, allow only authorized people to interact. The project includes an authentication system and the data is stored in a PostgreSQL database hosted on Railway.",
        technologies: ["/static/images/nodejs.png", "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg", "/static/images/ejs.svg", "/static/images/postgresql.svg"],
        live:"https://members-only-production-9476.up.railway.app/",
        code: "https://github.com/DiegoCoura/members-only",
    },
    {
        id: 2,
        title: "Todo List",
        banner: "/static/images/todo2.png",
        description: "This is not the old same todo list that you see around, developed with vanilla javascript and css, also contains drag and drop feature, which takes this project to another level, allowing the users to change the tasks order.",
        technologies: ["/static/images/html-100.svg", "/static/images/css-100.svg", "/static/images/js-100.svg"],
        live:"https://diegocoura.github.io/todo-list/",
        code:"https://github.com/DiegoCoura/todo-list"
    }, {
        id: 3,
        title: "Personal Portfolio",
        banner: "/static/images/card-portfolio.png",
        description: "This portfolio website was developed to put into practice my front-end knowledge, as well to showcase my projects and skills.",
        technologies: ["/static/images/react-100.svg", "/static/images/bootstrap-100.svg", "/static/images/css-100.svg"],
        live:"",
        code: "https://github.com/DiegoCoura/portfolio",
    }, {
        id: 4,
        title: "Draw on the Wall",
        banner: "/static/images/dow-banner.png",
        description: "A fun project in which you can explore your creativity.",
        technologies: ["/static/images/html-100.svg", "/static/images/css-100.svg", "/static/images/js-100.svg"],
        live: "https://diegocoura.github.io/etch-a-sketch/",
        code: "https://github.com/DiegoCoura/etch-a-sketch"
    }
]

export default Projetos;