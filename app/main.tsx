import CoctomBtm from "@/components/CostomBtm/CostomBtm";
import { useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Main() {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive((prev) => !prev);
  };

  const style = {
    container: {
      paddingHorizontal: width * 0.05,
      paddingVertical: height * 0.03,
    },
    switchBtn: {
      width: 3,
      height: 3,
      borderStyle: "solid",
      borderColor: "#000000ff",
      borderRadius: 5,
      bacgroundColor: isActive ? "brown" : "",
    },
  };

  return (
    <View style={style.container}>
      <View>
        <Pressable onPress={handlePress}></Pressable>
        <Text>Switch status active component</Text>
      </View>
      <Text>{"  "}</Text>
      <View>
        <CoctomBtm name="Login" status={isActive}></CoctomBtm>
      </View>
    </View>
  );
}
