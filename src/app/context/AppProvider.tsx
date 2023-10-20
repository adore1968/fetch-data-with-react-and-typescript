"use client";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { IsLoading, Post, Posts } from "../ts/interfaces";

interface Props {
  children: ReactNode;
}

const url = "https://jsonplaceholder.typicode.com/posts";

const postInitialState = {
  title: "",
  body: "",
};

function AppProvider({ children }: Props) {
  const [post, setPost] = useState<Post>(postInitialState);
  const [isLoading, setIsLoading] = useState<IsLoading>(true);
  const [posts, setPosts] = useState<Posts>([]);
  const [currentId, setCurrentId] = useState<number | undefined>(0);

  const handlePostChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setPost({ ...post, [name]: value });
  };

  const createPost = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      };
      const res = await fetch(url, options);
      const data = await res.json();
      if (res.status === 201) {
        setPosts([...posts, data]);
        setPost(postInitialState);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  };

  const getPost = (id: number | undefined) => {
    const postFound = posts.find((post) => post.id === id);
    if (postFound) {
      setPost(postFound);
      setCurrentId(id);
    }
  };

  const updatePost = async () => {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      };
      const res = await fetch(`${url}/${currentId}`, options);
      if (res.status === 200) {
        const newPosts = posts.map((value) => {
          if (value.id === currentId) {
            return post;
          }
          return value;
        });
        setPosts(newPosts);
        setPost(postInitialState);
        setCurrentId(0);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  };

  const deletePost = async (id: number | undefined) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        post,
        isLoading,
        posts,
        currentId,
        handlePostChange,
        createPost,
        getPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
