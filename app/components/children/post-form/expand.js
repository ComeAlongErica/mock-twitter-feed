"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("focus", () => {
        if ($element[0].tagName === "INPUT" || $element[0].tagName === "TEXTAREA") {
          $element[0].style.padding = "5px 0";
        }
      });
      $element.on("blur", () => {
        if ($element[0].tagName === "INPUT" || $element[0].tagName === "TEXTAREA") {
          $element[0].style.padding = "";
        }
      });
    }
  };
}

angular
  .module("SocialApp")
  .directive("expandOnFocus", expandOnFocus);