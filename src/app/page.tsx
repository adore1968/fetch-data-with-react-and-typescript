import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

function HomePage() {
  return (
    <main className="container mx-auto sm:px-0 px-5">
      <PostForm />
      <PostsList />
    </main>
  );
}

export default HomePage;
