﻿define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Kids View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Kids View Activated', null, 'kids', true);
        return true;
    }
    //#endregion
});
