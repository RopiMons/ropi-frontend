import React, {Component} from 'react';
import {Marker, Popup, TileLayer} from 'react-leaflet';


export default class MyMap extends Component {
    state = {
        center: {
            lat: 50.4460,
            lng: 3.9269,
        },
        marker: {
            lat: 50.4460,
            lng: 3.9269,
        },
        zoom: 13,
        draggable: true,
    }

    toggleDraggable = () => {
        this.setState({draggable: !this.state.draggable});
    }

    updateMarker = (e) => {
        // const marker = e.marker;
        this.setState({
            marker: e.marker.getLatLng(),
        });
        console.log(e.marker.getLatLng());
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng];
        const markerPosition = [this.state.marker.lat, this.state.marker.lng];
        return (
            <div className="map-root">
                <Map center={position} zoom={this.state.zoom} style={{
                    height: "400px"
                }}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        draggable={true}
                        onDragend={this.updatePosition}
                        position={markerPosition}
                        animate={true}
                        ref={this.refmarker}>
                        <Popup minWidth={90}>
                          <span onClick={this.toggleDraggable}>
                            {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
                          </span>
                        </Popup>
                    </Marker>
                </Map>
                <style jsx>{`
                .map-root {
                  height: 100%;
                }
                .leaflet-container {
                 height: 400px !important;
                 width: 80%;
                 margin: 0 auto;
               }
           `}
                </style>
            </div>
        );
    }
}
