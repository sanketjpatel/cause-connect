(function (angular) {
    'use strict';

    angular.module('app', [
        // 3rd party
        'ionic',
        'ionic.service.core', // needed for ionic analytics
        'ionic.service.analytics',
        'ionic.cloud',
        'firebase',
        'ngCordova',
        'tmh.dynamicLocale',
        'pascalprecht.translate',
        'ngIOS9UIWebViewPatch',
        'ui.router',
        'ionic-material',
        'ui.bootstrap',

        // services
        'app.auth',
        'causeConnect.contribute',
        'causeConnect.events',
        'causeConnect.eventDetail',
        'causeConnect.forgotPassword',
        'causeConnect.login',
        'causeConnect.seek',
        'causeConnect.signup',
        'causeConnect.tabs'
    ])
        .constant('AvailableLanguages', ['en-US', 'ru-RU', 'el-GR'])
        .constant('DefaultLanguage', 'en-US')
        .config(translateConfig)
        .config(appConfig)
        .config(ionicConfig)
        .config(pushConfig)
        .config(function($ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom');
        });

    function pushConfig($ionicCloudProvider) {
        $ionicCloudProvider.init({
            "core": {
                "app_id": "a7f3e6f0"
            },
            "push": {
                "sender_id": "270726488156",
                "pluginConfig": {
                    "ios": {
                        "badge": true,
                        "sound": true
                    },
                    "android": {
                        "iconColor": "#343434"
                    }
                }
            }
        });
    }

    // @ngInject
    function translateConfig($translateProvider, DefaultLanguage) {
        $translateProvider.useStaticFilesLoader({
            'prefix': 'i18n/',
            'suffix': '.json'
        });
        $translateProvider.preferredLanguage(DefaultLanguage);
    }
    // @ngInject
    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('causeConnect', {
                url: '/causeConnect',
                abstract: true,
                templateUrl: 'features/tabs/tabs.html',
                controller: 'TabsController',
                controllerAs: 'tabsVm'
            });

        $urlRouterProvider.otherwise(function ($injector, $location) {
            var state = $injector.get('$state');

            state.go('causeConnect.contribute');

            return $location.path();
        });
    }

    // @ngInject
    function ionicConfig($ionicConfigProvider, $provide, $ionicAutoTrackProvider,
                         CONFIG, $cordovaInAppBrowserProvider) {
        $provide.decorator('$exceptionHandler', ['$delegate', '$window', function ($delegate, $window) {
            return function (exception, cause) {
                // Decorating standard exception handling behaviour by sending exception to crashlytics plugin
                var message = exception.toString();
                var stacktrace = ($window.printStackTrace) ? $window.printStackTrace({e: exception}) : 'Stack Trace Not Available';
                $delegate(exception, cause);
                if ($window.navigator.crashlytics) $window.navigator.crashlytics.logException('ERROR: ' + message + ', stacktrace: ' + stacktrace);
            };
        }]);

        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text(' ');
        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.tabs.position('top');
        $ionicConfigProvider.navBar.alignTitle('left');

        if (CONFIG.devMode) {
            console.info('Analytics tracking is disabled in dev mode, update package.json to enable tracking');
            $ionicAutoTrackProvider.disableTracking();
        }

        $cordovaInAppBrowserProvider.setDefaultOptions({
            location: 'no',
            clearcache: 'no',
            toolbar: 'yes'
        })

    }
}(angular));

