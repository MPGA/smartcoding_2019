var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Extractedattribute_1 = new ol.format.GeoJSON();
var features_Extractedattribute_1 = format_Extractedattribute_1.readFeatures(json_Extractedattribute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extractedattribute_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Extractedattribute_1.addFeatures(features_Extractedattribute_1);var lyr_Extractedattribute_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Extractedattribute_1, 
                style: style_Extractedattribute_1,
                title: '<img src="styles/legend/Extractedattribute_1.png" /> Extracted (attribute)'
            });var format_high_2 = new ol.format.GeoJSON();
var features_high_2 = format_high_2.readFeatures(json_high_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_high_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_high_2.addFeatures(features_high_2);var lyr_high_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_high_2, 
                style: style_high_2,
                title: '<img src="styles/legend/high_2.png" /> high'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Extractedattribute_1.setVisible(true);lyr_high_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Extractedattribute_1,lyr_high_2];
lyr_Extractedattribute_1.set('fieldAliases', {'OBJEKT_ID': 'OBJEKT_ID', 'OBJEKT_VER': 'OBJEKT_VER', 'DISTRKOD': 'DISTRKOD', 'DISTRNAMN': 'DISTRNAMN', 'GALLERFRAN': 'GALLERFRAN', });
lyr_high_2.set('fieldAliases', {'name': 'name', 'place': 'place', });
lyr_Extractedattribute_1.set('fieldImages', {'OBJEKT_ID': 'TextEdit', 'OBJEKT_VER': 'TextEdit', 'DISTRKOD': 'Range', 'DISTRNAMN': 'TextEdit', 'GALLERFRAN': 'DateTime', });
lyr_high_2.set('fieldImages', {'name': 'TextEdit', 'place': 'TextEdit', });
lyr_Extractedattribute_1.set('fieldLabels', {'OBJEKT_ID': 'no label', 'OBJEKT_VER': 'no label', 'DISTRKOD': 'no label', 'DISTRNAMN': 'no label', 'GALLERFRAN': 'no label', });
lyr_high_2.set('fieldLabels', {'name': 'header label', 'place': 'header label', });
lyr_high_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});