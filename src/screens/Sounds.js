import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Sounds(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <ImageBackground
        source={require("../assets/images/download1.jpg")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.sleepSounds1}>Sleep Sounds</Text>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <FeatherIcon
              name="cloud-drizzle"
              style={styles.icon7}
            ></FeatherIcon>
          </View>
          <View style={styles.rect10}>
            <IoniconsIcon
              name="ios-thunderstorm"
              style={styles.icon8}
            ></IoniconsIcon>
          </View>
        </View>
        <View style={styles.rainRow}>
          <Text style={styles.rain}>Rain</Text>
          <Text style={styles.thunder}>Thunder</Text>
        </View>
        <View style={styles.rect11Row}>
          <View style={styles.rect11}>
            <FeatherIcon name="wind" style={styles.icon9}></FeatherIcon>
          </View>
          <View style={styles.rect12}>
            <MaterialCommunityIconsIcon
              name="sleep"
              style={styles.icon10}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.windRow}>
          <Text style={styles.wind}>Wind</Text>
          <Text style={styles.night}>Night</Text>
        </View>
        <View style={styles.rect13}>
          <OcticonsIcon name="flame" style={styles.icon11}></OcticonsIcon>
        </View>
        <Text style={styles.fire}>Fire</Text>
        <View style={styles.rect14}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sleep")}
            style={styles.button1}
          >
            <MaterialIconsIcon
              name="play-circle-outline"
              style={styles.icon12}
            ></MaterialIconsIcon>
          </TouchableOpacity>
        </View>
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
    borderStyle: "solid",
    backgroundColor: "#2f81a7"
  },
  image: {
    width: 497,
    height: 894,
    marginTop: -73,
    marginLeft: -73
  },
  image_imageStyle: {},
  sleepSounds1: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    fontFamily: "helvetica-regular",
    marginTop: 118,
    marginLeft: 96
  },
  rect9: {
    width: 92,
    height: 67,
    backgroundColor: "#3092af",
    borderRadius: 25
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 50,
    width: 50,
    marginTop: 9,
    marginLeft: 21
  },
  rect10: {
    width: 92,
    height: 67,
    backgroundColor: "#3092af",
    borderRadius: 25,
    marginLeft: 88
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 54,
    width: 44,
    marginTop: 7,
    marginLeft: 24
  },
  rect9Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 123,
    marginRight: 102
  },
  rain: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  thunder: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 129
  },
  rainRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 148,
    marginRight: 114
  },
  rect11: {
    width: 92,
    height: 67,
    backgroundColor: "#3092af",
    borderRadius: 25
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 50,
    width: 50,
    marginTop: 9,
    marginLeft: 21
  },
  rect12: {
    width: 92,
    height: 67,
    backgroundColor: "#3092af",
    borderRadius: 25,
    marginLeft: 88
  },
  icon10: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 54,
    width: 50,
    marginTop: 7,
    marginLeft: 21
  },
  rect11Row: {
    height: 67,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 123,
    marginRight: 102
  },
  wind: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  night: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 138
  },
  windRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 148,
    marginRight: 127
  },
  rect13: {
    width: 92,
    height: 67,
    backgroundColor: "#3092af",
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 211
  },
  icon11: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    height: 54,
    width: 38,
    marginTop: 7,
    marginLeft: 27
  },
  fire: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 242
  },
  rect14: {
    width: 375,
    height: 95,
    backgroundColor: "rgba(49,40,119,0.51)",
    marginTop: 89,
    marginLeft: 73
  },
  button1: {
    width: 143,
    height: 75,
    backgroundColor: "rgba(49,143, 143,0.63)",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.75)",
    marginTop: 10,
    marginLeft: 116
  },
  icon12: {
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    height: 70,
    width: 70,
    marginTop: 3,
    marginLeft: 37
  },
  rect6: {
    width: 375,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.7200000000000001)",
    marginLeft: 73
  },
  group19: {
    width: 328,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 27
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

export default Sounds;
