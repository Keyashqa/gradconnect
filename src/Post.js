import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article className="post-card">
      <Link to={`/post/${post.id}`}>
      <div className="post-header">
        <div className="profile-pic"></div>
        <h2 className="post-title">{post.title}</h2>
      </div>
      </Link>
      <p className="post-date">{post.datetime}</p>
      <div className="post-content">
        <p>
          {post.content.length <= 50 ? post.content : `${post.content.slice(0, 50)}...`}
        </p>
      </div>
      <div className="post-actions">
        <button className="like-btn">❤️ Like</button>
        <button className="comment-btn">💬 Comment</button>
        <button className="share-btn">📤 Share</button>
      </div>
    </article>
  );
};

export default Post;
