import { Image, Text, View } from "react-native";

interface Props {
  name: string;
  status: boolean;
  img: string;
  rating: number;
}

const CardMaster = ({ name, status, img, rating }: Props) => {
  return (
    <View>
      <Image src={img}></Image>
      <Text>{name}</Text>
    </View>
  );
};

export default CardMaster;
