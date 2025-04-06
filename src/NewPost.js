import React from 'react';
import './Newpost.css'


const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  
  return (
    <div className="newpost-main">
      <h1 className="newpost-title">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="newpost-field">
          <label className="newpost-label" htmlFor="postTitle">
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            className="newpost-input"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </div>
        <div className="newpost-field">
          <label className="newpost-label" htmlFor="postBody">
            Post Content
          </label>
          <textarea
            id="postBody"
            className="newpost-input"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="newpost-button"
          
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
