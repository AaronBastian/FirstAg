define(['services/logger'], function (logger) {

    function viewModel() {
        var self = this;

        self.title = 'Calendar View';
        self.activate = function () {
            logger.log('Calendar View Activated', null, 'calendar', true);
            return true;
        };
    }

    return new viewModel();

});