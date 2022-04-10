const path = require("path");

module.exports = {
    title: "Afterlife Blog",
    description: "",

    base: "/tech-blog/",

	port: "8100",

    alias: {
        "@src": path.resolve(__dirname, "./public/images"),
    },

    themeConfig: {
		repo: "https://github.com/changho147/tech-blog",

        navbar: [
            {text: "Design Patterns", link: "/design-patterns"}
        ],

        sidebar: [
            {
                text: "Design Patterns",
                link: "/design-patterns/",
                children: [
                    "/design-patterns/singleton",
                    "/design-patterns/factory-method",
                    "/design-patterns/abstract-factory",
                    "/design-patterns/builder",
                    "/design-patterns/prototype",
                    "/design-patterns/adapter",
                    "/design-patterns/bridge",
                    "/design-patterns/composite",
                    "/design-patterns/decorator",
                    "/design-patterns/facade",
                    "/design-patterns/flyweight",
                    "/design-patterns/proxy",
                    "/design-patterns/chain-of-responsibility",
                    "/design-patterns/command",
                    "/design-patterns/interpreter",
                    "/design-patterns/iterator",
                    "/design-patterns/mediator",
                    "/design-patterns/memento",
                ]
            }
        ],

	    plugins: [
		    "@vuepress/nprogress",
		    "@vuepress/plugin-prismjs",
		    "@vuepress/plugin-container"
	    ]
    }
}