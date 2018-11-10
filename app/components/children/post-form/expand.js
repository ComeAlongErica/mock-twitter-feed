"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("focus", () => {
        // If the element's sibling is a paragraph...
        if ($element[0].tagName === "INPUT" || $element[0].tagName === "TEXTAREA") {
          // The element's sibling now has a green color
          $element[0].style.padding = "5px 0";
          console.log("focused");
        }
      });
      $element.on("blur", () => {
        // If the element's sibling is a paragraph...
        if ($element[0].tagName === "INPUT" || $element[0].tagName === "TEXTAREA") {
          // The element's sibling now has a green color
          $element[0].style.padding = "";
          console.log("focused");
        }
      });
    }
  };
}

angular
  .module("SocialApp")
  .directive("expandOnFocus", expandOnFocus);