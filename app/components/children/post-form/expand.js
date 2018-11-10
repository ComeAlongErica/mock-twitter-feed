"use strict";
function expandOnFocus() {
  // Directives must return an object
  return {
    // Restricting this directive to be used as an attribute
    restrict: "A",
    // Link allows us to do any sort've manipulation to the element we want...most commonly is DOM manipulation
    link: function($scope, $element, $attrs) {
      // When you click on the element...
      $element.on("click", () => {
        // If the element's sibling is a paragraph...
        if ($element[0].previousElementSibling.tagName === "P") {
          // The element's sibling now has a green color
          $element[0].previousElementSibling.style.color = "green";
        }
        // The element you clicked on turns red
        $element.css("color", "red");
      });
    }
  };
}

angular
  .module("App")
  .directive("hover", hover);