import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Radio = ({ data }) => {
  const [checked, setChecked] = useState("");

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#E5E5E5" }}
    >
      {data &&
        data.map((item: any, index: any) => (
          <TouchableOpacity
            key={index}
            onPress={() => setChecked(item.value)}
            style={
              index !== data.length - 1 ? styles.border : styles.buttonContainer
            }
          >
            <TouchableOpacity
              onPress={() => setChecked(item.value)}
              style={styles.circle}
            >
              {checked === item.value && (
                <View
                  style={{
                    padding: 1.5,
                    borderColor: "#00C48C",
                    borderWidth: 2,
                    borderRadius: 10,
                  }}
                >
                  <View style={styles.checkedCircle} />
                </View>
              )}
            </TouchableOpacity>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: 14,
                lineHeight: 18.61,
                color: "#333333",
                paddingLeft: 16,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  border: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D0D0D0",
  },
  checkd: {
    borderColor: "#00C48C",
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: "#00C48C",
  },
});
