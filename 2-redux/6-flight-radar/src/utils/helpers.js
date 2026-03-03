import { divIcon } from "leaflet";

// Harita üzerinde ekrana basılacak iconu oluştur
export const getIcon = (flight) =>
  divIcon({
    html: `
      <img src="/plane.svg" style="width:30px; transform: rotate(${flight.track - 45}deg)"/>
    `,
    iconSize: [30, 30],
    className: "marker",
  });
