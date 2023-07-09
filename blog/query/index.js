const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  switch (type) {
    case "PostCreated":
      var { id, title } = data;
      posts[id] = { id, title, comments: [] };
      break;
    case "CommentCreated":
      var { id, content, postId, status } = data;
      var post = posts[postId];
      post.comments.push({ id, content, status });
      break;
    case "CommentUpdated":
      var { id, content, postId, status } = data;
      var post = posts[postId];
      const comment = post.comments.find(c => c.id === id);
      comment.status = status;
      comment.content = content;
      break;
    default:
  }
}

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  
  const { type, data } = req.body;
  handleEvent(type, data);

  res.send({});
});

app.listen(4002, async () => {
    console.log("Listening on 4002");

    const res = await axios.get('http://localhost:4005/events')
      .catch(e => console.error(e.message));

    for (let event of res.data) {
      console.log('Processing event:', event.type);
      handleEvent(event.type, event.data);
    }
});