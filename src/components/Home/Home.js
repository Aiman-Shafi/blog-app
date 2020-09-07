import React, { useState, useEffect } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
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
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={4}>
            <PostPage post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;