import { sendVerificationEmail } from "../../../lib/resend/sendVerificationEmail";
import { Account } from "../../../model/v2/Account";
import { hashedPassword } from "../../../utils/hashedPassword";

interface ISignup {
  email: string;
  password: string;
}

export default async function signupController(data: ISignup) {
  try {
    const { email, password } = data;

    const existingAccount = await Account.findOne({ email });

    if (existingAccount) {
      if (existingAccount.isVerified) {
        return {
          success: false,
          message: "Account already exists",
        };
      }

      await Account.deleteOne({ _id: existingAccount._id });
    }

    const hashed = await hashedPassword(password);

    const account = await Account.create({
      email,
      password: hashed,
    });

    await account.save();

    await sendVerificationEmail(email);

    if (!account) {
      return {
        success: false,
        message: "Failed to create account",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to create account",
    };
  }
}
