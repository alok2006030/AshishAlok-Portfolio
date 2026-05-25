import React, { useContext, useState } from "react";
import "./TravelMap.css";
import { themeContext } from "../../Context";
import { FaMapMarkerAlt, FaGlobeAsia } from "react-icons/fa";

const destinations = [
  {
    id: "patna",
    name: "Patna, Bihar, India",
    country: "India",
    x: 71.5,
    y: 46,
    year: "2018 – Present",
    note: "Home base — NIT Patna & roots",
    color: "#00ff9d",
  },
  {
    id: "delhi",
    name: "New Delhi, India",
    country: "India",
    x: 69,
    y: 44,
    year: "2019",
    note: "Capital visits & tech meetups",
    color: "#00e5ff",
  },
  {
    id: "up",
    name: "Uttar Pradesh, India",
    country: "India",
    x: 68.5,
    y: 52,
    year: "2022",
    note: "Historical sites & cultural heritage",
    color: "#ff2d95",
  },
  {
    id: "West Bengal",
    name: "West Bengal, India",
    country: "India",
    x: 73.5,
    y: 47,
    year: "2021",
    note: "Historical sites & cultural heritage",
    color: "#f5c32c",
  },
  {
    id: "mp",
    name: "Madhya Pradesh, India",
    country: "India",
    x: 62,
    y: 48,
    year: "2023",
    note: "Historical sites & cultural heritage",
    color: "#ff6b35",
  },
  {
    id: "maharashtra",
    name: "Maharashtra, India",
    country: "India",
    x: 78,
    y: 54,
    year: "2024",
    note: "Historical sites & cultural heritage",
    color: "#b14eff",
  },
  {
    id: "telangana",
    name: "Telangana, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Temples, street food, markets & Work Experience",
    color: "#4130b0ff",
  },
  {
    id: "andhar pradesh",
    name: "Andhar Pradesh, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Historical sites & cultural heritage",
    color: "#985c8eff",
  },
  {
    id: "tamil nadu",
    name: "Tamil Nadu, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Temples, street food, markets & Work Experience",
    color: "#af8a10ff",
  },
  {
    id: "karnataka",
    name: "Karnataka, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Temples, street food, markets & Work Experience",
    color: "#3a84b8ff",
  },
  {
    id: "odisha",
    name: "Odisha, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Temples, street food, markets & Work Experience",
    color: "#4f8b65ff",
  },
  {
    id: "jharkhand",
    name: "Jharkhand, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Temples, street food, markets & Work Experience",
    color: "#1b2066ff",
  },
  {
    id: "haryana",
    name: "Haryana, India",
    country: "India",
    x: 76,
    y: 50,
    year: "2023",
    note: "Temples, street food, markets & Work Experience",
    color: "#d1d11dff",
  },
];

const TravelMap = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [active, setActive] = useState(destinations[0]);

  return (
    <section
      className={`travel-map-section ${darkMode ? "dark" : "light"}`}
      id="travel-map"
    >
      <div className="travel-map-header">
        <FaGlobeAsia className="travel-map-icon" aria-hidden="true" />
        <h2 className="travel-map-title">Travel Map World</h2>
        <p className="travel-map-subtitle">
          Places I have explored — click a pin to see details
        </p>
      </div>

      <div className="travel-map-layout">
        <div
          className="travel-map-canvas"
          role="img"
          aria-label="World map with travel destinations"
        >
          <div className="map-glow map-glow-1" aria-hidden="true" />
          <div className="map-glow map-glow-2" aria-hidden="true" />
          <div className="map-glow map-glow-3" aria-hidden="true" />

          <img
            src={`${process.env.PUBLIC_URL}/world-map.svg`}
            alt=""
            className="world-map-img"
            loading="lazy"
          />

          {destinations.map((place) => (
            <button
              key={place.id}
              type="button"
              className={`map-pin ${active.id === place.id ? "active" : ""} ${
                place.wishlist ? "wishlist" : ""
              }`}
              style={{
                left: `${place.x}%`,
                top: `${place.y}%`,
                "--pin-color": place.color,
              }}
              onClick={() => setActive(place)}
              aria-label={`${place.name}${place.wishlist ? " (wishlist)" : ""}`}
              title={place.name}
            >
              <span className="pin-pulse" aria-hidden="true" />
              <FaMapMarkerAlt />
            </button>
          ))}
        </div>

        <aside className="travel-map-detail" aria-live="polite">
          <span
            className="detail-label"
            style={{ color: active.color }}
          >
            {active.wishlist ? "Wishlist" : "Visited"}
          </span>
          <h3>{active.name}</h3>
          <p className="detail-country">{active.country}</p>
          <p className="detail-year" style={{ color: active.color }}>
            {active.year}
          </p>
          <p className="detail-note">{active.note}</p>

          <ul className="destination-list">
            {destinations.map((place) => (
              <li key={place.id}>
                <button
                  type="button"
                  className={active.id === place.id ? "selected" : ""}
                  style={
                    active.id === place.id
                      ? {
                          borderColor: place.color,
                          boxShadow: `0 0 16px ${place.color}44`,
                        }
                      : undefined
                  }
                  onClick={() => setActive(place)}
                >
                  <FaMapMarkerAlt
                    aria-hidden="true"
                    style={{ color: place.color }}
                  />
                  <span>{place.name}</span>
                  {place.wishlist && (
                    <span className="wishlist-badge">Soon</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default TravelMap;
