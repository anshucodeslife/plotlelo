// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for default Leaflet marker icons missing in React
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow,
//     iconSize: [25, 41],
//     iconAnchor: [12, 41]
// });

// L.Marker.prototype.options.icon = DefaultIcon;

// // Custom Price Marker (The "Chip" style)
// const createCustomIcon = (price, isPremium) => {
//   return L.divIcon({
//     className: 'custom-marker',
//     html: `
//       <div style="
//         background-color: ${isPremium ? '#0f172a' : '#059669'};
//         color: white;
//         padding: 4px 8px;
//         border-radius: 6px;
//         font-weight: bold;
//         font-size: 12px;
//         border: 2px solid white;
//         box-shadow: 0 4px 6px rgba(0,0,0,0.3);
//         white-space: nowrap;
//         transform: translate(-50%, -50%);
//       ">
//         ${price}
//         <div style="
//           position: absolute;
//           bottom: -5px;
//           left: 50%;
//           transform: translateX(-50%) rotate(45deg);
//           width: 8px;
//           height: 8px;
//           background-color: ${isPremium ? '#0f172a' : '#059669'};
//         "></div>
//       </div>
//     `
//   });
// };

// const RealMap = ({ properties }) => {
//   // Center map on the first property or a default location (Hyderabad)
//   const center = properties.length > 0
//     ? [properties[0].location.lat, properties[0].location.lng]
//     : [17.3850, 78.4867];

//   return (
//     <MapContainer center={center} zoom={9} scrollWheelZoom={true} className="h-full w-full z-0">
//       {/* The Map Tiles (Skin) - Using a Clean Light Theme */}
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//       />

//       {/* Render Markers */}
//       {properties.map((prop) => (
//         <Marker
//           key={prop.id}
//           position={[prop.location.lat, prop.location.lng]}
//           icon={createCustomIcon(prop.price.displayTotal, prop.premium)}
//         >
//           <Popup className="custom-popup">
//             <div className="w-48">
//               <img src={prop.images[0]} alt="land" className="w-full h-24 object-cover rounded-t-lg" />
//               <div className="p-2">
//                 <h3 className="font-bold text-slate-800 text-sm">{prop.title}</h3>
//                 <p className="text-emerald-700 font-bold text-sm mt-1">{prop.price.displayTotal}</p>
//                 <a href="#" className="text-xs text-blue-500 underline mt-1 block">View Details</a>
//               </div>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default RealMap;

import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Price Chip
const createCustomIcon = (price, isPremium) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${isPremium ? "#0f172a" : "#059669"};
        color: white;
        padding: 4px 8px;
        border-radius: 6px;
        font-weight: bold;
        font-size: 12px;
        border: 2px solid white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        white-space: nowrap;
        transform: translate(-50%, -50%);
      ">
        ${price}
        <div style="
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background-color: ${isPremium ? "#0f172a" : "#059669"};
        "></div>
      </div>
    `,
  });
};

const RealMap = ({ properties, onMarkerClick }) => {
  const center =
    properties.length > 0
      ? [properties[0].location.lat, properties[0].location.lng]
      : [19.0760, 72.8777]; // Mumbai coordinates

  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={true}
      className="h-full w-full z-0"
    >
      {/* Top Right Control to switch views */}
      <LayersControl position="topright">
        {/* 1. Clean Light Map */}
        <LayersControl.BaseLayer name="Clean Map">
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>

        {/* 2. SATELLITE HYBRID (The 1acre.in look) */}
        <LayersControl.BaseLayer checked name="Satellite Hybrid">
          <React.Fragment>
            {/* Layer A: The Satellite Image (Esri) */}
            <TileLayer
              attribution="&copy; Esri"
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            {/* Layer B: The Labels/Names Overlay (CartoDB) - FIXED URL */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
              zIndex={1000}
            />
          </React.Fragment>
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Render Markers */}
      {properties.map((prop) => (
        // Alternative: Use this instead of <Marker> if you want dots
        <CircleMarker
          key={prop.id}
          center={[prop.location.lat, prop.location.lng]}
          pathOptions={{
            color: prop.premium ? "#F59E0B" : "#10B981", // Gold for premium, Green for others
            fillColor: prop.premium ? "#F59E0B" : "#10B981",
            fillOpacity: 0.8,
          }}
          radius={8} // Size of the dot
          eventHandlers={{
            click: () => onMarkerClick && onMarkerClick(prop),
          }}
        >
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default RealMap;
