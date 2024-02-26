ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:21037").setExtent([565009.202207, 9546740.838734, 580470.042170, 9558536.887003]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1metresealevelrise_1 = new ol.format.GeoJSON();
var features_1metresealevelrise_1 = format_1metresealevelrise_1.readFeatures(json_1metresealevelrise_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_1metresealevelrise_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1metresealevelrise_1.addFeatures(features_1metresealevelrise_1);
var lyr_1metresealevelrise_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1metresealevelrise_1, 
                style: style_1metresealevelrise_1,
                popuplayertitle: "1 metre sea level rise",
                interactive: true,
                title: '<img src="styles/legend/1metresealevelrise_1.png" /> 1 metre sea level rise'
            });
var format_2metressealevelrise_2 = new ol.format.GeoJSON();
var features_2metressealevelrise_2 = format_2metressealevelrise_2.readFeatures(json_2metressealevelrise_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_2metressealevelrise_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2metressealevelrise_2.addFeatures(features_2metressealevelrise_2);
var lyr_2metressealevelrise_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2metressealevelrise_2, 
                style: style_2metressealevelrise_2,
                popuplayertitle: "2 metres sea level rise",
                interactive: true,
                title: '<img src="styles/legend/2metressealevelrise_2.png" /> 2 metres sea level rise'
            });
var format_4metressealevelrise_3 = new ol.format.GeoJSON();
var features_4metressealevelrise_3 = format_4metressealevelrise_3.readFeatures(json_4metressealevelrise_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_4metressealevelrise_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4metressealevelrise_3.addFeatures(features_4metressealevelrise_3);
var lyr_4metressealevelrise_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4metressealevelrise_3, 
                style: style_4metressealevelrise_3,
                popuplayertitle: "4 metres sea level rise",
                interactive: true,
                title: '<img src="styles/legend/4metressealevelrise_3.png" /> 4 metres sea level rise'
            });
var format_6metresealevelrise_4 = new ol.format.GeoJSON();
var features_6metresealevelrise_4 = format_6metresealevelrise_4.readFeatures(json_6metresealevelrise_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_6metresealevelrise_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6metresealevelrise_4.addFeatures(features_6metresealevelrise_4);
var lyr_6metresealevelrise_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6metresealevelrise_4, 
                style: style_6metresealevelrise_4,
                popuplayertitle: "6 metre sea level rise",
                interactive: true,
                title: '<img src="styles/legend/6metresealevelrise_4.png" /> 6 metre sea level rise'
            });
var format_8metressealevelrise_5 = new ol.format.GeoJSON();
var features_8metressealevelrise_5 = format_8metressealevelrise_5.readFeatures(json_8metressealevelrise_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_8metressealevelrise_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8metressealevelrise_5.addFeatures(features_8metressealevelrise_5);
var lyr_8metressealevelrise_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8metressealevelrise_5, 
                style: style_8metressealevelrise_5,
                popuplayertitle: "8 metres sea level rise",
                interactive: true,
                title: '<img src="styles/legend/8metressealevelrise_5.png" /> 8 metres sea level rise'
            });
var format_10metressealevelrise_6 = new ol.format.GeoJSON();
var features_10metressealevelrise_6 = format_10metressealevelrise_6.readFeatures(json_10metressealevelrise_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_10metressealevelrise_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10metressealevelrise_6.addFeatures(features_10metressealevelrise_6);
var lyr_10metressealevelrise_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_10metressealevelrise_6, 
                style: style_10metressealevelrise_6,
                popuplayertitle: "10 metres sea level rise",
                interactive: true,
                title: '<img src="styles/legend/10metressealevelrise_6.png" /> 10 metres sea level rise'
            });
var format_20metresealevelrise_7 = new ol.format.GeoJSON();
var features_20metresealevelrise_7 = format_20metresealevelrise_7.readFeatures(json_20metresealevelrise_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21037'});
var jsonSource_20metresealevelrise_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20metresealevelrise_7.addFeatures(features_20metresealevelrise_7);
var lyr_20metresealevelrise_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20metresealevelrise_7, 
                style: style_20metresealevelrise_7,
                popuplayertitle: "20 metre sea level rise",
                interactive: true,
                title: '<img src="styles/legend/20metresealevelrise_7.png" /> 20 metre sea level rise'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1metresealevelrise_1.setVisible(true);lyr_2metressealevelrise_2.setVisible(true);lyr_4metressealevelrise_3.setVisible(true);lyr_6metresealevelrise_4.setVisible(true);lyr_8metressealevelrise_5.setVisible(true);lyr_10metressealevelrise_6.setVisible(true);lyr_20metresealevelrise_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1metresealevelrise_1,lyr_2metressealevelrise_2,lyr_4metressealevelrise_3,lyr_6metresealevelrise_4,lyr_8metressealevelrise_5,lyr_10metressealevelrise_6,lyr_20metresealevelrise_7];
lyr_1metresealevelrise_1.set('fieldAliases', {'Area': 'Area', 'Label_2': 'Label_2', });
lyr_2metressealevelrise_2.set('fieldAliases', {'Area': 'Area', 'Label_2': 'Label_2', });
lyr_4metressealevelrise_3.set('fieldAliases', {'Area': 'Area', 'Label_2': 'Label_2', });
lyr_6metresealevelrise_4.set('fieldAliases', {'Area': 'Area', 'Label_2': 'Label_2', });
lyr_8metressealevelrise_5.set('fieldAliases', {'Area': 'Area', 'Label_2': 'Label_2', });
lyr_10metressealevelrise_6.set('fieldAliases', {'Area': 'Area', 'Label_2': 'Label_2', });
lyr_20metresealevelrise_7.set('fieldAliases', {'Labe_2': 'Labe_2', 'Area': 'Area', });
lyr_1metresealevelrise_1.set('fieldImages', {'Area': 'TextEdit', 'Label_2': 'TextEdit', });
lyr_2metressealevelrise_2.set('fieldImages', {'Area': 'TextEdit', 'Label_2': 'TextEdit', });
lyr_4metressealevelrise_3.set('fieldImages', {'Area': 'TextEdit', 'Label_2': 'TextEdit', });
lyr_6metresealevelrise_4.set('fieldImages', {'Area': 'TextEdit', 'Label_2': 'TextEdit', });
lyr_8metressealevelrise_5.set('fieldImages', {'Area': 'TextEdit', 'Label_2': 'TextEdit', });
lyr_10metressealevelrise_6.set('fieldImages', {'Area': 'TextEdit', 'Label_2': 'TextEdit', });
lyr_20metresealevelrise_7.set('fieldImages', {'Labe_2': 'TextEdit', 'Area': 'TextEdit', });
lyr_1metresealevelrise_1.set('fieldLabels', {'Area': 'hidden field', 'Label_2': 'no label', });
lyr_2metressealevelrise_2.set('fieldLabels', {'Area': 'hidden field', 'Label_2': 'no label', });
lyr_4metressealevelrise_3.set('fieldLabels', {'Area': 'hidden field', 'Label_2': 'no label', });
lyr_6metresealevelrise_4.set('fieldLabels', {'Area': 'hidden field', 'Label_2': 'no label', });
lyr_8metressealevelrise_5.set('fieldLabels', {'Area': 'hidden field', 'Label_2': 'no label', });
lyr_10metressealevelrise_6.set('fieldLabels', {'Area': 'hidden field', 'Label_2': 'no label', });
lyr_20metresealevelrise_7.set('fieldLabels', {'Labe_2': 'no label', 'Area': 'hidden field', });
lyr_20metresealevelrise_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});