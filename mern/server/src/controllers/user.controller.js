import axios from "axios";

import User from "../models/user.model";
import Topic from "../models/topic.model";
import Comment from "../models/comment.model";

// User mostly managed by google OAuth
class UserController {
  googleSignOn = async (req, res) => {
    const { accessToken } = req.body;

    try {
      const googleUser = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${accessToken}`,
      );
    } catch (error) {
      return res.json({ message: "Invalid token" }, 400);
    }
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
  };
}

export default new UserController();
