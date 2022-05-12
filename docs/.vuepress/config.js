const path = require("path");
const {defaultTheme} = require("@vuepress/theme-default");

module.exports = {
	title: "Afterlife Blog",
	description: "",

	base: "/tech-blog/",

	port: "8100",

	alias: {
		"@src": path.resolve(__dirname, "./public/images"),
	},

	plugins: [
		"@vuepress/nprogress",
		"@vuepress/plugin-prismjs",
		"@vuepress/plugin-container"
	],

	theme: defaultTheme({
		repo: "https://github.com/changho147/tech-blog",

		contributors: false,

		navbar: [
			{text: "Design Patterns", link: "/design-patterns"},
			{text: "JPA", link: "/jpa"},
		],

		sidebar: {
			"/design-patterns": [
				{
					text: "Design Patterns",
					children: [
						{
							text: "Creation Pattern",
							link: "/design-patterns/singleton/",
							children: [
								"/design-patterns/singleton",
								"/design-patterns/factory-method",
								"/design-patterns/abstract-factory",
								"/design-patterns/builder",
								"/design-patterns/prototype"
							]
						},
						{
							text: "Structural Pattern",
							link: "/design-patterns/adapter/",
							children: [
								"/design-patterns/adapter",
								"/design-patterns/bridge",
								"/design-patterns/composite",
								"/design-patterns/decorator",
								"/design-patterns/facade",
								"/design-patterns/flyweight",
								"/design-patterns/proxy"
							]
						},
						{
							text: "Behavioral Pattern",
							link: "/design-patterns/chain-of-responsibility/",
							children: [
								"/design-patterns/chain-of-responsibility",
								"/design-patterns/command",
								"/design-patterns/interpreter",
								"/design-patterns/iterator",
								"/design-patterns/mediator",
								"/design-patterns/memento",
								"/design-patterns/observer",
								"/design-patterns/state",
								"/design-patterns/strategy",
								"/design-patterns/template-method",
								"/design-patterns/template-callback",
								"/design-patterns/visitor"
							]
						}
					]
				}
			],
			"/jpa": [
				{
					text: "JPA(Java Persistence Api)",
					children: []
				}
			]
		}
	})
}