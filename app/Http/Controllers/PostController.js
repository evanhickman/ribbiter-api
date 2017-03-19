'use strict'
const Post = use.('App/Model/Post');

class PostController {
  * store (request, response) {
    input.user_id = request.authUser.id;
    const input = request.only('body', 'user_id');

    const post = yield Post.create(input)

    response.send(post);
  }
}

module.exports = PostController
