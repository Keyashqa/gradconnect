import React, { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import "./Edit.css"

const Edit = ({
  post,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
  handleEdit,
}) => {
  const { id } = useParams();

  useEffect(() => {
    const selectedPost = post.find((p) => p.id.toString() === id);
    if (selectedPost) {
      setEditTitle(selectedPost.title);
      setEditBody(selectedPost.content);
    }
  }, [id, post, setEditTitle, setEditBody]);

  return (
    <main className="Edit">
      <h2>Edit Post</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id);
        }}
      >
        <label htmlFor="editTitle">Title:</label>
        <input
          id="editTitle"
          type="text"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="editBody">Post:</label>
        <textarea
          id="editBody"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </main>
  );
};

export default Edit;
