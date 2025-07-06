mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    style: 'mapbox://styles/mapbox/standard',
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 11, // starting zoom
});

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h6>${listing.title}</h6> <p>Excat location will be provided after booking</p>`)
        .setMaxWidth("300px"))
    .addTo(map);
