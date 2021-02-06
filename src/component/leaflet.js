import React from 'react';
import L from 'leaflet';

class Leaflet extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.loc[0];
        this.lng = props.loc[1];
    }

    componentDidMount() {
        const mymap = L.map('mapid').setView([this.lat, this.lng], 16);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mymap);

        function onMapClick(e) {
            console.log(e.latlng);
        }

        mymap.on('click', onMapClick);
    }
    render() {
        return (
            <div id="mapid"></div>
        )
    }
}

export default Leaflet;