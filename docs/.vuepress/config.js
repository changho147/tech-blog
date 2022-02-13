module.exports = {
    title: "Afterlife Blog",
    description: "",

    base: "/blog/",

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