import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { List } from "react-native-paper";

function UserProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/user.webp")}
          style={styles.image}
        />
        <Text style={styles.userName}>User Name</Text>
        <Text>Rentor</Text>
      </View>
      <View style={{gap: 16}}>
        <List.Item
          title="My Profile"
          style={styles.listRow}
          titleStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#262626",
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="account"
              style={styles.listIcon}
              color="#D32F2F"
            />
          )}
          right={(props) => (
            <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
          )}
        />
        <List.Item
          title="Favourites"
          style={styles.listRow}
          titleStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#262626",
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="cards-heart-outline"
              style={styles.listIcon}
              color="#D32F2F"
            />
          )}
          right={(props) => (
            <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
          )}
        />
        <List.Item
          title="Transaction History"
          style={styles.listRow}
          titleStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#262626",
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="receipt"
              style={{
                backgroundColor: "#F0FDF4",
                width: 44,
                height: 44,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
              color="#16A34A"
            />
          )}
          right={(props) => (
            <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
          )}
        />
        <List.Item
          title="Compare"
          style={styles.listRow}
          titleStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#262626",
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="compare-horizontal"
              style={{
                backgroundColor: "#EFF6FF",
                width: 44,
                height: 44,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
              color="#1E40AF"
            />
          )}
          right={(props) => (
            <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
          )}
        />
        <List.Item
          title="FAQ"
          style={styles.listRow}
          titleStyle={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#262626",
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="comment-question-outline"
              style={{
                backgroundColor: "#FAFAFA",
                width: 44,
                height: 44,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
              color="#262626"
            />
          )}
          right={(props) => (
            <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
          )}
        />
      </View>
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    // backgroundColor: "#ffffff"
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    flexDirection: "row",
    borderRadius: 100,
  },
  userName: {
    fontSize: 16,
    lineHeight: 24,
    color: "#262626",
    fontWeight: "bold",
  },
  userDesignation: {
    fontSize: 14,
    color: "#262626",
    fontWeight: 400,
  },
  listRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    // backgroundColor: "#fff",
    alignItems: "center",
  },
  listIcon: {
    backgroundColor: "#FEF2F2",
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
