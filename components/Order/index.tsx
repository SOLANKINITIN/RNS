import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Arrow } from "../../assets/Svg";

interface Iprops {
  data: any[];
}

const Order = ({ data }) => {
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
              <View style={styles.fisrtWrap}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.totalText}>
                  Daily Total: {item.daily_total}
                </Text>
              </View>
              {console.log("item.orders:", item.orders)}

              {item.orders.map((order, index) => (
                <View key={index} style={styles.secondWrap}>
                  {console.log("order: ", order)}
                  <View style={styles.wrapContainer}>
                    <Text
                      style={{
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: 14,
                        lineHeight: 18.61,
                        color: "#333333",
                        paddingLeft: 24,
                      }}
                    >
                      {order.name}
                    </Text>
                    <Text style={styles.textStyle}>{order.time}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      right: 0,
                      padding: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>{order.amount}</Text>
                    <TouchableOpacity style={{ paddingHorizontal: 27 }}>
                      <Arrow />
                    </TouchableOpacity>
                  </View>
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
  fisrtWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 23.92,
    color: "#333333",
    paddingBottom: 12,
    paddingLeft: 10,
  },
  totalText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18.61,
    color: "#333333",
    paddingLeft: 24,
    paddingBottom: 12,
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
  wrapContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 13,
    color: "#6A6A6A",
    paddingLeft: 8,
  },
});

export default Order;

// import React from "react";
// import {
//   ScrollView,
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from "react-native";
// import { Arrow } from "../../assets/Svg";

// interface Iprops {
//   data: any[];
// }

// const Order = ({ data }) => {
//   return (
//     <ScrollView style={{ flex: 1 }}>
//       <View style={styles.mainContainer}>
//         {data.length === 0 ? (
//           <Text style={styles.dateText}>
//             There are no orders for this date.
//           </Text>
//         ) : (
//           data &&
//           data.map((item: any, index: any) => (
//             <View key={index}>
//               <View style={styles.fisrtWrap}>
//                 <Text style={styles.dateText}>{item.date}</Text>
//                 <Text style={styles.totalText}>
//                   Daily Total: {item.daily_total}
//                 </Text>
//               </View>
//               {console.log("item.orders:", item.orders)}
//               <View style={styles.secondWrap}>
//                 {item.orders.map((order, index) => (
//                   <View key={index} style={styles.innerWrap}>
//                     {console.log("order: ", order)}
//                     <View style={styles.wrapContainer}>
//                       <Text
//                         style={{
//                           fontStyle: "normal",
//                           fontWeight: "700",
//                           fontSize: 14,
//                           lineHeight: 18.61,
//                           color: "#333333",
//                           paddingLeft: 24,
//                         }}
//                       >
//                         {order.name}
//                       </Text>
//                       <Text
//                         style={{
//                           fontStyle: "normal",
//                           fontWeight: "500",
//                           fontSize: 11,
//                           lineHeight: 13,
//                           color: "#6A6A6A",
//                           paddingLeft: 8,
//                         }}
//                       >
//                         {order.time}
//                       </Text>
//                     </View>
//                     <View style={styles.wrapContainer}>
//                       <Text
//                         style={{
//                           fontStyle: "normal",
//                           fontWeight: "500",
//                           fontSize: 11,
//                           lineHeight: 13,
//                           color: "#6A6A6A",
//                           paddingLeft: 25,
//                         }}
//                       >
//                         {order.amount}
//                       </Text>
//                       <TouchableOpacity
//                         style={{ paddingLeft: 26, paddingRight: 26 }}
//                       >
//                         <Arrow />
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           ))
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     padding: 10,
//   },
//   fisrtWrap: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   dateText: {
//     fontStyle: "normal",
//     fontWeight: "700",
//     fontSize: 18,
//     lineHeight: 23.92,
//     color: "#333333",
//     padding: 12,
//   },
//   totalText: {
//     fontStyle: "normal",
//     fontWeight: "700",
//     fontSize: 14,
//     lineHeight: 18.61,
//     color: "#333333",
//     padding: 10,
//   },

//   secondWrap: {
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//   },
//   innerWrap: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     height: 67,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,

//     elevation: 3,
//   },

//   wrapContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 10,
//   },
//   textStyle: {
//     fontStyle: "normal",
//     fontWeight: "500",
//     fontSize: 11,
//     lineHeight: 13,
//     color: "#6A6A6A",
//   },
// });

// export default Order;
