import React from 'react';

class BingMaps extends React.Component {
    constructor(props) {
        super(props);
        this.lat = props.loc[0];
        this.lng = props.loc[1];
        this.auth = props.auth;
        this.insertScript();
    }

    insertScript() {
        const script = document.createElement('script');

        script.src = `http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${this.auth}`;
        script.async = true;

        document.body.appendChild(script);

        const control = document.createElement('script');

        control.innerText = `
            function GetMap(){
                const map = new Microsoft.Maps.Map('#myMap', {
                    center: new Microsoft.Maps.Location(${this.lat}, ${this.lng}),
                    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
                    labelOverlay: Microsoft.Maps.LabelOverlay.hidden,
                    zoom: 17
                });
                
                Microsoft.Maps.Events.addHandler(map, 'click', event => {
                    console.log(event.location);
                });
            }
        `;

        document.body.appendChild(control);
    }

    render() {
        return <div id="myMap" className="mapBing"></div>
    }
}

export default BingMaps;