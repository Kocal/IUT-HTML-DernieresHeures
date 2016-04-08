/**
 * Created by kocal on 08/04/16.
 */

function App() {
    var self = this;


    self._initMap();
    self._initModal();
}

App.prototype._initMap = function () {
    var self = this;

    self._map = L.map('map-container').setView([45.9890156384, 4.71865778622], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(self._map);
}

App.prototype._initModal = function () {
    var self = this;

    self.$overlay = $('.overlay');
    self.$popup = $('.popup');

    self.hideModal(false);
};

App.prototype.run = function () {
    var self = this;

    self.displayCheese();
    // self.askForG9N(self.cbG9NSuccess, self.G9NFailure)
};

App.prototype.displayCheese = function () {
    var self = this;
    var sayCheese = new SayCheese('#photo-container', {audio: false});

    self.showModal(function () {

        sayCheese.on('start', function () {
            this.takeSnapshot();
        });

        sayCheese.on('snapshot', function (snapshot) {
            // a snapshot has been taken, do something with it :)
            console.log(snapshot);
        });

        sayCheese.start();
    });
};

App.prototype.showModal = function (cb) {
    var self = this;

    self.$overlay.fadeIn(500);
    self.$popup.fadeIn(1000, cb);
};

App.prototype.hideModal = function (isAnimate) {
    var self = this;

    var timing = isAnimate ? 300 : 0;

    self.$overlay.fadeOut(timing);
    self.$popup.fadeOut(timing);
};
