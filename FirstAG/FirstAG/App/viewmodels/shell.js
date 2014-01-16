define(['durandal/system', 'durandal/plugins/router', 'services/logger', 'durandal/plugins/routeConfig'],
    function (system, router, logger, routeConfig) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }

        function boot() {
            router.mapTo(routeConfig.home);
            router.mapTo(routeConfig.services);
            router.mapTo(routeConfig.worshipSchedule);
            router.mapTo(routeConfig.kids);
            router.mapTo(routeConfig.rangers);
            router.mapTo(routeConfig.men);
            router.mapTo(routeConfig.women);
            router.mapTo(routeConfig.calendar);
            
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });