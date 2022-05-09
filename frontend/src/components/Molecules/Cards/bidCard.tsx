import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { biddingAuction } from "../../../apis/auctionApi";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

const BidCard = ({ item, title, button, edit, biddingUnit, reqItem }) => {
  const bidding = async () => {
    const result = await biddingAuction(reqItem, biddingUnit, false);
    console.warn(result);
  };

  return (
    <View style={styles.CardContainer}>
      <Image
        source={{
          uri: item.member.profileImageUrl,
        }}
        style={styles.imgContainer}
      ></Image>
      <View style={{ alignItems: "center" }}>
        <TextInput
          editable={edit}
          maxLength={15}
          keyboardType="numeric"
          value={biddingUnit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          style={styles.textArea}
          textAlign="center"
        />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textStyle2} onPress={bidding}>
          {button}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BidCard;

const styles = StyleSheet.create({
  CardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: ScreenWidth / 1.2,
    height: ScreenWidth / 4.2,
    marginBottom: 15,
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.8,
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  imgContainer: {
    width: ScreenWidth / 6,
    height: ScreenWidth / 6,
    borderRadius: 100,
  },
  textStyle: {
    color: "#989898",
    fontWeight: "200",
  },
  textArea: {
    borderRadius: 55,
    borderWidth: 0.7,
    width: ScreenWidth / 4,
    height: ScreenWidth / 13,
    marginBottom: 10,
    color: "#4A4C4E",
  },
  buttonContainer: {
    backgroundColor: "#0176B7",
    width: ScreenWidth / 5,
    height: ScreenWidth / 13,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle2: {
    color: "#ffffff",
    fontSize: ScreenWidth / 28,
  },
});