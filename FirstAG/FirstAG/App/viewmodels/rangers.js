define(['services/logger'], function (logger) {

    function viewModel() {
        var self = this;

        self.title = 'Rangers View';
        self.activate = function () {
            logger.log('Rangers View Activated', null, 'rangers', true);
            return true;
        };
    }

    return new viewModel();

});