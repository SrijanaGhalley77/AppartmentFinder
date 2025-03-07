import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Card, Divider } from "react-native-paper";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";

// Define interfaces for type safety
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
  locationName?: string; // Make locationName optional
}

interface LocationData {
  id: string;
  name: string;
  apartments: Apartment[];
}

interface CategoryProps {
  onApartmentPress?: (apartment: Apartment) => void;
}

// Define the component with proper TypeScript typing
const Recent = ({ onApartmentPress = () => {} }: CategoryProps) => {
  // State with proper typing
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://dummyjson.com/c/ca8f-756c-40af-b116",
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (!data || !data.locations) {
          throw new Error("Invalid response format");
        }

        // Transform the data to flatten all apartments
        const allApartments = data.locations.flatMap((location: LocationData) =>
          location.apartments.map((apartment: Apartment) => ({
            ...apartment,
            locationName: location.name,
          })),
        );

        setLocations(allApartments);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state with proper typing
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.cardTitle}>Loading...</Text>
      </View>
    );
  }

  // Error state with proper typing
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Empty state with proper typing
  if (locations.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No locations found. Check API response format.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{ gap: 12, paddingHorizontal: 12, paddingTop: 8 }}
      contentContainerStyle={{ gap: 0, paddingBottom: 12 }}
      data={locations}
      keyExtractor={(item: Apartment) => `apartment-${item.id}`}
      renderItem={({ item }: { item: Apartment }) => (
        <Card style={styles.cartCard}>
          <TouchableOpacity
            onPress={() => onApartmentPress(item)}
            style={({ pressed }: { pressed: boolean }) => [
              styles.cartCard,
              pressed && styles.pressedCard,
            ]}
          >
            <View style={{ flexDirection: "column" }}>
              <Image
                source={{
                  uri: item.images[1]?.url || "default-image-uri",
                }}
                style={styles.cartBg}
              />
            </View>
            <Card.Content>
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Ionicons name="location" size={10} />
                    <Text style={styles.locationText}>{item.locationName}</Text>
                  </View>
                </View>
                <Text style={styles.price}>${item.price}/ month</Text>
                <Divider style={styles.seperator} />
                <View style={styles.cardFooter}>
                  <Text style={styles.footerText}>Beds: {item.beds}</Text>
                  <Text style={styles.footerText}>Baths: {item.baths}</Text>
                </View>
              </View>
            </Card.Content>
          </TouchableOpacity>
        </Card>
      )}
    />
  );
};

// Styles with proper TypeScript typing
const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9feff", // background for loading state
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffbaba", //  background for error state
  },
  errorText: {
    color: "#ff0000",
    fontSize: 16,
    textAlign: "center",
  },
  cartCard: {
    width: 180,
    height: 215,
    backgroundColor: "#fff",
  },
  cartBg: {
    width: "100%",
    height: 105,
  },
  imageStyle: {
    borderRadius: 6,
    objectFit: "cover",
  },
  cardContent: {
    marginLeft: 0,
    marginTop: 10,
    gap: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#262626",
  },
  price: {
    fontSize: 12,
    fontWeight: "600",
    color: "#262626",
  },
  seperator: {
    borderBottomWidth: 2,
    borderColor: "#5b6770",
  },
  cartUser: {
    fontSize: 10,
    color: "#fff",
    marginLeft: 12,
    fontStyle: "italic",
  },
  listContainer: {
    padding: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  footerText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#262626",
  },
  locationText: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#696969",
    justifyContent: "center",
    alignSelf: "center",
  },
  pressedCard: {
    opacity: 0.8,
  },
});

export default Recent;
