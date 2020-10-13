const geolib = require('geolib');

let distance = geolib.getDistance(
    // 10.855460, 106.608554
    { latitude: 10.855460, longitude: 106.608554 },
    // 10.765973, 106.665880
    { latitude: 10.765973, longitude: 106.665880 }
);

console.log(Math.round(distance/1000).toString(), 'km')