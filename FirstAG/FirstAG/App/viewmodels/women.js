define(['services/logger'], function (logger) {

    function viewModel() {
        var self = this;

        self.title = 'Women View';
        self.activate = function () {
            logger.log('Women View Activated', null, 'women', true);
            return true;
        };
    }

    return new viewModel();

});