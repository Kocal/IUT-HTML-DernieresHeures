/**
 * Created by kocal on 08/04/16.
 */

function App() {

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