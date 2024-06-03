ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([264608.079898, 6608174.612717, 487115.810114, 6768853.436766]);
var wms_layers = [];


        var lyr_Backgroundmap_0 = new ol.layer.Tile({
            'title': 'Background map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Flyingsquirrelencounters_1 = new ol.format.GeoJSON();
var features_Flyingsquirrelencounters_1 = format_Flyingsquirrelencounters_1.readFeatures(json_Flyingsquirrelencounters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Flyingsquirrelencounters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flyingsquirrelencounters_1.addFeatures(features_Flyingsquirrelencounters_1);
var lyr_Flyingsquirrelencounters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flyingsquirrelencounters_1, 
                style: style_Flyingsquirrelencounters_1,
                popuplayertitle: "Flying squirrel encounters",
                interactive: true,
    title: 'Flying squirrel encounters<br />\
    <img src="styles/legend/Flyingsquirrelencounters_1_0.png" /> 1 - 10<br />\
    <img src="styles/legend/Flyingsquirrelencounters_1_1.png" /> 10 - 50<br />\
    <img src="styles/legend/Flyingsquirrelencounters_1_2.png" /> 50 - 200<br />\
    <img src="styles/legend/Flyingsquirrelencounters_1_3.png" /> 200 - 760<br />\
    <img src="styles/legend/Flyingsquirrelencounters_1_4.png" /> 760 - 1336<br />'
        });

lyr_Backgroundmap_0.setVisible(true);lyr_Flyingsquirrelencounters_1.setVisible(true);
var layersList = [lyr_Backgroundmap_0,lyr_Flyingsquirrelencounters_1];
lyr_Flyingsquirrelencounters_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Number of encounters': 'Number of encounters', 'Relative share of all encounters': 'Relative share of all encounters', });
lyr_Flyingsquirrelencounters_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'Number of encounters': 'TextEdit', 'Relative share of all encounters': 'TextEdit', });
lyr_Flyingsquirrelencounters_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'Number of encounters': 'inline label - always visible', 'Relative share of all encounters': 'inline label - always visible', });
lyr_Flyingsquirrelencounters_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});