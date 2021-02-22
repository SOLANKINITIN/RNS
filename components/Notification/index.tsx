import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Menu, RedNot, YellowNot } from "../../assets/Svg";

interface Iprops {
  data: any;
}
const Notification: React.FC<Iprops> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const openMenu = () => setVisible(true);
  const openClose = () => setVisible(false);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => openClose()}>
        <View style={styles.container}>
          <Text style={styles.header}>Notifications</Text>
          <TouchableOpacity style={{ margin: 25 }} onPress={() => openMenu()}>
            <Menu />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ height: 350 }}>
        <ScrollView>
          {visible
            ? data &&
              data.map((item: any, index: any) => (
                <View style={{ backgroundColor: "#FFFFFF" }} key={index}>
                  <View key={index}>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        textAlign: "justify",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: 14,
                        lineHeight: 19,
                        color: "#4F4F4F",
                        marginTop: 16,
                        marginBottom: 8,
                        marginLeft: 16,
                      }}
                    >
                      {item.order_time}
                    </Text>
                  </View>

                  {item.notifications &&
                    item.notifications.map((items: any, index) => (
                      <TouchableOpacity
                        onPress={() =>
                          items.notification_type === "error"
                            ? Alert.alert("Error")
                            : items.notification_type === "warning"
                            ? Alert.alert("Warning")
                            : ""
                        }
                        key={index}
                        style={[
                          items.notification_type === "error"
                            ? styles.Primary
                            : styles.Seconadary,
                          index === 0 ? styles.border : styles.borders,
                        ]}
                      >
                        <View
                          style={{
                            paddingHorizontal: 19,
                            justifyContent: "center",
                            alignItems: "center",
                            // height: 200,
                            // backgroundColor: "#2ff",
                          }}
                        >
                          {items.notification_type === "error" ? (
                            <RedNot />
                          ) : (
                            <YellowNot />
                          )}
                        </View>

                        <View
                          style={{
                            // flexDirection: "column",
                            // alignItems: "flex-start",
                            // justifyContent: "center",
                            // backgroundColor: "#000",
                            flex: 1,
                          }}
                        >
                          <Text style={styles.SeconadaryText}>
                            {items.customer_name}
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Roboto",
                              textAlign: "justify",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: 11,
                              lineHeight: 18,
                              color: "#4F4F4F",
                            }}
                            numberOfLines={2}
                          >
                            {items.time}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() =>
                            items.notification_type === "error"
                              ? Alert.alert("Error")
                              : items.notification_type === "warning"
                              ? Alert.alert("Warning")
                              : ""
                          }
                        >
                          <Text style={styles.actionStyle}>{items.action}</Text>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    ))}
                </View>
              ))
            : null}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderTopWidth: 1,
    borderTopColor: "#CDCDCD",
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD",
  },
  borders: {
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  header: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 28,
    color: "#4F4F4F",
    margin: 16,
  },
  Primary: {
    flexDirection: "row",
    width: "100%",
    height: 88,
    alignItems: "center",
    // justifyContent: "flex-start",
    borderLeftWidth: 8,
    paddingVertical: 20,
    borderLeftColor: "#EB5757",
  },

  Seconadary: {
    flexDirection: "row",
    width: "100%",
    height: 88,
    alignItems: "center",
    // justifyContent: "flex-start",
    borderLeftWidth: 8,
    paddingVertical: 20,
    borderLeftColor: "#FFCA0A",
  },

  PrimaryText: {
    fontFamily: "Roboto",
    textAlign: "justify",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 18,
    color: "#4F4F4F",
  },
  SeconadaryText: {
    fontFamily: "Roboto",
    textAlign: "justify",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 18,
    color: "#4F4F4F",
  },
  actionStyle: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 11,
    // lineHeight: 20,
    paddingHorizontal: 24,
    color: "#0084F4",
  },
});

export default Notification;
