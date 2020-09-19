import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "left",
  },
});

const seeMoreHandler = (oid) => {
};

export default function Postpage(props) {
  const classes = useStyles();
  const history = useHistory();

  const { id, title, body } = props.post;

  const seeMoreHandler = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="240"
        image={`https://loremflickr.com/600/400?random=${id}`}
        title="Contemplative Reptile"
      />
      <CardContent style={{backgroundColor: '#F0F0F0'}}>
        <Typography gutterBottom variant="h6" component="h3">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body.length > 100 ? body.substring(0, 100) + "..." : body}
        </Typography>
      </CardContent>

      <CardActions style = {{backgroundColor: '#f0f0f0'}}>
        <Button
          onClick={() => seeMoreHandler(id)}
          size="small"
          variant="contained"
          style={{backgroundColor: '#580b0b', color: '#fff'}}
        >
          See More
        </Button>
      </CardActions>
    </Card>
  );
}