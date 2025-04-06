import React from 'react'
import Feeds from './Feeds'

const Home = ({post}) => {
  return (
    <main>
    <h1>Home</h1>
    {post.length > 0 ? <Feeds posts={post} /> : <p>No posts to display.</p>}
  </main>
  
  )
}

export default Home
