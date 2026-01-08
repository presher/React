
import './App.css';
// import { Counter } from './features/counter/Counter';
import PostsList from './features/post/PostsList';
import AddPostForm from './features/post/AddPostForm';

function App() {
  return (
    <main className='App'>
      {/* <Counter /> */}
      {<PostsList />}
      {<AddPostForm />}
    </main>
  );
}

export default App;
