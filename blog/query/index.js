const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  
  const { type, data } = req.body;

  switch (type) {
    case "PostCreated":
      var { id, title } = data;
      posts[id] = { id, title, comments: [] };
      break;
    case "CommentCreated":
      var { id, content, postId } = data;
      const post = posts[postId];
      post.comments.push({ id, content });
      break;
    default:
  }

  res.send({});
});

app.listen(4002, () => {
    console.log("Listening on 4002");
});