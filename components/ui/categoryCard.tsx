import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

interface CartItem {
  id: number;
  userId: number;
  products: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountedTotal: number;
  }>;
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CategoryProps {
  onCartPress?: (cart: CartItem) => void;
}

const Category = ({ onCartPress = () => {} }: CategoryProps) => {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCarts(data.carts);
        console.log({ response });
      } catch (err) {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={carts}
        keyExtractor={(item) => `cart-${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cartCard}
            onPress={() => onCartPress(item)}
          >
            <View style={styles.cartHeader}>
              <Text style={styles.cartTitle}>Cart #{item.id}</Text>
              <Text style={styles.cartUser}>User ID: {item.userId}</Text>
            </View>

            <View style={styles.cartContent}>
              <Text style={styles.cartInfo}>
                Total Items: {item.totalProducts}
              </Text>
              <Text style={styles.cartInfo}>
                Total Quantity: {item.totalQuantity}
              </Text>
              <Text style={styles.cartTotal}>
                Total: ${item.total.toFixed(8)}
              </Text>
              <Text style={styles.cartDiscountedTotal}>
                Discounted Total: ${item.discountedTotal.toFixed(2)}
              </Text>
            </View>

            <View style={styles.cartProducts}>
              {item.products.map((product, index) => (
                <View key={index} style={styles.productItem}>
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.productPrice}>
                    ${product.price.toFixed(8)} x {product.quantity}
                  </Text>
                  <Text style={styles.productTotal}>
                    Total: ${product.total.toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  cartCard: {
    backgroundColor: "#fff",
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
    color: "#333",
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
  cartDiscountedTotal: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  cartProducts: {
    marginTop: 12,
  },
  productItem: {
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 4,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
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
    padding: 16,
  },
});

export default Category;
