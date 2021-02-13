import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from '../../public/images/ropi_Logo_R.png'

const iconPerson = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [26, 38],
    iconAnchor: [13, 19],
    popupAnchor: [10, -20],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

const Map = ({commerces}) => {
    return (
        <MapContainer center={[50.46168, 3.92695]} zoom={13} scrollWheelZoom={false}
                      style={{height: 400, width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {commerces.map((commerce, key) => {
                return (
                    <Marker key={key} position={[commerce.lat, commerce.lon]} icon={iconPerson}>
                        <Popup>
                            {commerce.slogan}
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

export default Map
