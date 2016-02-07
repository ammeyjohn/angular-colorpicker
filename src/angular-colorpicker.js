(function($, angular) {
    'use strict';

    var default_option = {
        hideButton: true,
        transparentColor: true,
        showOn: 'focus',
        strings: '主题色系,标准色系,Web色系,主题色系,返回颜色板,历史,无历史颜色'
    }

    function uiColorpickerDirective() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                ngModel: '=ngModel'
            },
            require: 'ngModel',
            link: function link(scope, elm, attrs, controller) {

                // 初始化配置
                var opt = angular.extend({}, angular.copy(default_option));

                // 初始化颜色控件
                elm
                    .on("change.color", function(event, color) {
                        if (color) {
                            controller.$setViewValue(color);
                        }
                    })
                    .colorpicker(opt);

                scope.$watch('ngModel', function(newValue, oldValue) {
                    if (newValue) {
                        elm.colorpicker('val', newValue);
                    }
                });
            }
        };
    }

    //// angular code ////
    var module = angular.module('uiColorpicker', []);
    module.directive('uiColorpicker', uiColorpickerDirective);

})(jQuery, angular)