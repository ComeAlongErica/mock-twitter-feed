"use strict";
const postForm = {
  templateUrl: "app/components/children/post-form/post-form.html",
  bindings: { addPost: "&" },
  controller: [function() {
    const vm = this;


  }]

};

angular
  .module("SocialApp")
  .component("postForm", postForm);