import React from 'react';
import './LeafletTest.css';
// import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer';
// import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer';
import { Circle, CircleMarker, Polygon, Polyline, Popup, Rectangle, Tooltip } from 'react-leaflet';

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet';

const LeafletTest = () => {

    // const center = [51.505, -0.09]
    const center = [51.505, -0.09]

    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

    const multiPolyline = [
        [
            [51.5, -0.1],
            [51.5, -0.12],
            [51.52, -0.12],
        ],
        [
            [51.5, -0.05],
            [51.5, -0.06],
            [51.52, -0.06],
        ],
    ]

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

    const multiPolygon = [
        [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13],
        ],
        [
            [51.51, -0.05],
            [51.51, -0.07],
            [51.53, -0.07],
        ],
    ]

    const rectangle = [
        [51.48, -0.08],
        [51.49, -0.05],
    ]

    const fillBlueOptions = { fillColor: 'blue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }



    return (
        <div>
            <h1>Hello LeafletTest</h1>
            <MapContainer onMapClick className="my-leaflet-div my-map2" center={center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={center} pathOptions={fillBlueOptions} radius={200} >
                    <Tooltip className='my-tooltip1' direction="bottom" offset={[0, 20]} opacity={.8} permanent>
                        <h5 className='hello'> Hello</h5>
                        permanent Tooltip for
                        Rectangle
                    </Tooltip>
                    <Popup>Popup in CircleMarkerQQQQQQQQQQQQ</Popup>
                </Circle>
                {<CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
                    <Tooltip>Tooltip for CircleMarker</Tooltip>
                    <Popup>Popup in CircleMarkerQQQQQQQQQQQQ</Popup>
                </CircleMarker>}

                <Polyline pathOptions={limeOptions} positions={polyline} />
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                <Polygon pathOptions={purpleOptions} positions={polygon} />
                <Polygon pathOptions={purpleOptions} positions={multiPolygon}>
                    <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
                </Polygon>
                {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
            </MapContainer>
        </div>
    );
};

export default LeafletTest;