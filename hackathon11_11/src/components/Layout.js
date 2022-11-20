import Navbar from "./Navbar";
import Channels from "./Channels";
import PostForm from "./PostForm";
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

                    <PostForm posts={posts} setPosts={setPosts} />
                </div>
            </main>
        </>
    );
};

export default Layout;
