"use strict";
const socialPost = {
  templateUrl: "app/components/parent/social-post.html",
  bindings: { onSubmit: "&" },
  controller: [function () {
    const vm = this;
    vm.posts = [
      { title: "Playing Fetch", post: "I had a long talk with my fren about how to spot a fake ball throw. The optimal strategy is to follow the ball with your eyes instead of your heart." },
      { title: "Nightmare", post: "One time I was having a nightmare and the human noticed. They held my paw to make sure i knew everything was going to be okay." },
      { title: "Gardens", post: "Over the summer the human tried to grow tomatoes in the backyard. Every so often I would sneak over and graze on them like a brontosaurus." },
      { title: "Couches", post: "I like to sit on one side of the couch, but sometimes I sit on the other side of the couch. just to keep everyone on their toes." },
      { title: "Doggo Love", post: "If you don’t mind, I’m gonna love you a whole lot." },
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