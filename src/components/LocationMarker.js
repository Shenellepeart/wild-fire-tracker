import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick} lat={lat} lng={lng}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
