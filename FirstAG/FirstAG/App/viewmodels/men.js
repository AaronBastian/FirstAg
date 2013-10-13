define(['services/logger'], function (logger) {

    function viewModel() {
        var self = this;

        self.title = 'Men View';
        self.activate = function () {
            logger.log('Men View Activated', null, 'men', true);
            return true;
        };
    }

    return new viewModel();

});