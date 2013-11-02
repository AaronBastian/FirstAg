define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Services View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Services View Activated', null, 'services', true);
        return true;
    }
    //#endregion
});