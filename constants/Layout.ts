import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// import useCachedResources from "./hooks/useCachedResources";
// import useColorScheme from "./hooks/useColorScheme";
// import Navigation from "./navigation";

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />

//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }

import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Button from "./components/Button";
import Card from "./components/Card";
import MenuItems from "./components/MenuItems";
import Order from "./components/Order";
import Category from "./components/Category";
import { ScrollView } from "react-native-gesture-handler";

const App: React.FC = () => {
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
      {/* <MenuItems data={data} /> */}
      <ScrollView>
        <Order data={history} />
        <Category data={data} />
      </ScrollView>

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
        size="LARGE"
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
    backgroundColor: "#E5E5E5",

    justifyContent: "center",
  },
});

export default App;
