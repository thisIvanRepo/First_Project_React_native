import CardMaster from "@/components/CardMaster/CardMaster";
import CoctomBtm from "@/components/CostomBtm/CostomBtm";
import InputField from "@/components/InputField/InputField";
import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

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
      <Text>{"  "}</Text>
      <View style={{ gap: 20 }}>
        <CoctomBtm name="Login" status={isActive}></CoctomBtm>

        <CardMaster
          name="Artem Bilco"
          status={isActive}
          rating={4.5}
        ></CardMaster>

        <InputField placeholder="Your email" status={isActive}></InputField>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
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
