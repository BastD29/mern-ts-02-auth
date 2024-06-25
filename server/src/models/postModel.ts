import { Schema, model, Document } from "mongoose";
import { IUser } from "./userModel";

interface IPost extends Document {
  title: string;
  description: string;
  author: IUser["_id"];
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: [true, "Please add a title"] },
  description: { type: String, required: [true, "Please add a description"] },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Post = model<IPost>("Post", postSchema);

export default Post;
export { IPost };
