import Article from "../models/article.model";

class ArticleController {
  createArticle = async (req, res) => {
    try {
      const { title, url, description, thumbnail } = req.body;
      const article = new Article({
        title,
        url,
        description,
        thumbnail,
      });
      await article.save();
      return res.status(201).json({ success: true, article });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  };

  searchArticles = async (req, res) => {
    try {
      const { keyword } = req.query;
      const articles = await Article.find({
        title: { $regex: keyword, $options: "i" },
      });
      return res.status(200).json({ success: true, articles });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  };

  getArticle = async (req, res) => {
    try {
      const { id } = req.params;
      const article = await Article.findById(id);
      if (!article) {
        return res
          .status(404)
          .json({ success: false, message: "Article not found" });
      }
      return res.status(200).json({ success: true, article });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  };
}

export default new ArticleController();
