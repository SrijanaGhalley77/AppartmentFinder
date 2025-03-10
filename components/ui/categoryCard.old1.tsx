import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Pressable,
} from "react-native";
import { Card } from "react-native-paper";

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
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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
        setLocations(data.locations);
      } catch (err) {
        console.log(
          "Error:",
          err instanceof Error ? err.message : "Unknown error",
        );
        setError(err instanceof Error ? err.message : "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.cartTitle}>Loading...</Text>
        <ActivityIndicator size="large" color="#b2d8d8" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error} there is error</Text>
      </View>
    );
  }

  if (locations.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No locations found. Check API response format.
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: LocationData }) => (
    <Pressable onPress={() => onApartmentPress(item.apartments[1])}>
      <Card key={item.id} style={styles.cartCard}>
        <ImageBackground
          source={{
            uri: item.apartments[1].images[1]?.url || "default-image-uri",
          }}
          style={styles.cartBg}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.cartTitle}>{item.name}</Text>
          <Text style={styles.cartUser}>
            {item.apartments.length} Apartments Available
          </Text>
        </ImageBackground>
      </Card>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 14, gap: 14, height: 150, flex: 1 }}
      />
    </View>
  );
};

// Simplified styles with debugging colors
const styles = StyleSheet.create({
  container: {
    padding: 16,
    overflowX: "scroll",
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
    backgroundColor: "#ffbaba", // background for error state
  },
  errorText: {
    color: "#ff0000",
    fontSize: 16,
    textAlign: "center",
  },
  cartCard: {
    width: 150,
    height: 150,
  },
  cartBg: {
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    borderRadius: 6,
    objectFit: "cover",
  },
  cartTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 19,
    color: "#fff", // White text
  },
  cartUser: {
    fontSize: 10,
    color: "#fff",
    marginLeft: 12,
    fontStyle: "italic",
  },
});

export default Category;