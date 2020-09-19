import React, { useState, useEffect } from "react";
import './Home.css';
import { Container, Grid, makeStyles, Button } from "@material-ui/core";
import PostPage from "../PostPage/PostPage";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },
});

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => setPosts(post));
  };

  const classes = useStyles();
  return (
    <>
    <div className='top-section'> 
        <center>
          <h1>Welcome To <span>HEYBLOG</span></h1>
          <p>"Read about the lastest blogs of today's world"</p>
          <Button size="large"
          variant="contained"
          style={{backgroundColor: '#580b0b', color: '#fff' , fontWeight: '600'}}>
            Explore
          </Button>
        </center>
    </div>
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={6}>
            <PostPage post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default Home;