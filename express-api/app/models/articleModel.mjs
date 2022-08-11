import mongoose from "mongoose";
const Schema = mongoose.Schema;
import moment from "moment";

const ArticleSchema = new Schema(
  {
    title: String,
    text: String,
    date: String,
  },
  {
    methods: {
      setDate() {
        this.date = moment().format("YYYY-MM-DD HH:mm:ss");
      },
    },
  }
);

const ArticleModel = mongoose.model("ArticleModel", ArticleSchema);

export default ArticleModel;
