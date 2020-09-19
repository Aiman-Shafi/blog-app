import React from "react";
import './Comment.css'
import { Container, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Comment = (props) => {
  const { name, body } = props.comment;
  const classes = useStyles();

  return (
    <Container>
      <div className='comment-section'>
        <Avatar 
          src={`https://loremflickr.com/600/400?random=${Math.random() * 10}`}
          style={{ width: "80px", height: "80px" }} />
          <div className='comments'>
            <h4>{name}</h4>
            <p>{body}</p>
          </div>
      </div>
    </Container>
  );
};

export default Comment;