import 'ol/ol.css';
import OpenLayers from './component/ol';
import Drawer from './component/Drawer'

function App() {
    const location = [-7.770929602108119, 110.37764310836793]
    const key = '<REDACTED>'
    
    return (
        <>
            <Drawer/>
            <OpenLayers auth={key} loc={location} />
        </>
    )
}

export default App