import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../_api/PostService";
import Skeleton from "../components/UI/Skeleton/skeleton.component";
import styles from "../components/PostItem/post-item.module.scss";

const OnePostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, isError] = useFetching(async (id) => {
    const res = await PostService.getPostById(id);
    setPost(res.data);
  });

  const [fetchCommentsPostById, isCommLoading, commError] = useFetching(
    async (id) => {
      const res = await PostService.getPostCommentsById(id);
      setComments(res.data);
    },
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsPostById(params.id);
  }, []);
  return (
    <div className={styles["post-item"]}>
      {isLoading ? (
        <Skeleton height={125} />
      ) : (
        <div>
          <h1>
            {post.id}. {post.title}
          </h1>
          <h2>{post.body}</h2>
        </div>
      )}

      <div>
        {isCommLoading ? (
          <Skeleton count={5} flexDirection={"column"} height={70} />
        ) : (
          <div className={styles["post-comments"]}>
            <span>Comments</span>
            {comments.map((comment) => (
              <div>
                <h6>{comment.email}</h6>
                <h4>{comment.body}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnePostPage;
