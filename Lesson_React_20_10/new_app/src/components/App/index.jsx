import PostContainer from "../PostContainer";
import { posts_data } from '../../data/posts'
import { useState } from 'react'
import AddPostForm from "../AddPostForm";

function App() {

  const [posts, setPosts] = useState(posts_data);

  const changeLike = (id) => {
    const target = posts.find(el => el.id === id);
    target.like = !target.like;
    setPosts([...posts]);
  }

  const add_comment = (id, value) => {
    const comment = {
      id: Date.now(),
      text: value
    }

    const target_post = posts.find(el => el.id === id);

    target_post.comments.push(comment);
    setPosts([...posts]);
  }

  const add_post = (title, text) => setPosts([
    ...posts,
    {
      id: Date.now(),
      title,
      text,
      like: false,
      comments: []
    }
  ])

  return (
    <div>
      <AddPostForm add_post={add_post} />
      <PostContainer posts={posts} change_like={changeLike} add_comment={add_comment} />
    </div>
  );
}

export default App;
