import { Schema, model } from "mongoose";

const topicSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model("Topic", topicSchema);
