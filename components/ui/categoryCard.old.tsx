import { Link } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

interface PropertyItem {
  title: string;
  price: number | null;
  city: string;
  state: string;
}

interface CategoryProps {
  properties?: PropertyItem[];
  onPropertyPress?: (property: PropertyItem) => void;
  loading?: boolean;
}

const Category = ({}: CategoryProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    const url = "https://api.rentcast.io/v1/properties";
    const params = new URLSearchParams({
      city: "San Antonio",
      state: "TX",
      limit: "20",
    });

    fetch(`${url}?${params}`, {
      headers: {
        Accept: "application/json",
        "X-Api-Key": "d1d551c3520d46b2bff0b75402842d66",
      },
    })

      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setResponse(result);
        console.log({ response });
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{ alignSelf: "center", justifyContent: "center" }}
        />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            There was some error fetching the data. Please check your
            connection.
          </Text>
        </View>
      ) : response && response.data && response.data.length > 0 ? (
        response.data.map((item: PropertyItem, index: number) => (
          <Card key={`property-${index}`} style={styles.propertyCard}>
            <Card.Content style={styles.propertyCardContent}>
              <Text style={styles.propertyTitle}>
                {item.title || "Untitled Property"}
              </Text>
              <Text style={styles.propertyPrice}>
                ${item.price || "Price not available"}
              </Text>
              <Text style={styles.propertyLocation}>
                {item.city}, {item.state}
              </Text>
            </Card.Content>
          </Card>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No properties found</Text>
        </View>
      )}

      <View style={styles.cardContainer}>
        <ImageBackground
          style={styles.cards}
          source={require("@/assets/images/bangkok.webp")}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.h1}>Bangkok</Text>
          <Text style={styles.subHead}>View All</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },
  cardContainer: {
    flexDirection: "row",
    width: 200,
    height: 200,
    margin: 0,
    gap: 10,
    marginHorizontal: 12,
    overflowX: "scroll",
  },
  cards: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
  },
  imageStyle: {
    borderRadius: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 8,
  },
  subHead: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    padding: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "#ff0000",
    fontSize: 16,
    textAlign: "center",
  },
  propertyCard: {
    marginBottom: 16,
    elevation: 2,
  },
  propertyCardContent: {
    padding: 16,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  propertyPrice: {
    fontSize: 16,
    color: "#2ecc71",
    marginBottom: 8,
  },
  propertyLocation: {
    fontSize: 14,
    color: "#95a5a6",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  emptyText: {
    fontSize: 16,
    color: "#95a5a6",
  },
});

export default Category;
