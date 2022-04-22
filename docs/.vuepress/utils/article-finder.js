const path = require("path");
const directoryTree = require("directory-tree");

const articleFinder = {
	findArticles: function (paths) {
		console.log(directoryTree(path.join(__dirname)));
	}

}

return module.exports;
