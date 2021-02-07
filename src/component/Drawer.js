function Drawer() {
    return (
        <>
            <div className="header">
                <div style={{ backgroundColor: 'white', width: '400px', height: '40px'}}></div>
                <div style={{ backgroundColor: 'white', width: '300px', height: '40px'}}></div>
                <div style={{ backgroundColor: 'white', width: '350px', height: '40px'}}></div>
            </div>

            <div className="side-pane" style={{ width: '50px', height: '300px', backgroundColor: 'white' }}></div>

            <div className="map-control" style={{ width: '50px', height: '100px', backgroundColor: 'white'}}></div>

            <div className="bottom-indicator">
                <div className="avionic">
                    <div style={{ backgroundColor: 'white', width: '60px', height: '30px'}}></div>
                    <div style={{ backgroundColor: 'white', width: '60px', height: '30px'}}></div>
                    <div style={{ backgroundColor: 'white', width: '60px', height: '30px'}}></div>
                    <div style={{ backgroundColor: 'white', width: '60px', height: '30px'}}></div>
                </div>
                <div style={{ width: '400px', height: '200px', backgroundColor: 'white'}}></div>
            </div>
        </>
    )
}

export default Drawer