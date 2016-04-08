/**
 * Created by kocal on 08/04/16.
 */

function App() {
    var self = this;

    // self._map = L.map("map-container");

    self._initMap();
}

App.prototype._initMap = function () {
    var self = this;

    self._map = new ol.Map({
        target: 'map-container',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.MapQuest({layer: 'sat'})
            })
        ],
        view: new ol.View({
            center: new ol.proj.fromLonLat([0, 0]),
            zoom: 2
        }),
    });
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