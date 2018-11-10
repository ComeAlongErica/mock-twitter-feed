"use strict";
const socialPost = {
  templateUrl: "app/components/parent/social-post.html",
  bindings: { onSubmit: "&" },
  controller: [function () {
    const vm = this;
    vm.posts = [
      { title: "title1", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title2", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title3", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title4", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
      { title: "title5", post: "lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem" },
    ]

    vm.formDisplay = false;

    vm.showForm = () => {
      if (vm.formDisplay === false) {
        vm.formDisplay = true
      } else {
        vm.formDisplay = false
      };
    }

    vm.addPost = (postToAdd) => {
      if (vm.formDisplay === false) {
        vm.formDisplay = true
      } else {
        vm.formDisplay = false
      };

      vm.posts.push(postToAdd);
  };

    vm.removePost = (index) => {
      let remove = vm.posts.indexOf(index);
      vm.posts.splice(remove, 1);
  }

  }]
};

angular
  .module("SocialApp")
  .component("socialPost", socialPost);