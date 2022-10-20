import PostContainer from "../PostContainer";
import { posts_data } from '../../data/posts'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState(posts_data);

  const changeLike = (id) => {
    const target = posts.find(el => el.id === id);
    target.like = !target.like;
    setPosts([...posts]);
  }

  return (
    <div>
      <PostContainer posts={posts} change_like={changeLike} />
    </div>
  );
}

export default App;
