define(['services/logger'], function (logger) {

    function viewModel() {
        var self = this;

        self.title = 'Kids View';
        self.activate = function () {
            logger.log('Kids View Activated', null, 'kids', true);
            return true;
        };
    }

    return new viewModel();
    
});
