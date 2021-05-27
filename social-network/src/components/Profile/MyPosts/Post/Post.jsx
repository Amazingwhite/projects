import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  
  return (
    <div className={classes.item}>
      <br />
      <img alt='' src='https://sun9-36.userapi.com/impf/c857420/v857420653/276ca/dfwXuZyTfgI.jpg?size=2048x2048&quality=96&proxy=1&sign=d15453140f1e3fc75c6fa2ff7b458d29&type=album' />
      {props.message}
      <div>
        <span >{props.likes} </span>
        
         <button>Like</button>
      </div>
    </div>
  )

}

export default Post;


