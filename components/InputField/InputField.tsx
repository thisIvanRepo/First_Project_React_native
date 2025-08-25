import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  placeholder: string;
  status: boolean;
}

const style = StyleSheet.create({
  ipput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#8C8C8C",
    backgroundColor: "transperent",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
});

const InputField = ({ placeholder, status }: Props) => {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={[style.ipput, status && { borderColor: "#FF5F57" }]}
      placeholder={placeholder}
      placeholderTextColor={status ? "#FF5F57" : "#8C8C8C"}
      value={text}
      onChangeText={setText}
    ></TextInput>
  );
};

export default InputField;
