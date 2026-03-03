import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { getIcon } from "../../utils/helpers";

const Map = () => {
  const { flights } = useSelector((store) => store.flightReducer);

  return (
    <MapContainer className="h-[calc(100vh-63px)]" center={[38.948299, 35.424398]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker position={[flight.lat, flight.lon]} icon={getIcon(flight)}>
          <Popup>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Kod: {flight.callsign}</span>
              <button className="px-4 py-1 border rounded-sm hover:bg-black/10">Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
