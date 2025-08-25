import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DefaultImg from "@/assets/images/svg/defauldImg.svg";

interface Props {
  status: boolean;
  title: string;
  price: number;
  image?: ImageSourcePropType;
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#404040",
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#8C8C8C",
    overflow: "hidden",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  img: {
    width: 76,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF2FF",
  },
  mainText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#D9D9D9",
  },
  secondatyText: { fontSize: 12, color: "#71727A" },
  btnText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#D9D9D9",
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#8C8C8C",
  },
});

const ServiceCart = ({ status, title, price, image }: Props) => {
  return (
    <View style={[style.container, status && { borderColor: "#CB30E0" }]}>
      <View style={style.content}>
        {image ? (
          <Image style={style.img} source={image}></Image>
        ) : (
          <View style={style.img}>
            <DefaultImg />
          </View>
        )}
        <View>
          <Text style={[style.mainText, status && { color: "#CB30E0" }]}>
            {title}
          </Text>
          <Text style={style.secondatyText}>{`Price: ${price}$`}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => {
          if (!status) {
            alert("You prees on cart with servis information");
          }
        }}
        style={[style.btn, status && { borderColor: "#CB30E0" }]}
      >
        <Text style={[style.btnText, status && { color: "#CB30E0" }]}>
          {status ? "Remove" : "Add"}
        </Text>
      </Pressable>
    </View>
  );
};

export default ServiceCart;
