const path = require("path");

module.exports = {
    title: "Afterlife Blog",
    description: "",

    base: "/tech-blog/",

    alias: {
        "@src": path.resolve(__dirname, "./public/images"),
    },

    search: true,

    themeConfig: {
        // navbar: true,
        navbar: [
            {text: "Design Patterns", link: "/design-patterns"}
        ],

        sidebar: [
            {
                text: "Design Patterns",
                link: "/design-patterns/",
                children: [
                    "/design-patterns/singleton"
                ]
            }
        ]
    }
}