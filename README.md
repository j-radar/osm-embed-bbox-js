# osm-embed-bbox-js
JS bbox parameter generator for OSM Map Embed Export


http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_bounding_box

Use https://cdnjs.com/libraries/mathjs for math.sec method.

Usage : 
`
var lngLat = $map.data('gps').split(',');  
var bbox = LonLat_to_bbox(lngLat[0]*1,lngLat[1]*1,16);  
var mapImg = '<iframe width="450" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox='+bbox+'&amp;layer=mapnik&marker='+lngLat.join(',')+'" ></iframe>';  
`
