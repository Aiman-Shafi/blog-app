import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container,makeStyles,} from "@material-ui/core";
import Comment from './Comment';
import './Post.css';


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 400,
  },
});

const Post = () => {
  const { id } = useParams();
  const classes = useStyles();

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadPost();
    loadComment();
  }, []);

  const loadPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((ps) => setPost(ps));
  };

  const loadComment = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((comment) => setComments(comment));
  };

  return (
    
    <Container>
     <div className='single-image'>
      <img src={`https://loremflickr.com/600/400?random=${id}`} alt=""/>
     </div>
      <div post-section>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <div className='comment'>
        <h2 style={{marginTop: '10px', marginBottom: '20px'}}>Comments Section:</h2>
      
        {
          comments.map((comment) => (<Comment key={comment.id} comment={comment} /> ))
        }
 
      </div>
    </Container>
  );
};

export default Post;