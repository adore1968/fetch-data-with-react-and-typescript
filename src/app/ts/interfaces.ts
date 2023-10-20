import { ChangeEvent } from "react";

export interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

export type IsLoading = boolean;

export type Posts = Post[];

export interface AppContextType {
  isLoading: IsLoading;
  post: Post;
  posts: Posts;
  currentId: number | undefined;
  handlePostChange: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  createPost: () => Promise<void>;
  getPost: (id: number | undefined) => void;
  updatePost: () => Promise<void>;
  deletePost: (id: number | undefined) => void;
}
