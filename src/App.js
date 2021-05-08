import React, { useState, useEffect } from 'react';
import Post from "./Post.js";
import './App.css';
import { db } from './firebase.js';

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
      setPost(snapshot.docs.map((doc) => ({ post: doc.data(), id: doc.id }))));

  }, []);
  console.log(post);

  return (
    <div className="App">
      <div className="app__header">
        <img className="app__logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Logo" />
      </div>
      <h1>instagram clone</h1>

      {
        post.map(({post, id}) => 
            <Post key={id}
              userName={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
        )
      }

    </div>
  );
}

export default App;
