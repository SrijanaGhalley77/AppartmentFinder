import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

// Types
interface Apartment {
  id: string;
  title: string;
  locationId: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  amenities: string[];
  images: Array<{ url: string }>;
}

interface LocationData {
  id: string;
  name: string;
  apartments: Apartment[];
}

interface CategoryProps {
  onApartmentPress?: (apartment: Apartment) => void;
}

const Category = ({ onApartmentPress = () => {} }: CategoryProps) => {
  const [locations, setLocations] = React.useState<LocationData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("1. Starting API call");
        const response = await fetch(
          "https://dummyjson.com/c/ca8f-756c-40af-b116",
        );
        console.log("2. Response received");
        console.log("Response status:", response.status);
        console.log("Response ok:", response.ok);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("3. Parsing response");
        const data = await response.json();
        console.log("4. Data received:", data);
        if (!data || !data.locations) {
          console.log("5. Data structure error: Invalid response format");
          throw new Error("Invalid response format");
        }
        console.log("6. Setting locations");
        console.log("Number of locations:", data.locations.length);
        console.log("First location details:", data.locations[0]);
        setLocations(data.locations);
      } catch (err) {
        console.log(
          "Error:",
          err instanceof Error ? err.message : "Unknown error",
        );
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        console.log("7. Setting loading to false");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    console.log("8. Loading state - locations length:", locations.length);
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.cartTitle}>Loading...</Text>
        <Text style={styles.debugInfo}>Debug State: Loading</Text>
      </View>
    );
  }

  if (error) {
    console.log("9. Error state - locations length:", locations.length);
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.debugInfo}>Debug State: Error</Text>
      </View>
    );
  }

  console.log("10. Normal state - locations length:", locations.length);
  if (locations.length === 0) {
    console.log("11. No locations found");
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No locations found. Check API response format.
        </Text>
        <Text style={styles.debugInfo}>Debug State: Empty</Text>
      </View>
    );
  }

  console.log("12. Rendering ScrollView with locations:", locations);
  return (
    <View style={styles.container } >
      <ScrollView style={styles.listContainer}>
        {locations.map((location) => (
          <TouchableOpacity
            key={location.id}
            style={styles.cartCard}
            onPress={() => onApartmentPress(location.apartments[0])}
          >
            <View style={styles.cartHeader}>
              <Text style={styles.cartTitle}>{location.name}</Text>
              <Text style={styles.cartUser}>
                {location.apartments.length} Apartments Available
              </Text>
            </View>
            <View style={styles.cartContent}>
              <Text style={styles.cartInfo}>Location: {location.name}</Text>
              <Text style={styles.cartTotal}>
                Starting Price: ${location.apartments[0].price}
              </Text>
            </View>

            <View style={styles.cartProducts}>
              {location.apartments.map((apartment, index) => (
                <View key={index} style={styles.productItem}>
                  <Text style={styles.productTitle}>{apartment.title}</Text>
                  <Text style={styles.productPrice}>
                    ${apartment.price} • {apartment.beds} beds •
                    {apartment.baths} baths • {apartment.sqft} sqft
                  </Text>
                  <Text style={styles.productTotal}>
                    Amenities: {apartment.amenities.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.debugInfo}>Debug State: Normal</Text>
    </View>

  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    overflow: 'scroll',
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcccc",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ff0000",
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  cartCard: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 16,
    marginBottom: 16,
  },
  cartHeader: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 12,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },
  cartUser: {
    fontSize: 14,
    color: "#666",
  },
  cartContent: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
  },
  cartInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  cartTotal: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
    marginBottom: 4,
  },
  cartProducts: {
    marginTop: 12,
  },
  productItem: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  productTotal: {
    fontSize: 14,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  listContainer: {
    flexDirection: 'row',
  overflow: 'scroll'
  },
  debugInfo: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
  },
});

export default Category;
