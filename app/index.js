var app = angular.module('editableItem', []);
app.directive('makeEditable', function() {
  return {
    templateUrl: 'editable.html',
    restrict: 'A',
    scope: true,
    replace: true,
    transclude: true,
    link: function(scope, element, attrs){
    	var button = element.find("button");
    	var div = element.find("div");
    	button.bind("click", function(){
    		scope.isEditable = !scope.isEditable;
    		if (scope.isEditable){
    			button.text("Save");
    			div.addClass("editable");;
    		} else {
    			button.text("Edit");
   				div.removeClass("editable");    			
    		}
    	})
    } 
  };
});