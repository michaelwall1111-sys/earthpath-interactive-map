var size = 0;
var placement = 'point';

var style_EarthpathCoords_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "bold 15px 'Open Sans', sans-serif";
    var labelFill = "#253238";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = true;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Point No.") !== null) {
        labelText = String(feature.get("Point No."));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: '#17252A', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}), fill: new ol.style.Fill({color: '#F4D35E'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
