import Topic from "../models/topic.model";
import Comment from "../models/comment.model";

class TopicController {
  createTopic = async (req, res) => {
    const { name, description } = req.body;
    const topic = new Topic({
      name,
      description,
    });

    await topic.save();
    return res.status(201).json({ success: true, topic });
  };

  searchTopics = async (req, res) => {
    const { search } = req.query;
    const topics = await Topic.find({
      name: { $regex: search, $options: "i" },
    });
    return res.status(200).json({ success: true, topics });
  };

  getTopicComments = async (req, res) => {
    const { topicId } = req.params;
    const comments = await Comment.find({ topicId }).populate("userId");
    return res.status(200).json({ success: true, comments });
  };
}

export default new TopicController();
