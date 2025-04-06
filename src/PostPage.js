import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./PostPage.css"

const PostPage = ({ post, handleDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPost = post.find(p => p.id.toString() === id);

  const handleDeleteClick = () => {
    handleDelete(id);
    navigate('/');
  };

  return (
    <main className="PostPage">
      {currentPost ? (
        <article className="post">
          <h2>{currentPost.title}</h2>
          <p className="postDate">{currentPost.datetime}</p>
          <p className="postBody">{currentPost.content}</p>
          <button onClick={handleDeleteClick}>Delete Post</button>
          <Link to={`/edit/${currentPost.id}`}>Edit Post</Link>
        </article>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default PostPage;
