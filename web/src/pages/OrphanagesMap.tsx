import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapIcon from "../utils/mapIcon";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua</p>
        </header>

        <footer>
          <strong>Caicó</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </aside>

      <Map
        center={[-6.463171316529845, -37.09868598869861]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.name}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minwidth={240}
                maxwidth={240}
                className="map-popup"
              >
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={32} color="#FFF"></FiArrowRight>
                </Link>
              </Popup>
            </Marker>
          );
        })}
        ;
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
