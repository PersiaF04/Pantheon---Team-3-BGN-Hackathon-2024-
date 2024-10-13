import Topic from "../models/topic.model.js";
import Comment from "../models/comment.model.js";

class TopicController {
  createTopic = async (req, res) => {
    const { name, description, thumbnail } = req.body;
    const topic = new Topic({
      name,
      description,
      thumbnail,
    });

    await topic.save();
    return res.status(201).json({ success: true, topic });
  };

  searchTopics = async (req, res) => {
    const { keyword } = req.query;
    const topics = await Topic.find({
      name: { $regex: keyword, $options: "i" },
    });
    return res.status(200).json({ success: true, topics });
  };

  getTopic = async (req, res) => {
    const { topicId } = req.params;
    const topic = await Topic.findById(topicId);
    if (!topic) {
      return res
        .status(404)
        .json({ success: false, message: "Topic not found" });
    }
    const comments = await Comment.find({ topicId }).populate("userId");
    return res.status(200).json({ success: true, topic, comments });
  };
}

export default new TopicController();
