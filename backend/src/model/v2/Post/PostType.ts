export interface IPost {
  _id: string;
  title: string;
  message: string;
  images: Array<string>;
  comments: Array<{
    comment: string;
    commentBy: {
      username: string;
      profilepic: string;
      firstName: string;
      lastName: string;
      _id: string;
    };
  }>;
  likes: Array<string>;
  dislikes: Array<string>;
  creator: {
    _id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
