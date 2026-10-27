ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8416842.389448, 5687867.360546, -8411438.458402, 5690975.243470]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EarthpathCoords_1 = new ol.format.GeoJSON();
var features_EarthpathCoords_1 = format_EarthpathCoords_1.readFeatures(json_EarthpathCoords_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EarthpathCoords_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EarthpathCoords_1.addFeatures(features_EarthpathCoords_1);
var lyr_EarthpathCoords_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EarthpathCoords_1, 
                style: style_EarthpathCoords_1,
                popuplayertitle: 'Earthpath Co-ords',
                interactive: true,
                title: '<img src="styles/legend/EarthpathCoords_1.png" /> Earthpath Co-ords'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_EarthpathCoords_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EarthpathCoords_1];
lyr_EarthpathCoords_1.set('fieldAliases', {'Name': 'Name', 'Y (Latitude)': 'Y (Latitude)', 'X (Longitude)': 'X (Longitude)', 'Point No.': 'Point No.', });
lyr_EarthpathCoords_1.set('fieldImages', {'Name': 'TextEdit', 'Y (Latitude)': 'TextEdit', 'X (Longitude)': 'TextEdit', 'Point No.': 'Range', });
lyr_EarthpathCoords_1.set('fieldLabels', {'Name': 'header label - always visible', 'Y (Latitude)': 'inline label - visible with data', 'X (Longitude)': 'inline label - visible with data', 'Point No.': 'inline label - visible with data', });
lyr_EarthpathCoords_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});