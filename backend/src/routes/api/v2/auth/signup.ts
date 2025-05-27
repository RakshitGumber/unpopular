import { type Request, type Response } from "express";

export default async (
  req: Request,
  res: Response
): Promise<Response<IResponse | IError>> => {
  try {
    const { email, password } = req.body;

    const response: IResponse = {
      success: true,
      message: "Signup successfully completed",
      data: {},
    };
    return res.status(201).json(response);
  } catch (error) {
    const errorResponse: IError = {
      success: false,
      message: "Error occured in signup route",
    };
    return res.status(500).json(errorResponse);
  }
};
