import type { Car } from "../types";

const LUXURY_BRANDS = [
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Porsche",
  "Lexus",
  "Jaguar",
  "Land Rover",
  "Maserati",
  "Bentley",
  "Rolls-Royce",
  "Aston Martin",
  "Ferrari",
  "Lamborghini",
  "Tesla",
];

const AWD_DRIVES = ["All-Wheel Drive", "4-Wheel Drive", "4-Wheel or All-Wheel Drive"];

const getPrice = (car: Car): number => {
  const basePrice = 800;

  // Yıl faktörü — yeni araç daha pahalı
  const carYear = parseInt(car.year, 10);
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - carYear);
  const yearMultiplier = Math.max(0.5, 1 - age * 0.05);

  // Motor hacmi (litre)
  const enginePrice = car.displ * 250;

  // Silindir sayısı (4 baz alındı)
  const cylinderMultiplier = 1 + Math.max(0, car.cylinders - 4) * 0.15;

  // Çekiş tipi
  const driveMultiplier = AWD_DRIVES.includes(car.drive) ? 1.2 : 1.0;

  // Araç sınıfı
  const vclass = car.vclass.toLowerCase();
  let classMultiplier = 1.0;
  if (vclass.includes("sport utility") || vclass.includes("utility")) {
    classMultiplier = 1.25;
  } else if (vclass.includes("sport")) {
    classMultiplier = 1.4;
  } else if (vclass.includes("luxury") || vclass.includes("premium")) {
    classMultiplier = 1.35;
  } else if (vclass.includes("truck") || vclass.includes("van")) {
    classMultiplier = 1.15;
  } else if (vclass.includes("minicompact") || vclass.includes("subcompact")) {
    classMultiplier = 0.85;
  }

  // Yakıt tipi
  const fuel = car.fueltype.toLowerCase();
  let fuelMultiplier = 1.0;
  if (fuel.includes("electric")) fuelMultiplier = 1.25;
  else if (fuel.includes("premium")) fuelMultiplier = 1.15;
  else if (fuel.includes("diesel")) fuelMultiplier = 1.1;

  // Turbo / Supercharger
  const forcedInduction = car.tcharger === "T" || car.scharger === "S" ? 1.1 : 1.0;

  // Lüks marka primi
  const brandMultiplier = LUXURY_BRANDS.includes(car.make) ? 1.4 : 1.0;

  // Yakıt tüketimi cezası — düşük mpg = pahalı yakıt = daha pahalı kiralama
  const efficiencyMultiplier = car.comb08 > 0 && car.comb08 < 20 ? 1.1 : 1.0;

  const total =
    (basePrice + enginePrice) *
    yearMultiplier *
    cylinderMultiplier *
    driveMultiplier *
    classMultiplier *
    fuelMultiplier *
    forcedInduction *
    brandMultiplier *
    efficiencyMultiplier;

  // En yakın 10 TL'ye yuvarla
  return Math.round(total / 10) * 10;
};

export default getPrice;
