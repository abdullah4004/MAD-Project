import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function Home1(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <ImageBackground
        source={require("../assets/images/download1.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.settings3}>Settings</Text>
        <View style={styles.group24}>
          <View style={styles.rect8}></View>
          <View style={styles.rect9}></View>
          <View style={styles.rect10}></View>
          <MaterialCommunityIconsIcon
            name="message-processing"
            style={styles.icon7}
          ></MaterialCommunityIconsIcon>
          <IoniconsIcon name="md-eye" style={styles.icon8}></IoniconsIcon>
          <Text style={styles.feedback}>Feedback</Text>
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>
        </View>
        <Text style={styles.version10}>Version 1.0</Text>
        <View style={styles.rect6}>
          <View style={styles.group19}>
            <View style={styles.group20}>
              <View style={styles.mixer2Stack}>
                <Text style={styles.mixer2}>Mixer</Text>
                <View style={styles.group21}>
                  <EntypoIcon
                    name="sound-mix"
                    style={styles.icon4}
                  ></EntypoIcon>
                </View>
              </View>
            </View>
            <View style={styles.group22}>
              <View style={styles.sounds2Stack}>
                <Text style={styles.sounds2}>Sounds</Text>
                <FeatherIcon name="music" style={styles.icon5}></FeatherIcon>
              </View>
            </View>
            <View style={styles.group23}>
              <View style={styles.settings2Stack}>
                <Text style={styles.settings2}>Settings</Text>
                <FeatherIcon name="settings" style={styles.icon6}></FeatherIcon>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid"
  },
  image: {
    width: 497,
    height: 894,
    marginTop: -73,
    marginLeft: -73
  },
  image_imageStyle: {},
  settings3: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    fontFamily: "helvetica-regular",
    marginTop: 118,
    marginLeft: 96
  },
  group24: {
    width: 268,
    height: 181,
    justifyContent: "space-between",
    marginTop: 40,
    marginLeft: 130
  },
  rect8: {
    width: 268,
    height: 3,
    backgroundColor: "#E6E6E6"
  },
  rect9: {
    width: 268,
    height: 3,
    backgroundColor: "#E6E6E6"
  },
  rect10: {
    width: 268,
    height: 3,
    backgroundColor: "#E6E6E6"
  },
  icon7: {
    top: 20,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 54,
    width: 50
  },
  icon8: {
    top: 105,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 54,
    width: 44
  },
  feedback: {
    top: 34,
    left: 67,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  privacyPolicy: {
    top: 120,
    left: 67,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  version10: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 35,
    marginLeft: 130
  },
  rect6: {
    width: 375,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.7200000000000001)",
    marginTop: 347,
    marginLeft: 73
  },
  group19: {
    width: 328,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 22
  },
  group20: {
    width: 58,
    height: 74
  },
  mixer2: {
    top: 43,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  group21: {
    top: 0,
    left: 7,
    width: 45,
    height: 49,
    position: "absolute"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 45
  },
  mixer2Stack: {
    width: 58,
    height: 74
  },
  group22: {
    width: 74,
    height: 78
  },
  sounds2: {
    top: 47,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  icon5: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50
  },
  sounds2Stack: {
    width: 74,
    height: 78
  },
  group23: {
    width: 80,
    height: 77
  },
  settings2: {
    top: 46,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  icon6: {
    top: 0,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50
  },
  settings2Stack: {
    width: 80,
    height: 77
  }
});

export default Home1;
