import { Schema, model } from "mongoose";
import type { IAccount } from "./AccountType";

const accountSchema = new Schema<IAccount>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profiles: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Account = model<IAccount>("Account", accountSchema);
export default Account;
