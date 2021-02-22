// import React, { useState } from "react";

// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   TouchableOpacity,
//   Alert,
// } from "react-native";

// import Order from "./components/Order";
// import Category from "./components/Category";
// import { ScrollView } from "react-native-gesture-handler";

// const App: React.FC = () => {
//   const history = [
//     {
//       date: "October 12,2020",
//       daily_total: "$246.99",
//       orders: [
//         {
//           name: "Roos P.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Timothy M.",
//           time: "2:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Alex R.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Bridget S.",
//           time: "10:15 AM",
//           amount: "$4.88",
//         },
//       ],
//     },
//     {
//       date: "October 11,2020",
//       daily_total: "$246.99",
//       orders: [
//         {
//           name: "Roos P.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Timothy M.",
//           time: "2:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Alex R.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//       ],
//     },
//   ];

//   const data = [
//     {
//       category: "Category 1",
//       party: [
//         {
//           name: "Regular Patty",
//           action: "Reactivate",
//           warning: true,
//           warning_description:
//             "Deactivated until Tues Nov 2nd, 2020 hjjhjhj 102456hjgj fghfgddfg 485546224565",
//         },
//         {
//           name: "Large Patty",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//         {
//           name: "Jalapeno Ketchup PC",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//         {
//           name: "Mountain Berry Blast",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//       ],
//     },
//     {
//       category: "Category 2",
//       party: [
//         {
//           name: "Regular Patty",
//           action: "Reactivate",
//           warning: true,
//           warning_description: "Deactivated until morning",
//         },
//         {
//           name: "Large Patty",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//         {
//           name: "Jalapeno Ketchup PC",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//       ],
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Order data={history} />
//         <Category data={data} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: "column",
//     backgroundColor: "#E5E5E5",

//     justifyContent: "center",
//   },
// });

// export default App;

// import React, { useState } from "react";

// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   TouchableOpacity,
//   Alert,
// } from "react-native";

// import Order from "./components/Order";
// import Category from "./components/Category";
// import { ScrollView } from "react-native-gesture-handler";

// const App: React.FC = () => {
//   const history = [
//     {
//       date: "October 12,2020",
//       daily_total: "$246.99",
//       orders: [
//         {
//           name: "Roos P.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Timothy M.",
//           time: "2:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Alex R.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Bridget S.",
//           time: "10:15 AM",
//           amount: "$4.88",
//         },
//       ],
//     },
//     {
//       date: "October 11,2020",
//       daily_total: "$246.99",
//       orders: [
//         {
//           name: "Roos P.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Timothy M.",
//           time: "2:30 PM",
//           amount: "$4.88",
//         },
//         {
//           name: "Alex R.",
//           time: "3:30 PM",
//           amount: "$4.88",
//         },
//       ],
//     },
//   ];

//   const data = [
//     {
//       category: "Category 1",
//       party: [
//         {
//           name: "Regular Patty",
//           action: "Reactivate",
//           warning: true,
//           warning_description:
//             "Deactivated until Tues Nov 2nd, 2020 hjjhjhj 102456hjgj fghfgddfg 485546224565",
//         },
//         {
//           name: "Large Patty",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//         {
//           name: "Jalapeno Ketchup PC",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//         {
//           name: "Mountain Berry Blast",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//       ],
//     },
//     {
//       category: "Category 2",
//       party: [
//         {
//           name: "Regular Patty",
//           action: "Reactivate",
//           warning: true,
//           warning_description: "Deactivated until morning",
//         },
//         {
//           name: "Large Patty",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//         {
//           name: "Jalapeno Ketchup PC",
//           action: "Deactivate",
//           warning: false,
//           warning_description: "Deactivated until Tues Nov 2nd, 2020",
//         },
//       ],
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Order data={history} />
//         <Category data={data} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: "column",
//     backgroundColor: "#E5E5E5",

//     justifyContent: "center",
//   },
// });

// export default App;

import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Button from "./components/Button";
import Card from "./components/Card";
import MenuItems from "./components/MenuItems";
import Notification from "./components/Notification";
import Order from "./components/Order";
import Category from "./components/Category";

const App: React.FC = () => {
  const notification = [
    {
      order_time: "NEW ORDERS",
      notifications: [
        {
          customer_name: "New Order from Jack R.",
          time: "A new order will be picked up in 7 minu.",
          notification_type: "error",
          action: "View Order",
        },
        {
          customer_name: "Large Order Scheduled Soon",
          time:
            "A large order of $74.92 has been scheled to be picked up at 4:40 PM.",
          notification_type: "warning",
          action: "View Order",
        },
      ],
    },
    {
      order_time: "TODAY",
      notifications: [
        {
          customer_name: "Bacon Deactivated",
          time:
            "Customers are unable to order options with bacon until 11/23 at 10:00 AM.",
          notification_type: "warning",
          action: "Manage",
        },
        {
          customer_name: "Large Cups Deactivated",
          time:
            "Customers are unable to order options with bacon until 11/23 at 10:00 AM.",
          notification_type: "warning",
          action: "Manage",
        },
      ],
    },
  ];

  const radioData = [
    { label: "Lrg Munchers", value: "Lrg Munchers" },
    {
      label: "Ouarter Pound Large Burger",
      value: "Ouarter Pound Large Burger",
    },
    { label: "Mag 44 Lime Slush", value: "Mag 44 Lime Slush" },
    { label: "Lrg Onion Ring", value: "Lrg Onion Ring" },
    { label: "XL Chili Cheese Dog", value: "XL Chili Cheese Dog" },
    { label: "Breaded Chicken Sandwich", value: "Breaded Chicken Sandwich" },
    { label: "Medium Avalanche", value: "Medium Avalanche" },
  ];
  const history = [
    {
      date: "October 12,2020",
      daily_total: "$246.99",
      orders: [
        {
          name: "Roos P.",
          time: "3:30 PM",
          amount: "$4.88",
        },
        {
          name: "Timothy M.",
          time: "2:30 PM",
          amount: "$4.88",
        },
        {
          name: "Alex R.",
          time: "3:30 PM",
          amount: "$4.88",
        },
        {
          name: "Bridget S.",
          time: "10:15 AM",
          amount: "$4.88",
        },
      ],
    },
    {
      date: "October 11,2020",
      daily_total: "$246.99",
      orders: [
        {
          name: "Roos P.",
          time: "3:30 PM",
          amount: "$4.88",
        },
        {
          name: "Timothy M.",
          time: "2:30 PM",
          amount: "$4.88",
        },
        {
          name: "Alex R.",
          time: "3:30 PM",
          amount: "$4.88",
        },
      ],
    },
  ];

  const data = [
    {
      category: "Category 1",
      party: [
        {
          name: "Regular Patty",
          action: "Reactivate",
          warning: true,
          warning_description:
            "Deactivated until Tues Nov 2nd, 2020 hjjhjhj 102456hjgj fghfgddfg 485546224565",
        },
        {
          name: "Large Patty",
          action: "Deactivate",
          warning: false,
          warning_description: "Deactivated until Tues Nov 2nd, 2020",
        },
        {
          name: "Jalapeno Ketchup PC",
          action: "Deactivate",
          warning: false,
          warning_description: "Deactivated until Tues Nov 2nd, 2020",
        },
        {
          name: "Mountain Berry Blast",
          action: "Deactivate",
          warning: false,
          warning_description: "Deactivated until Tues Nov 2nd, 2020",
        },
      ],
    },
    {
      category: "Category 2",
      party: [
        {
          name: "Regular Patty",
          action: "Reactivate",
          warning: true,
          warning_description: "Deactivated until morning",
        },
        {
          name: "Large Patty",
          action: "Deactivate",
          warning: false,
          warning_description: "Deactivated until Tues Nov 2nd, 2020",
        },
        {
          name: "Jalapeno Ketchup PC",
          action: "Deactivate",
          warning: false,
          warning_description: "Deactivated until Tues Nov 2nd, 2020",
        },
      ],
    },
  ];
  const menuData = [
    { title: "title1", id: 1 },

    { title: "title2", id: 2 },
    { title: "title3 ", id: 3 },
  ];
  const [radio, setRadio] = useState("");

  const checkRadio = (value: any) => {
    setRadio(value);
  };

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: 50,
          backgroundColor: "#2ff",
          paddingTop: 50,
          justifyContent: "space-between",
        }}
      >
        <Text>header</Text>
      </View> */}
      {/* <MenuItems data={menuData} /> */}

      <ScrollView>
        <Order data={history} />
        <Category data={data} />
        <RadioButton data={radioData} />
      </ScrollView>
      <Notification data={notification} />

      {/* <RadioButton
        label="Lrg Munchers"
        onSelecting={checkRadio}
        selected={radio}
        value="Lrg Munchers"
      />
      <RadioButton
        label="Mag 44 Lime Slush"
        onSelecting={checkRadio}
        selected={radio}
        value="Mag 44 Lime Slush"
      />
      <RadioButton
        label="Ouarter Pound Large Burger"
        onSelecting={checkRadio}
        selected={radio}
        value="Ouarter Pound Large Burger"
      /> */}

      {/* <Button
        size="LARGE"
        bordered={true}
        VARIENT="PRIMARY"
        onPress={() => console.log("hi")}
      >
        <Text>Press</Text>
      </Button> */}
      {/* 
      <Card const [visible, setVisible] = useState<boolean>(false);
  const openMenu = () => setVisible(true);
Y"
        leftChildren={
          <View>
            <Text>Roos P.</Text>
            <Text>$12.93</Text>
          </View>
        }
        rightChildren={
          <View>
            <Text>Received</Text>
            <Text>2m ago</Text>
          </View>
        }
      /> */}
      {/* <Card
        // size="LARGE"
        VARIENT="PRIMARY"
        leftChildren="Roos P."
        leftBottomChildren="$12.93"
        rightChildren="Received"
        rightBottomChildren="2m ago"
      /> */}
      {/* 
      {items.map((item) => {
        return (
          <Card
            VARIENT="PRIMARY"
            leftChildren={item.leftChildren}
            leftBottomChildren={item.leftBottomChildren}
            rightChildren={item.rightChildren}
            rightBottomChildren={item.rightBottomChildren}
          />
        );
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // backgroundColor: "#E5E5E5",

    // justifyContent: "flex-end",
  },
});

export default App;
