import express from "express";
const router = express.Router();
import ArticleModel from "../../models/articleModel.mjs";

router.get("/", (_req, res) => {
  ArticleModel.find({}, (err, articles) => {
    err ? res.send(err) : res.json(articles);
  });
});

router.get("/:id", (req, res) => {
  const articleId = req.params.id;
  ArticleModel.findById(articleId, (err, article) => {
    err ? res.send(err) : res.json(article);
  });
});

router.post("/", (req, res) => {
  const article = new ArticleModel();
  article.title = req.body.title;
  article.text = req.body.text;
  article.setDate();

  article.save((err) => {
    err ? res.send(err) : res.json({ message: "Article create Success!!" });
  });
});

router.delete("/:id", (req, res) => {
  const articleId = req.params.id;
  ArticleModel.remove({ _id: articleId }).then(() => {
    res.json({ message: "Article delete success!!" });
  });
});

export { router };
