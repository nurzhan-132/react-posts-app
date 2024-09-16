import "../styles/App.scss";
import { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList/post-list.component";
import PostForm from "../components/PostForm/post-form.component";
import PostFilter from "../components/PostFilter/post-filter.component";
import Modal from "../components/UI/Modal/modal.component";
import Button from "../components/UI/Button/button.component";
import { usePosts } from "../hooks/usePosts";
import PostService from "../_api/PostService";
import Skeleton from "../components/UI/Skeleton/skeleton.component";
import { useFetching } from "../hooks/useFetching";
import { getTotalPages } from "../_utils/pages";
import Pagination from "../components/UI/Pagination/pagination.component";
// import { useObserver } from "../hooks/useObserver";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, isPostsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAllPosts(limit, page);
      // setPosts([...posts, ...response.data]); // for the infinite loading of posts
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getTotalPages(totalCount, limit));
    },
  );

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
  }, [page, limit]);

  // useObserver(lastElement, page < totalPages, isPostsLoading, () => {
  //   setPage(page + 1);
  // });

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Create a post</Button>

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsError && <h1>{isPostsError}</h1>}
      <PostList
        posts={sortedAndSearchedPosts}
        title={"Posts about JavaScript"}
        remove={removePost}
        limit={limit}
        setLimit={(val) => setLimit(val)}
      />
      {isPostsLoading && (
        <Skeleton count={limit} flexDirection={"column"} height={84} />
      )}
      {/*  Special div for observing the end of posts' list. When it is visible on the screen we load another pack of posts*/}
      {/*<div*/}
      {/*  ref={lastElement}*/}
      {/*  style={{ height: "20px", background: "transparent" }}*/}
      {/*/>*/}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
