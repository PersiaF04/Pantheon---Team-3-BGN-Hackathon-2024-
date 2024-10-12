import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    topicId: {
      type: Schema.Types.ObjectId,
      ref: "Topic",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model("Comment", commentSchema);
