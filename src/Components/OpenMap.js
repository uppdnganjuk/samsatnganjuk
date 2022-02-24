import 'ol/ol.css';
import React from 'react';
import './OpenMap.css';
import {FaSearchLocation} from 'react-icons/fa'
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import MultiPoint from 'ol/geom/MultiPoint';
import TileLayer from 'ol/layer/Tile';
import Text from 'ol/style/Text';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import Area from '../Sources/Area.json';
import Geolocation from 'ol/Geolocation';
import GeoJSON from 'ol/format/GeoJSON';
import GeoData from './map.json'
import Feature from 'ol/Feature';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';

let map;
let geolocation;
let view = new View({
    center:fromLonLat([111.910515,-7.599122],'EPSG:3857'),
    zoom : 15  
})
const image = new CircleStyle({
    radius:105,
    fill: null,
    stroke: new Stroke({color: 'red', width: 1}),
  });
const style = function(feature){
    const point = new Style({
        image: new CircleStyle({stroke: new Stroke({color:'red',width:3}), radius:2},),
        fill:new Fill({color:"blue"}),
        text: new Text({text:feature.get('NamaLayanan'),offsetY:20,scale:1.2,stroke:new Stroke({width:0.5})})
    })
    const radiusBorder = new Style({
        image: new CircleStyle({stroke: new Stroke({color:'orange',width:1}), radius:50},)
    })
    return [point,radiusBorder]
}

let haha = {
    makan : "Ivan"
}
haha.makan = function (feature){
    return "Keren"
}
let vectorLayer = new VectorLayer({
    style:style, 
    source: new VectorSource({
        features: new GeoJSON({featureProjection: 'EPSG:3857',
        dataProjection: 'EPSG:4326'}).readFeatures(GeoData)
      })
})
class OpenMap extends React.Component {
    componentDidMount(){
        map = new Map({
                layers:[new TileLayer({source:new OSM()}),vectorLayer],
                target:'map',
                view: view
            })
        console.log(view.getCenter())
        geolocation = new Geolocation({
            trackingOptions:{enableHighAccuracy:true},
            projection: view.getProjection()
        })
        geolocation.setTracking(true)
    }

    findNearest(){
        view.setCenter(geolocation.getPosition())
        
    } 
    render(){
        return (
        <div className="OpenMap">
            <div>
                <p>Lokasi terdekat: </p>
                <div onClick={()=>this.findNearest()} id="nearestButton">
                    <p>Pembayaran terdekat <FaSearchLocation id='searchloc'/></p></div>
            </div>
            <div id='map'></div>
        </div>
        );
    }
}

export default OpenMap;
