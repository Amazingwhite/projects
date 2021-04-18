import React from 'react';
import classes from './MyPosts.module.css';
import AddPostReduxForm from './Post/AddPostForm';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
    console.log(values.newPostText)
  }

  return (
    <div>
      My posts
      <div>
        <AddPostReduxForm onSubmit={addNewPost}/>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;