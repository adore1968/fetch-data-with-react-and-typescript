"use client";
import { useAppContext } from "../context/AppContext";
import { Post } from "../ts/interfaces";

interface Props {
  post: Post;
  index: number | undefined;
}

function PostCard({ post, index }: Props) {
  const { getPost, deletePost } = useAppContext();

  return (
    <div className="p-5 border rounded flex flex-col gap-5">
      <div>
        <h4 className="text-xl sm:text-2xl pb-2 border-b font-medium">
          <span className="text-green-600">{index}.</span> {post.title}
        </h4>
        <p className="text-gray-200 text-lg sm:text-xl pt-2">{post.body}</p>
      </div>
      <div className="flex gap-5 items-center text-lg sm:text-xl">
        <button
          className="px-4 py-2 bg-green-700 hover:bg-green-600 transition-colors ease-in rounded"
          onClick={() => getPost(post.id)}
        >
          Update
        </button>
        <button
          className="px-4 py-2 bg-red-700 hover:bg-red-600 transition-colors ease-in rounded"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostCard;
