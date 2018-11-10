"use strict";
const post = {
  templateUrl: "app/components/children/post/post.html",
  bindings: { post: "<" },
  controller: [function() {
    const vm = this;
    
  }]
};

angular
  .module("SocialApp")
  .component("post", post);