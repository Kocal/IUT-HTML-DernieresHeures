/**
 * Created by kocal on 08/04/16.
 */

function App() {
    var self = this;


    self._initMap();
}

App.prototype._initMap = function () {
    var self = this;

    self._map = L.map('map-container').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(self._map);
}


App.prototype.run = function () {
    var self = this;

    self.askForG9N(self.cbG9NSuccess, self.G9NFailure)
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