"use strict";
const postForm = {
  templateUrl: "app/components/children/post-form/post-form.html",
  bindings: {
  },
  controller: [function() {
    const vm = this;
    
    vm.onSubmit = (postInfo) => {
      console.log("clicked");
      vm.updatePost(postInfo);
    }

  }]

};

angular
  .module("SocialApp")
  .component("postForm", postForm);