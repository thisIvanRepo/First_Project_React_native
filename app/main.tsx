import CardMaster from "@/components/CardMaster/CardMaster";
import CoctomBtm from "@/components/CostomBtm/CostomBtm";
import InputField from "@/components/InputField/InputField";
import ServiceCart from "@/components/ServiceCart/ServiceCart";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type item = {
  id: number;
  title: string;
  price: number;
  image?: ImageSourcePropType;
};

const services: item[] = [
  {
    id: 1,
    title: "Haircut",
    price: 30,
    image: require("@/assets/images/haircut.png"),
  },
  {
    id: 2,
    title: "Beard trim",
    price: 15,
  },
  {
    id: 3,
    title: "Clipper haircut",
    price: 20,
  },
  {
    id: 4,
    title: "Haircut and beard trim",
    price: 40,
  },
];

const { width, height } = Dimensions.get("window");

export default function Main() {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <View style={style.container}>
      <View style={style.containerBtn}>
        <Pressable
          style={[
            style.switchBtn,
            { backgroundColor: isActive ? "green" : "white" },
          ]}
          onPress={handlePress}
        ></Pressable>
        <Text>Switch status disabled</Text>
      </View>

      <View style={{ gap: 20 }}>
        <CoctomBtm name="Login" status={isActive}></CoctomBtm>

        <CardMaster
          name="Artem Bilko"
          status={isActive}
          rating={4.5}
        ></CardMaster>

        <InputField placeholder="Your email" status={isActive}></InputField>

        <FlatList
          style={{ gap: 20 }}
          data={services}
          renderItem={({ item }) => (
            <ServiceCart
              title={item.title}
              status={isActive}
              price={item.price}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
  },
  containerBtn: {
    flexDirection: "row",
    gap: 7,
  },
  switchBtn: {
    width: 20,
    height: 20,
    marginBottom: 5,
    borderStyle: "solid",
    borderColor: "#000000ff",
    borderRadius: 4,
  },
});
