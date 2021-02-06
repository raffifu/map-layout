function Drawer() {
    return (
        <>
            {/* Header */}
            <div className="drawer" style={{ left: '20px', top: '20px', right: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ backgroundColor: 'white', width: '400px', height: '40px'}}></div>
                <div style={{ backgroundColor: 'white', width: '300px', height: '40px'}}></div>
                <div style={{ backgroundColor: 'white', width: '350px', height: '40px'}}></div>
            </div>
            {/* Side Pane */}
            <div className="drawer" style={{ left: '20px', top: '80px', width: '50px', height: '300px', backgroundColor: 'white' }}></div>
            {/* Zoom */}
            <div className="drawer" style={{ left: '20px', bottom: '20px', width: '50px', height: '100px', backgroundColor: 'white'}}></div>
            {/* Avionic Indicator */}
            <div className="drawer" style={{ right: '20px', bottom: '20px', display: 'flex', gap: '10px'}}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
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