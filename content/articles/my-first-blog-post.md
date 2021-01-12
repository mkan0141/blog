---
title: My First Story
description: ここに説明
img: first-blog-post.img
alt: my first blog post
---

# My first blog post

## My first blog post

### My first blog post

#### My first blog post

Welcome to my first blog post using content module

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

> aaaaaaaaaaaaa