import axios from "axios";

import User from "../models/user.model.js";
import Topic from "../models/topic.model.js";
import Comment from "../models/comment.model.js";

class UserController {
  googleSignOn = async (req, res) => {
    const { accessToken } = req.body;
    let googleUser;

    googleUser = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${accessToken}`,
    );
    let user = await User.findOne({ email: googleUser.data.email });

    if (!user) {
      user = new User({
        googleId: googleUser.data.id,
        email: googleUser.data.email,
        firstName: googleUser.data.given_name,
        lastName: googleUser.data.family_name,
        image: googleUser.data.picture,
      });
      await user.save();
    }

    res.json(
      {
        success: true,
        user: user,
        accessToken: user.generateAuthToken(),
      },
      200,
    );
  };

  commentOnTopic = async (req, res) => {
    try {
      const { topicId, comment } = req.body;
      const user = req.user;
      const topic = await Topic.findById(topicId);
      if (!topic) {
        return res.json({ message: "Topic not found" }, 404);
      }

      const newComment = new Comment({
        userId: user._id,
        topicId: topic._id,
        content: comment,
      });

      await newComment.save();
      res.json({ success: true, comment: newComment });
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  };
}

export default new UserController();
