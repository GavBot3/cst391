import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';


function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: "this is a message for everyone to hear"
    }
  ]);

  const [postId, setPostId] = useState(3);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText
    }

    setPostList(postList => [...postList, newPost]);
    setPostId(postId+1)
  }

  const handleDelete = (id) => {
    let updatePost = postList.filter(post => post.postNumber !== id);
    setPostList(updatePost);
  }

  const posts = postList.map((post) => (
    <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDelete} />
  ));

  return (
    <div>{posts}
    <AddPost onAdd={handleAddPost}/></div>
  )
}

export default App;