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

    self.showModal();
};

App.prototype.showModal = function () {
    var self = this;

    self.$overlay.fadeIn(500);
    self.$popup.fadeIn(1000);
};

App.prototype.hideModal = function (isAnimate) {
    var self = this;

    var timing = isAnimate ? 300 : 0;

    self.$overlay.fadeOut(timing);
    self.$popup.fadeOut(timing);
};

App.prototype.askForG9N = function (cbSuccess, cbFailure) {

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            cbSuccess(position);
        });

    } else {
        cbFailure();
        // console.error("Le service de géolocalisation n'est pas disponible sur votre ordinateur.");
    }

};

App.prototype.cb9GNSuccess = function (position) {

};

App.prototype.cb9GNFailure = function () {

};