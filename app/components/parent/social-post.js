"use strict";
const socialPost = {
  templateUrl: "app/components/parent/social-post.html",
  bindings: { onSubmit: "&" },
  controller: [function () {
    const vm = this;
    vm.posts = [
      { title: "title", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
    ]

    vm.formDisplay = false;

    vm.showForm = () => {
      if (vm.formDisplay === false) {
        vm.formDisplay = true
      } else {
        vm.formDisplay = false
      };
    }

  }]
};

angular
  .module("SocialApp")
  .component("socialPost", socialPost);