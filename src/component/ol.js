import React from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import BingMaps from 'ol/source/BingMaps';
import { fromLonLat, toLonLat } from 'ol/proj';
import {defaults} from 'ol/control';

class OpenLayers extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.loc[0];
        this.lng = props.loc[1];
        this.auth = props.auth;
    }

    componentDidMount(){
        const layer = new TileLayer({
            visible: true,
            preload: Infinity,
            source: new BingMaps({
                key: this.auth,
                imagerySet: 'Aerial'
            })
        })
        const views = new View({
            center: fromLonLat([this.lng, this.lat]),
            zoom: 17,
            maxZoom: 18
        })

        const map = new Map({
            layers: [layer],
            view: views,
            target: 'map',
            controls: defaults({
                zoom: false,
                attribution: false
            })
        })

        map.on('singleclick',event => {
            console.log(toLonLat(event.coordinate));
        })
    }

    render() {
        return <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    }
}

export default OpenLayers;