import "./App.css";
import CommentForm from "./CommentForm";
import PostList from "./PostList";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PostList />
        <CommentForm />
      </header>
    </div>
  );
}

export default App;
