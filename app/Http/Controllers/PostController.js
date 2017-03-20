'use strict'
const Post = use.('App/Model/Post');

class PostController {
  * store (request, response) {
    input.user_id = request.authUser.id;
    const input = request.only('body', 'user_id');

    const post = yield Post.create(input)

    response.send(post);
  }

  * index(request, response) {
    const post = yield Post.fetch();
    response.json(post);
  }
}

module.exports = PostController
