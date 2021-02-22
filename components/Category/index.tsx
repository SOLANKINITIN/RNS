import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Alert } from "../../assets/Svg";

const Category = ({ data }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {data.length === 0 ? (
          <Text style={styles.dateText}>
            There are no orders for this date.
          </Text>
        ) : (
          data &&
          data.map((item: any, index: any) => (
            <View key={index}>
              <Text style={styles.dateText}>{item.category}</Text>

              {item.party.map((party, index) => (
                <View key={index} style={styles.secondWrap}>
                  <Text style={styles.totalText}>{party.name}</Text>

                  {party.warning === true ? (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Alert />

                      <Text
                        style={{
                          color: "#403F3F",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: 11,
                          lineHeight: 13,
                          paddingLeft: 16,
                          paddingRight: 2.25,
                        }}
                        numberOfLines={1}
                      >
                        {party.warning_description}
                      </Text>
                    </View>
                  ) : null}
                  <TouchableOpacity>
                    <Text style={styles.textStyle}>{party.action}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 24,
    backgroundColor: "#E5E5E5",
  },
  dateText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 23.92,
    color: "#333333",
    paddingBottom: 12,
  },
  totalText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18.61,
    color: "#333333",
    padding: 24,
    flex: 1,
  },

  secondWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 67,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: "#fff",
    marginBottom: 16,
  },

  textStyle: {
    color: "#0084F4",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18.61,
    padding: 24,
  },
});

export default Category;
