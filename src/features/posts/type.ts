export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export type Tag = {
  slug: string;
  name: string;
  url: string;
};

export type Comment = {
  id: number;
  body: string;
  postId: string;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
};
