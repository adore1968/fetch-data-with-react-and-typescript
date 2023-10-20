"use client";
import { useAppContext } from "../context/AppContext";
import Loader from "./Loader";
import PostCard from "./PostCard";

function PostsList() {
  const { isLoading, posts } = useAppContext();

  if (isLoading) return <Loader />;

  return (
    <section className="mb-10">
      <div className="grid lg:grid-cols sm:grid-cols-2 grid-cols-1 gap-5">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={post.id} />
        ))}
      </div>
    </section>
  );
}

export default PostsList;
