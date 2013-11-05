define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Friends View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Friends View Activated', null, 'friends', true);
        return true;
    }
    //#endregion
});
