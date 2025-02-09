import User from "../models/user.model.js";
import Topic from "../models/topic.model.js";
import Comment from "../models/comment.model.js";

class UserController {
  googleSignOn = async (req, res) => {
    const { email, firstName, lastName, image } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        firstName,
        lastName,
        image,
      });
      await user.save();
    }

    res.json(
      {
        success: true,
        user: user,
        token: user.generateAuthToken(),
      },
      200,
    );
  };

  commentOnTopic = async (req, res) => {
    try {
      const { topicId, content } = req.body;
      const user = req.user;
      const topic = await Topic.findById(topicId);
      if (!topic) {
        return res.json({ message: "Topic not found" }, 404);
      }

      const newComment = new Comment({
        user: user._id,
        topic: topic._id,
        content,
      });

      await newComment.save();
      res.json({ success: true, comment: newComment });
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  };
}

export default new UserController();
