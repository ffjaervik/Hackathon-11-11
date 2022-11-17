import Navbar from "./Navbar";
import Channels from "./Channels";
import CommentForm from "./CommentForm";
import PostList from "./PostList";

const Layout = ({ posts, setPosts }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="flex ">
                <Channels />
                <div className="flex flex-col w-full justify-between">
                    <PostList posts={posts} />

                    <CommentForm posts={posts} setPosts={setPosts} />
                </div>
            </main>
        </>
    );
};

export default Layout;
