import React, { useState } from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let posts = props.posts
    .map(el => {
      return <Post message={el.message} likesCount={el.likesCount} />
    })

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let onChangePostMessage = () => {
    let text = newPostElement.current.value;
    props.onChangePostMessage(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onChangePostMessage} ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>

      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;