// Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
    	trim: true,
		unique: true,
		required: true
	},

	summary: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},

	link: {
		type: String,
		trim: true,
		// unique: true,
		required: true
	},

	scrapedAt: {
		type: Date,
		// default: Date.now,
		required: true
	},

	comments: [{
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;