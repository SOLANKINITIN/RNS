// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// //Tab Tickets Types
// type VARIENT = "PRIMARY" | "SECONDARY";

// type SIZE = "SMALL" | "LARGE";

// interface Iprops {
//   VARIENT: VARIENT;
//   size: SIZE;
//   style?: any;
//   leftChildren: React.ReactNode;
//   rightChildren: React.ReactNode;
//   leftBottomChildren: React.ReactNode;
//   rightBottomChildren: React.ReactNode;
// }

// // const width = Dimensions.get("window").width;

// const Card: React.FC<Iprops> = ({
//   size = "SMALL",
//   VARIENT,
//   style,
//   leftChildren,
//   rightChildren,
//   leftBottomChildren,
//   rightBottomChildren,
// }) => {
//   //   const large = width;

//   //   const btnSize = size === "LARGE" ? large : "";
//   const btnBgColor =
//     VARIENT === "PRIMARY"
//       ? "#424242"
//       : VARIENT === "SECONDARY"
//       ? "#F1F1F1"
//       : "";
//   const TextColor =
//     VARIENT === "PRIMARY"
//       ? "#ffffff"
//       : VARIENT === "SECONDARY"
//       ? "#000000"
//       : "";

//   const textSize = size == "LARGE" ? 14 : 12;
//   const containerCommonStyle = {
//     backgroundColor: btnBgColor,
//     paddingVertical: 8,
//     width: "97%",
//     paddingHorizontal: 20,
//   };

//   return (
//     <View style={[styles.containerStyle, style]}>
//       <View
//         style={{
//           width: "3%",
//           backgroundColor: "#FFCF5C",
//         }}
//       ></View>

//       <View style={[containerCommonStyle, style]}>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "flex-start",
//             justifyContent: "space-between",
//           }}
//         >
//           <View>
//             <Text
//               style={{
//                 color: TextColor,
//                 fontSize: textSize,
//                 textAlign: "center",
//               }}
//             >
//               {leftChildren}
//             </Text>
//             <Text
//               style={{
//                 color: TextColor,
//                 fontSize: textSize,
//                 textAlign: "center",
//               }}
//             >
//               {leftBottomChildren}
//             </Text>
//           </View>
//           <View>
//             <Text
//               style={[
//                 {
//                   color: TextColor,
//                   fontSize: textSize,
//                   textAlign: "center",
//                 },
//               ]}
//             >
//               {rightChildren}
//             </Text>
//             <Text
//               style={[
//                 {
//                   color: TextColor,
//                   fontSize: textSize,
//                   textAlign: "center",
//                 },
//               ]}
//             >
//               {rightBottomChildren}
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   containerStyle: {
//     flexDirection: "row",
//     width: "100%",
//     marginTop: 10,
//   },
// });

// export default Card;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
//Tab Tickets Types
type VARIENT = "PRIMARY" | "SECONDARY";

interface Iprops {
  VARIENT: VARIENT;
  style?: any;
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
  leftBottomChildren: React.ReactNode;
  rightBottomChildren: React.ReactNode;
}

const Card: React.FC<Iprops> = ({
  VARIENT,
  style,
  leftChildren,
  rightChildren,
  leftBottomChildren,
  rightBottomChildren,
}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.containerCommonStyle} />
      <View
        style={[
          VARIENT === "PRIMARY"
            ? styles.Primary
            : VARIENT === "SECONDARY"
            ? styles.Seconadary
            : "",
          style,
          styles.flexStyle,
        ]}
      >
        <View>
          <Text
            style={[
              VARIENT === "PRIMARY"
                ? styles.PrimaryText
                : VARIENT === "SECONDARY"
                ? styles.SeconadaryText
                : "",
              style,
            ]}
          >
            {leftChildren}
          </Text>
          <Text
            style={[
              VARIENT === "PRIMARY"
                ? styles.PrimaryText
                : VARIENT === "SECONDARY"
                ? styles.SeconadaryText
                : "",
              style,
            ]}
          >
            {leftBottomChildren}
          </Text>
        </View>
        <View>
          <Text
            style={[
              VARIENT === "PRIMARY"
                ? styles.PrimaryText
                : VARIENT === "SECONDARY"
                ? styles.SeconadaryText
                : "",
              style,
            ]}
          >
            {rightChildren}
          </Text>
          <Text
            style={[
              VARIENT === "PRIMARY"
                ? styles.PrimaryText
                : VARIENT === "SECONDARY"
                ? styles.SeconadaryText
                : "",
              style,
            ]}
          >
            {rightBottomChildren}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  containerCommonStyle: {
    width: "3%",
    backgroundColor: "#FFCF5C",
  },
  Primary: {
    backgroundColor: "#424242",
    paddingVertical: 8,
    width: "97%",
    color: "#ffffff",
    paddingHorizontal: 20,
  },
  Seconadary: {
    backgroundColor: "#F1F1F1",
    paddingVertical: 8,
    width: "97%",
    paddingHorizontal: 20,
  },
  flexStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  PrimaryText: { color: "#ffffff", textAlign: "center" },
  SeconadaryText: { color: "#000000", textAlign: "center" },
});

export default Card;
