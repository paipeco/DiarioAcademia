/* @ngInject */
module.exports = function sidebar($rootScope, $timeout, $window, $state, Utils) {
    var $win = angular.element($window);
    link.$state = $state;
    var directive = {
        link: link,
        restrict: 'EA',
        controller: require("./sidebar.controller"),
        controllerAs: "vm",
        template: require("./views/sidebar.html"),
        scope: {},
        bindToController: {
            toggleUserblock: '=',
            userBlockvisible: "="
        }
    };
    return directive;

    function link(scope, element, attrs) {

        var currentState = link.$state.$current.self.name;
        var $sidebar = element;

        var eventName = Utils.isTouch() ? 'click' : 'mouseenter';
        var subNav = $();

        $sidebar.on(eventName, '.nav > li', function () {

            if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) {

                subNav.trigger('mouseleave');


                subNav = toggleMenuItem($(this), $sidebar);


                // Used to detect click and touch events outside the sidebar          
                sidebarAddBackdrop();

            }

        });

        scope.$on('closeSidebarMenu', function () {
            removeFloatingNav();
        });

        // Normalize state when resize to mobile
        $win.on('resize', function () {
            if (!Utils.isMobile())
                asideToggleOff();
        });

        // Adjustment on route changes
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            asideToggleOff();

            $rootScope.$broadcast('closeSidebarMenu');
        });

        // Autoclose when click outside the sidebar
        if (angular.isDefined(attrs.sidebarAnyclickClose)) {

            var wrapper = $('.wrapper');
            var sbclickEvent = 'click.sidebar';

            $rootScope.$watch('app.asideToggled', watchExternalClicks);

        }

        //////

        function watchExternalClicks(newVal) {
            // if sidebar becomes visible
            if (newVal === true) {
                $timeout(function () { // render after current digest cycle
                    wrapper.on(sbclickEvent, function (e) {
                        // if not child of sidebar
                        if (!$(e.target).parents('.aside').length) {
                            asideToggleOff();
                        }
                    });
                });
            }
            else {
                // dettach event
                wrapper.off(sbclickEvent);
            }
        }

        function asideToggleOff() {
            $rootScope.app.asideToggled = false;
            //if (!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
        }
    }

    /////// Helpers

    function sidebarAddBackdrop() {
        var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop' });
        $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
            removeFloatingNav();
        });
    }

    // Open the collapse sidebar submenu items when on touch devices 
    // - desktop only opens on hover
    function toggleTouchItem($element) {
        $element
          .siblings('li')
          .removeClass('open')
          .end()
          .toggleClass('open');
    }

    // Handles hover to open items under collapsed menu
    // ----------------------------------- 
    function toggleMenuItem($listItem, $sidebar) {

        removeFloatingNav();

        var ul = $listItem.children('ul');

        if (!ul.length) return $();
        if ($listItem.hasClass('open')) {
            toggleTouchItem($listItem);
            return $();
        }

        var $aside = $('.aside');
        var $asideInner = $('.aside-inner'); // for top offset calculation
        // float aside uses extra padding on aside
        var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
        var subNav = ul.clone().appendTo($aside);

        toggleTouchItem($listItem);

        var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
        var vwHeight = $win.height();

        subNav
          .addClass('nav-floating')
          .css({
              position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
              top: itemTop,
              bottom: (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
          });

        subNav.on('mouseleave', function () {
            toggleTouchItem($listItem);
            subNav.remove();
        });

        $(".sidebar-subnav.nav-floating li a").on('click', onClick);

        function onClick(event) {
            var element = $(event.toElement);
            element = element.prop('tagName') != "A" ? element.parent() : element;

            var route = element.attr('route');
            var params = element.attr('route-params');

            $rootScope.$state.go(route, params);
        }
        return subNav;
    }

    function removeFloatingNav() {
        $('.dropdown-backdrop').remove();
        $('.sidebar-subnav.nav-floating').remove();
        $('.sidebar li.open').removeClass('open');
    }
}
