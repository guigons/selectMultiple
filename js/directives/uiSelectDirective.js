angular.module('selectMultiple').directive('uiSelect', function() {
    return {
        templateUrl: "view/selectComponent.html",
        scope: {
            options: "=",
            typeoptions: "@",
            alloptionstr: "@",
            width: "@"
        },
        require: "ngModel",
        link: function(scope, element, attrs, ctrl){

            if (!scope.options) scope.options = ['Definir Attr: options'];
            if (!scope.typeOptions) scope.typeOptions = "ARRAY";
            if (!scope.alloptionstr) scope.alloptionstr = "Todos";
            if (!scope.width) scope.width = "100%";
            if (scope.typeoptions === 'OBJECT'){
                scope.options = Object.keys(scope.options);
            }

            scope.$watch(function(){
                elems = element.find('input');
                if (ctrl.$viewValue){
                    for (var i = elems.length - 1; i >= 0; i--) {
                        if (elems[i].name !== scope.alloptionstr){
                            if (ctrl.$viewValue.indexOf(elems[i].name) === -1){
                                elems[i].checked = false;
                            }else{
                                elems[i].checked = true;
                            }
                        }
                    }
                    if (ctrl.$viewValue.length === scope.options.length){
                        elems[0].checked = true;  
                    }else{
                        elems[0].checked = false; 
                    }
                }
            })

            scope.open = function(){
                scope.isOpened = !scope.isOpened;
            }

            scope.clickOption = function(option){
                if (!ctrl.$viewValue) ctrl.$setViewValue([]);
                if (this.selected){
                    ctrl.$setViewValue[ctrl.$viewValue.push(option)];
                }else{
                    ctrl.$setViewValue[ctrl.$viewValue.splice(ctrl.$viewValue.indexOf(option),1)];
                }
            }

            scope.allSetUnset = function(){
                if (!ctrl.$viewValue) ctrl.$setViewValue([]);
                if (this.selectedAll){
                    ctrl.$setViewValue(angular.copy(scope.options));
                }else{
                    ctrl.$setViewValue([]);
                }
            }
           
        }
   };
});

