import React from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import SceneView from '@arcgis/core/views/SceneView';

class ArcGis extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.loc[0];
        this.lng = props.loc[1];
    }
    componentDidMount() {
        const map = new Map({
            basemap: 'satellite',
            ground: "world-elevation"
        })

        const view = new SceneView({
            container: 'viewDiv',
            map: map,
            center: [this.lng, this.lat],
            zoom: 17
        })

        const basemapGallery = new BasemapGallery({
            view: view,
            source: {
                portal: {
                    url: "https://www.arcgis.com",
                    useVectorBasemaps: true // Load vector tile basemaps
                }
            }
        });

        view.ui.add(basemapGallery, "top-right");

    }

    render() {
        return <div id="viewDiv"></div>
    }
}

export default ArcGis;