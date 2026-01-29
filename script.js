
var map = L.map('map').setView([28.6139, 77.2090], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


var marker = L.marker([28.6139, 77.2090]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>This is Delhi, India 🇮🇳").openPopup();


map.on('click', function (e) {
    L.marker(e.latlng)
        .addTo(map)
        .bindPopup("Latitude: " + e.latlng.lat + "<br>Longitude: " + e.latlng.lng)
        .openPopup();
});
