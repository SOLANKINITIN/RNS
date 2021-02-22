import React, { Children, ReactChildren } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

//Button Types
type VARIENT = "PRIMARY" | "SECONDARY" | "OUTLINED";

type SIZE = "SMALL" | "LARGE";

interface Iprops {
  onPress: () => void;
  VARIENT: VARIENT;
  size: SIZE;
  bordered?: boolean;
  style?: any;
  children: React.ReactNode;
  disable?: boolean;
}

const width = Dimensions.get("window").width;

const Button: React.FC<Iprops> = ({
  disable,
  onPress,
  size = "SMALL",
  VARIENT,
  bordered = false,
  style,
  children,
}) => {
  const large = width / 1.3;
  const small = width / 2.3;
  const btnSize = size === "LARGE" ? large : small;
  const btnBgColor =
    VARIENT === "PRIMARY"
      ? "#424242"
      : VARIENT === "SECONDARY"
      ? "#00C48C"
      : VARIENT === "OUTLINED"
      ? "#fff"
      : "";

  const btnBorderRadius = bordered ? 30 : 0;

  const border = VARIENT === "OUTLINED" && {
    borderColor: "#333",
    borderWidth: 2,
  };
  const TextColor =
    VARIENT === "PRIMARY"
      ? "#ffffff"
      : VARIENT === "SECONDARY"
      ? "#ffffff"
      : VARIENT === "OUTLINED"
      ? "#1e90ff"
      : "#333";

  const textSize = size == "LARGE" ? 16 : 12;
  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disable}>
      <View style={[containerCommonStyle, border, style]}>
        <Text
          style={[
            {
              color: TextColor,
              fontSize: textSize,
              textTransform: "uppercase",
              textAlign: "center",
            },
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: "#3F51B5",
    paddingVertical: 8,
    width: width / 1.3,
    borderRadius: 5,
  },
});

export default Button;
