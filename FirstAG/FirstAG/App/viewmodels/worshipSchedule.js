define(['services/logger'], function (logger) {
    function viewModel() {
        var self = this;
        self.title = 'Worship Schedule 8-4-2013';
        self.name = 'Worship Schedule';
        self.activate = function () {
            logger.log('Worship Schedule View Activated', null, 'worshipSchedule', true);
            return true;
        };
        self.viewAttached = function () {
            $('#songTable tr:nth-child(2n+1)').addClass('k-alt');
        };
        self.songList = ko.observableArray([
            {
                songId: ko.observable(1),
                songTitle: ko.observable("So Good to Me"),
                songKey: ko.observable('D'),
                youtubeLink: ko.observable('http://www.youtube.com/watch?v=8sUTf4ByiSQ')
            }, {
                songId: ko.observable(2),
                songTitle: ko.observable('One of These Days'),
                songKey: ko.observable('G'),
                youtubeLink: ko.observable('http://www.youtube.com/watch?v=qniSAHZu3Rc')
            }, {
                songId: ko.observable(3),
                songTitle: ko.observable('Who Will Ascend'),
                songKey: ko.observable('G'),
                youtubeLink: ko.observable('')
            }, {
                songId: ko.observable(4),
                songTitle: ko.observable('Here I Am to Worship'),
                songKey: ko.observable('E'),
                youtubeLink: ko.observable('http://www.youtube.com/watch?v=PC-yHnqttAU')
            }, {
                songId: ko.observable(5),
                songTitle: ko.observable('How Great is Our God'),
                songKey: ko.observable('C'),
                youtubeLink: ko.observable('http://www.youtube.com/watch?v=cKLQ1td3MbE')
            }
        ]);
        self.download = function (selection) {
            alert('Download for ' + selection.songTitle() + ' coming soon!');
        };

        //var theList = [
        //    {
        //        songId: ko.observable(1),
        //        songTitle: ko.observable("All Because of Jesus I'm Alive"),
        //        songKey: ko.observable('C'),
        //        youtubeLink: ko.observable('http://www.youtube.com/watch?v=y4N8Satgqxg')
        //    }, {
        //        songId: ko.observable(2),
        //        songTitle: ko.observable('Your Grace is Enough'),
        //        songKey: ko.observable('Ab'),
        //        youtubeLink: ko.observable('http://www.youtube.com/watch?v=8wN-fspKg1Q')
        //    }, {
        //        songId: ko.observable(3),
        //        songTitle: ko.observable('Holy is the Lord God Almighty'),
        //        songKey: ko.observable('A'),
        //        youtubeLink: ko.observable('http://www.youtube.com/watch?v=EduKNYVBKH8')
        //    }, {
        //        songId: ko.observable(4),
        //        songTitle: ko.observable('God of Wonders'),
        //        songKey: ko.observable('Bb'),
        //        youtubeLink: ko.observable('http://www.youtube.com/watch?v=seSl-h6WMD8')
        //    }, {
        //        songId: ko.observable(5),
        //        songTitle: ko.observable('Jesus, Son of God'),
        //        songKey: ko.observable('B'),
        //        youtubeLink: ko.observable('http://www.youtube.com/watch?v=jc7FvdFpUfo')
        //    }
        //];
    }

    return new viewModel();
});