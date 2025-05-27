import { type ObjectId } from "mongoose";
import { type IAccount } from "../Account/AccountType";

export interface IProfiles {
  _id: ObjectId;
  account: IAccount;
  username: string;
  profilePic: string;
  dateOfBirth: Date | string;
  bio: string;
  followers: Array<{
    _id: string;
    followerId: string;
  }>;
  followRequests: Array<{
    _id: string;
    requestorId: string;
  }>;
  following: Array<{
    _id: string;
    followingId: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}
