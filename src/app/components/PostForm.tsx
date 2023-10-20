"use client";
import React, { FormEvent } from "react";
import { useAppContext } from "../context/AppContext";

function PostForm() {
  const { post, currentId, handlePostChange, createPost, updatePost } =
    useAppContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentId) createPost();
    else updatePost();
  };

  return (
    <section className="flex justify-center my-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 text-gray-950 p-5 flex flex-col gap-5 flex-auto max-w-md rounded"
      >
        <h1 className="text-center text-2xl sm:text-3xl font-bold">
          {currentId ? "Update Post" : "Create Post"}
        </h1>
        <div>
          <label htmlFor="title" className="text-xl sm:text-2xl font-medium">
            Enter a title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={post.title}
            onChange={(e) => handlePostChange(e)}
            className="w-full bg-gray-950 px-4 py-2 mt-1 text-gray-50 rounded text-lg sm:text-xl"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-xl sm:text-2xl font-medium"
          >
            Enter a description
          </label>
          <textarea
            name="body"
            id="description"
            placeholder="Description"
            value={post.body}
            onChange={(e) => handlePostChange(e)}
            className="w-full bg-gray-950 px-4 py-2 mt-1 text-gray-50 rounded text-lg sm:text-xl min-h-[150px] resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded-full text-lg sm:text-xl text-gray-50 font-medium transition-colors ease-in ${
            currentId
              ? "bg-green-700 hover:bg-green-600"
              : "bg-red-700 hover:bg-red-600"
          }`}
        >
          {currentId ? "Update" : "Create"}
        </button>
      </form>
    </section>
  );
}

export default PostForm;
