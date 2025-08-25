import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  status: boolean;
}

export default function CoctomBtm({ name, status }: Props) {
  return (
    <TouchableOpacity activeOpacity={status ? 0.7 : 1}>
      <View style={style.btn}>
        <Text style={[style.text, status ? { color: "#404040" } : {}]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btn: {
    alignItems: "center",
    paddingVertical: 16.5,
    borderRadius: 12,
    backgroundColor: "#D9D9D9",
  },
  text: {
    color: "#8C8C8C",
  },
});
