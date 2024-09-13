import "./styles/App.scss";
import { useState } from "react";
import PostList from "./components/PostList/post-list.component";
import PostForm from "./components/PostForm/post-form.component";
import PostFilter from "./components/PostFilter/post-filter.component";
import Modal from "./components/UI/Modal/modal.component";
import Button from "./components/UI/Button/button.component";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Create a post</Button>

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        posts={sortedAndSearchedPosts}
        title={"Posts about JavaScript"}
        remove={removePost}
      />
    </div>
  );
}

export default App;
