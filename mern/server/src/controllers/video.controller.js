import Video from "../models/video.model";

class VideoController {
  searchVideos = async (req, res) => {
    try {
      const { search } = req.query;
      const videos = await Video.find({
        title: { $regex: search, $options: "i" },
      });
      return res.status(200).json({ success: true, videos });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  };

  getVideo = async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await Video.findById(videoId);
      return res.status(200).json({
        success: true,
        video,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  };

  addVideo = async (req, res) => {
    try {
      const { title, description, url, thumbnail } = req.body;
      const video = new Video({
        title,
        description,
        url,
        thumbnail,
      });
      await video.save();
      return res.status(201).json({ success: true, video });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  };
}

export default new VideoController();
