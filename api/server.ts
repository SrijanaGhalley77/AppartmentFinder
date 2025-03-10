// server.ts
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Mock data endpoints
app.get("/api/v1/locations", (_, res) => {
  setTimeout(() => {
    const locations = [
      {
        id: "sf",
        name: "San Francisco",
        coordinates: { lat: 37.7749, lng: -122.4194 },
        apartments: Array.from({ length: 10 }, (_, i) => ({
          id: `sf-${i}`,
          title: `SF Apartment ${i}`,
          locationId: "sf",
          price: Math.floor(Math.random() * 2000) + 1500,
          beds: Math.floor(Math.random() * 3) + 1,
          baths: Math.floor(Math.random() * 2) + 1,
          sqft: Math.floor(Math.random() * 800) + 400,
          description: `Beautiful apartment in San Francisco with modern amenities`,
          amenities: ["pool", "gym", "parking"],
          images: [
            { url: `https://picsum.photos/400/300?random=${i}` },
            { url: `https://picsum.photos/400/300?random=${i + 100}` },
          ],
        })),
      },
      {
        id: "ny",
        name: "New York City",
        coordinates: { lat: 40.7128, lng: -74.006 },
        apartments: Array.from({ length: 10 }, (_, i) => ({
          id: `ny-${i}`,
          title: `NYC Apartment ${i}`,
          locationId: "ny",
          price: Math.floor(Math.random() * 2500) + 2000,
          beds: Math.floor(Math.random() * 3) + 1,
          baths: Math.floor(Math.random() * 2) + 1,
          sqft: Math.floor(Math.random() * 700) + 350,
          description: `Luxury apartment in Manhattan with great views`,
          amenities: ["doorman", "roof deck", "laundry"],
          images: [
            { url: `https://picsum.photos/400/300?random=${i + 200}` },
            { url: `https://picsum.photos/400/300?random=${i + 300}` },
          ],
        })),
      },
      {
        id: "la",
        name: "Los Angeles",
        coordinates: { lat: 34.0522, lng: -118.2437 },
        apartments: Array.from({ length: 10 }, (_, i) => ({
          id: `la-${i}`,
          title: `LA Apartment ${i}`,
          locationId: "la",
          price: Math.floor(Math.random() * 1800) + 1200,
          beds: Math.floor(Math.random() * 3) + 1,
          baths: Math.floor(Math.random() * 2) + 1,
          sqft: Math.floor(Math.random() * 900) + 400,
          description: `Modern apartment in Downtown LA`,
          amenities: ["pool", "gym", "parking"],
          images: [
            { url: `https://picsum.photos/400/300?random=${i + 400}` },
            { url: `https://picsum.photos/400/300?random=${i + 500}` },
          ],
        })),
      },
      {
        id: "ch",
        name: "Chicago",
        coordinates: { lat: 41.8781, lng: -87.6298 },
        apartments: Array.from({ length: 10 }, (_, i) => ({
          id: `ch-${i}`,
          title: `Chicago Apartment ${i}`,
          locationId: "ch",
          price: Math.floor(Math.random() * 1600) + 1000,
          beds: Math.floor(Math.random() * 3) + 1,
          baths: Math.floor(Math.random() * 2) + 1,
          sqft: Math.floor(Math.random() * 800) + 350,
          description: `Lakefront apartment in Chicago`,
          amenities: ["pool", "gym", "laundry"],
          images: [
            { url: `https://picsum.photos/400/300?random=${i + 600}` },
            { url: `https://picsum.photos/400/300?random=${i + 700}` },
          ],
        })),
      },
      {
        id: "se",
        name: "Seattle",
        coordinates: { lat: 47.6062, lng: -122.3321 },
        apartments: Array.from({ length: 10 }, (_, i) => ({
          id: `se-${i}`,
          title: `Seattle Apartment ${i}`,
          locationId: "se",
          price: Math.floor(Math.random() * 2000) + 1500,
          beds: Math.floor(Math.random() * 3) + 1,
          baths: Math.floor(Math.random() * 2) + 1,
          sqft: Math.floor(Math.random() * 700) + 350,
          description: `Tech district apartment with modern amenities`,
          amenities: ["coffee shop", "gym", "rooftop"],
          images: [
            { url: `https://picsum.photos/400/300?random=${i + 800}` },
            { url: `https://picsum.photos/400/300?random=${i + 900}` },
          ],
        })),
      },
    ];
    res.json({
      status: "success",
      data: locations,
    });
  }, 500);
});

app.get("/api/v1/apartments/:locationId", (req, res) => {
  setTimeout(() => {
    const location = locations.find((loc) => loc.id === req.params.locationId);
    if (!location) {
      return res
        .status(404)
        .json({ status: "error", message: "Location not found" });
    }
    res.json({
      status: "success",
      data: location.apartments,
    });
  }, 500);
});
