import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    topic: {
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
