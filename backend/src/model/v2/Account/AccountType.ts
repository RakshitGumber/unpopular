import { type IProfiles } from "../Profile/ProfileType";
import { type ObjectId } from "mongoose";

export interface IAccount {
  _id: string;
  email: string;
  isVerified: boolean;
  password: string;
  profiles: ObjectId[] | IProfiles[];
  createdAt: Date;
  updatedAt: Date;
}
