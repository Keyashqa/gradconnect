import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navi from "./Navi";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { Routes,Route, Link, useSearchParams } from "react-router-dom";
import Post from "./Post";
import Layout from "./Layout";
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import api from "./api/server"
import Edit from "./Edit";

function App() {
  const [post, setPost] = useState([]);

  const [results,setResults]=useState([...post].reverse());
  
  
  const [search,setSearch]=useState("");

  // getting data from server

  useEffect(()=>{
    const FetchPost=async ()=>{
        try{
          const response=await api.get('/posts');
          setPost(response.data);
        }
        catch(err) {
          if (err.response) {
            // Server responded with a status code out of 2xx range
            console.log("Error Data:", err.response.data);
            console.log("Error Status:", err.response.status);
            console.log("Error Headers:", err.response.headers);
          } else if (err.request) {
            // Request was made but no response received
            console.log("No response received:", err.request);
          } else {
            // Something else triggered an error
            console.log("Error Message:", err.message);
          }
        }        
    }

    FetchPost();
  },[]);

  // Declaring for newpost
  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
      e.preventDefault();
      const id = post.length ? (Number(post[post.length - 1].id) + 1).toString() : "1";

      const dateTime = format(new Date(),'MMMM dd,yyyy pp')
      const neww={id:id,title:postTitle,datetime:dateTime, content: postBody};
      const response= await api.post('/posts',neww);
      const allPosts=[...post, response.data];
      setPost(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate("/");
  }

  const [postBody,setPostBody]=useState('');
  const [postTitle,setPostTitle]=useState('');

  // search posts
  useEffect(() => {
    const filtered = post.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.content.toLowerCase().includes(search.toLowerCase())
    );
    setResults([...filtered].reverse()); // Reverse to show latest posts first
}, [post, search]);

  //Handle delete
  const [editTitle,setEditTitle]=useState('');
  const [editBody,setEditBody]=useState('');

  const handleDelete = async (id) => {
    try {
      // Call the API to delete the post
      await api.delete(`/posts/${id}`);
      
      // Update the state to remove the deleted post locally
      const response=await api.get('/posts');
      setPost(response.data);
    } catch (err) {
      console.error("Failed to delete post:", err.message);
    }
  };

  // handle edit
  
  const handleEdit = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {
      id,
      title: editTitle,
      datetime: dateTime,
      content: editBody,
    };
 
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      console.log(response.data);
      setPost(post.map(p => (p.id === id ? {...response.data} : p)));
      setEditTitle('');
      setEditBody('');
      navigate(`/post/${id}`);
    } catch (err) {
      console.error("Failed to edit post:", err.message);
    }
  };

  
  
  

  

  return (
    <div className="App">
      
      <Header title='GradConnect' />
      <Navi search={search} setSearch={setSearch} />
      
      

      <Routes>
        <Route path="post">
          <Route index element={<NewPost 
          handleSubmit={handleSubmit}
          postBody={postBody}
          postTitle={postTitle}
          setPostBody={setPostBody}
          setPostTitle={setPostTitle}
           />} />
           <Route path=":id" element={<PostPage post={post} handleDelete={handleDelete} />} />
           
        </Route>
        
        <Route path="edit/:id" element={<Edit post={post} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle} />} />
        <Route path="/" element={<Home post={results}/> } />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Layout />
       
      
      
      <Footer />

    </div>
  );
}

export default App;
