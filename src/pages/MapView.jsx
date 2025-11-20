import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, LayersControl, CircleMarker } from 'react-leaflet';
import Navbar from '../components/Navbar';
import PropertySideModal from '../components/PropertySideModal';
import { PROPERTIES } from '../data/mockData';
import L from 'leaflet';


const MapView = () => {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      {/* Map Container - Full height minus navbar */}
      <div className="flex-1 relative">
        <MapContainer
          center={[19.0760, 72.8777]} // Mumbai coordinates
          zoom={9}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer name="Standard">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer checked name="Satellite">
              <React.Fragment>
                <TileLayer
                  attribution='&copy; Esri'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
                  zIndex={1000}
                />
              </React.Fragment>
            </LayersControl.BaseLayer>
          </LayersControl>
          
          {PROPERTIES.map((property) => (
            <CircleMarker
              key={property.id}
              center={[property.location.lat, property.location.lng]}
              pathOptions={{
                color: property.premium ? "#F59E0B" : "#10B981",
                fillColor: property.premium ? "#F59E0B" : "#10B981",
                fillOpacity: 0.8,
              }}
              radius={8}
              eventHandlers={{
                click: () => handleMarkerClick(property),
              }}
            />
          ))}
        </MapContainer>

        {/* Property Details Modal */}
        <PropertySideModal 
          property={selectedProperty} 
          onClose={closeModal}
          onNavigate={(id) => navigate(`/property/${id}`)}
        />
      </div>
    </div>
  );
};

export default MapView;
