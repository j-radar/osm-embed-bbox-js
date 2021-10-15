function deg2rad(degrees){
  var pi = Math.PI;
  return degrees * (pi/180);
}

function rad2deg(radians){
  var pi = Math.PI;
  return radians * (180/pi);
}

function getTileNumber(lat, lon, zoom) {
    var pi = Math.PI;
    xtile = (lon+180)/360 * ( 2**zoom ) ;
    ytile = (1 - Math.log(Math.tan(deg2rad(lat)) + math.sec(deg2rad(lat)))/pi)/2 * ( 2**zoom );
    return [xtile, ytile];
}

function getLonLat(xtile, ytile, zoom) {
    n = 2 ** zoom;
    var pi = Math.PI;
    lon_deg = xtile / n * 360.0 - 180.0;
    lat_deg = rad2deg(Math.atan(Math.sinh(pi * (1 - 2 * ytile / n))));
    return [lon_deg, lat_deg];
}

/*
# convert from permalink OSM format like:
# http://www.openstreetmap.org/?lat=43.731049999999996&lon=15.79375&zoom=13&layers=M
# to OSM "Export" iframe embedded bbox format like:
# http://www.openstreetmap.org/export/embed.html?bbox=15.7444,43.708,15.8431,43.7541&layer=mapnik
*/
function LonLat_to_bbox(lat, lon, zoom) {
    width = 450; 
    height = 350;  // note: must modify this to match your embed map width/height in pixels
    tile_size = 256;

    let tile = getTileNumber (lat, lon, zoom);
    xtile = tile[0];
    ytile = tile[1];

    xtile_s = (xtile * tile_size - width/2) / tile_size;
    ytile_s = (ytile * tile_size - height/2) / tile_size;
    xtile_e = (xtile * tile_size + width/2) / tile_size;
    ytile_e = (ytile * tile_size + height/2) / tile_size;

    let coordS = getLonLat(xtile_s, ytile_s, zoom);
    let coordE = getLonLat(xtile_e, ytile_e, zoom);

    return coordS[0]+','+coordS[1]+','+coordE[0]+','+coordE[1];
}