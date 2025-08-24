import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {

  return (
    <View style = {style.container} >
      <Link href="/main">Go to own component</Link>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      paddingTop: 20,
      alignItems: 'center'
    }
  }
)
