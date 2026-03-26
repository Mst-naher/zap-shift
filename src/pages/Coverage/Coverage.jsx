import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const [activeDistrict, setActiveDistrist] = useState(null);

  const position = [23.685, 90.3563];
  const ServiceCenters = useLoaderData();
  const mapRef = useRef(null);
  // console.log(ServicesCenters);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = ServiceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    console.log(district);
    if (district) {
      const coord = [district.latitude, district.longitude];
      // console.log(district, coord);
      mapRef.current.flyTo(coord, 14);
      setActiveDistrist(district.district);
      setTimeout(() => {
        mapRef.current[district.district]?.openPopup();
      }, 300);
    }
  };

  return (
    <div>
      <h2 className="text-5xl">We are available in 64 districts</h2>
      <div>
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="text"
              name="location"
              placeholder="Search district..."
            />
          </label>
        </form>
      </div>
      <div className="border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {ServiceCenters.map((center, index) => (
            <Marker
              // ref={(ref) => {
              //   console.log(mapRef);
              //   if (ref) {
              //     mapRef.current[center.district] = ref;
              //   }
              // }}
              key={index}
              position={[center.latitude, center.longitude]}
            >
              {console.log(center)}
              {/* {activeDistrict === center.district && ( */}
              <Popup autoOpen>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
              {/* )} */}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
