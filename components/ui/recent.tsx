import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
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
  images: Array<{
    url: string;
  }>;
}

interface LocationData {
  id: string;
  name: string;
  apartments: Apartment[];
}

interface CategoryProps {
  onApartmentPress?: (apartment: Apartment) => void;
}

const Recent = ({ onApartmentPress = () => {} }: CategoryProps) => {
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
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.cartTitle}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
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

  return (
    // <View style={styles.container}>
    //   <FlatList
    //     style={{flexDirection: 'row', gap: 12, borderRadius: 8}}
    //     data={locations}
    //     keyExtractor={(item) => `location-${item.id}`}
    //     renderItem={({ item }) => {
    //       return (
    //         <TouchableOpacity
    //           style={styles.cartCard}
    //           onPress={() => onApartmentPress(item.apartments[0])}
    //         >
    //           <ImageBackground
    //             source={require("@/assets/images/bangkok.webp")}
    //             style={styles.cartHeader}
    //           >
    //             <Text style={styles.cartTitle}>{item.name}</Text>
    //             <Text style={styles.cartUser}>
    //               {item.apartments.length} Apartments Available
    //             </Text>
    //           </ImageBackground>
    //         </TouchableOpacity>
    //       );
    //     }}
    //     contentContainerStyle={styles.listContainer}
    //   />
    // </View>
    <View>
      <ScrollView horizontal contentContainerStyle={{gap: 12, padding: 12}}>
        {locations.map((item) => (
          <Card key={item.id} style={styles.cartCard}>
            <TouchableOpacity
              // style={{flexDirection: 'column', width: 150}}
              onPress={() => onApartmentPress(item.apartments[1])}
            >
              <ImageBackground
                source={{
                  uri: item.apartments[1].images[1]?.url || "default-image-uri",
                }}
                style={styles.cartHeader}
              >
                <Text style={styles.cartTitle}>{item.name}</Text>
                <Text style={styles.cartUser}>
                  {item.apartments.length} Apartments Available
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

// Simplified styles with debugging colors
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    overflowX: "scroll",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcccc", // Red background for loading state
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ff0000", // Red background for error state
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  cartCard: {
    width: 150,
    height: 150,
    flexDirection: "column",
    // elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // marginBottom: 16,
  },
  cartHeader: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    // paddingHorizontal: 12,
    // marginBottom: 12,
    // borderBottomWidth: 1,
    // borderBottomColor: "#eee",
    // paddingBottom: 12,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff", // Black text
  },
  cartUser: {
    fontSize: 14,
    color: "#666",
  },
  listContainer: {
    padding: 16,
  },
});

export default Recent;
