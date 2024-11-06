import { Map, Marker} from "@vis.gl/react-google-maps";
import { useState } from "react";
import FormSection from "../components/FormSection";

export default function Contact() {
  const [markerLocation] = useState({
    lat: -6.200000,
    lng: 106.816666,
  });

  return (
    <div>
      <FormSection />
      
      <div className="mt-16">
        <Map
          style={{ width: '100%', height: 600 }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={"cooperative"}
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </div>
    </div>
  )
}