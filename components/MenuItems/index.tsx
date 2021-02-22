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

interface Iprops {
  data: any;
  disable?: boolean;
}

import styled from "styled-components/native";

const StyledView = styled(View)``;
const MenuItems: React.FC<Iprops> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const openMenu = () => setVisible(true);
  const openClose = () => setVisible(false);

  return (
    <TouchableWithoutFeedback onPress={() => openClose()}>
      <StyledView
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-end",
          height: "100%",
          width: "100%",
        }}
      >
        {console.log("data: ", data.length)}
        <TouchableOpacity
          style={{ top: 30, right: 10 }}
          onPress={() => openMenu()}
        >
          <Image source={require("../../assets/images/ellipsis-v.jpg")} />
        </TouchableOpacity>
        <View>
          {visible ? (
            <View style={styles.mainContainer}>
              {data.length === 0 ? (
                <Text style={styles.textStyle}>No data Available</Text>
              ) : (
                data &&
                data.map((item: any, index: any) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    key={index}
                    style={
                      index !== data.length - 1
                        ? styles.containerStyle
                        : styles.containerStyleLast
                    }
                    onPress={() => {
                      Alert.alert(item.title), openClose();
                    }}
                  >
                    <Text style={styles.textStyle}>{item.title}</Text>
                  </TouchableOpacity>
                ))
              )}
            </View>
          ) : null}
        </View>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    right: 30,
    top: 30,
    padding: 5,
    width: 188,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#979797",
    borderWidth: 1,
  },
  containerStyle: {
    borderColor: "#D9D9D9",
    borderBottomWidth: 1,
    width: 166,
  },
  containerStyleLast: {
    width: 188,
  },

  textStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#888888",
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default MenuItems;
