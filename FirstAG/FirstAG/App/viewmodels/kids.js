define(['services/logger',
    'durandal/plugins/routeConfig',
    'durandal/plugins/router'],
    function (logger, config, router) {
    var vm = new function viewModel() {
        var self = this;

        self.title = 'Kids View';
        self.friendsUrl = config.friends.url;
        self.rangersUrl = config.rangers.url;
        self.activate = function () {
            logger.log('Kids View Activated', null, 'kids', true);
            return true;
        };

        self.friendsClick = function () {
            router.navigateTo(config.friends.url);
        };
        self.rangersClick = function () {
            router.navigateTo(config.rangers.url);
        };
    }();

    return vm;
});