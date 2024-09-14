import "../styles/App.scss";
import { useEffect, useState } from "react";
import PostList from "../components/PostList/post-list.component";
import PostForm from "../components/PostForm/post-form.component";
import PostFilter from "../components/PostFilter/post-filter.component";
import Modal from "../components/UI/Modal/modal.component";
import Button from "../components/UI/Button/button.component";
import { usePosts } from "../hooks/usePosts";
import PostService from "../_api/PostService";
import Skeleton from "../components/UI/Skeleton/skeleton.component";
import { useFetching } from "../hooks/useFetching";
import { getPagesArray, getTotalPages } from "../_utils/pages";
import Pagination from "../components/UI/Pagination/pagination.component";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isPostsLoading, isPostsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAllPosts(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getTotalPages(totalCount, limit));
    },
  );

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Create a post</Button>

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsError && <h1>{isPostsError}</h1>}
      {isPostsLoading ? (
        <Skeleton count={10} flexDirection={"column"} height={84} />
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title={"Posts about JavaScript"}
          remove={removePost}
        />
      )}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
