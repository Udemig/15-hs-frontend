import PostForm from "../post-form";
import PostList from "../post/post-list";

const Main = ({ user }) => {
  return (
    <div className="border-x border-tw-gray">
      <header className="sticky top-0 z-10 bg-primary/70 backdrop-blur border-b border-tw-gray p-4 font-bold">Anasayfa</header>

      <PostForm user={user} />

      <PostList />
    </div>
  );
};

export default Main;
