import { Schema, model } from "mongoose";
import type { IProfiles } from "./ProfileType";

const profileSchema = new Schema<IProfiles>({
  username: {
    type: String,
    required: true,
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  profilePic: {
    type: String,
  },
  bio: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  followers: [
    {
      followerId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    },
  ],
  followRequests: [
    {
      requestorId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    },
  ],
  following: [
    {
      followingId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Profile = model<IProfiles>("Profile", profileSchema);
export default Profile;
