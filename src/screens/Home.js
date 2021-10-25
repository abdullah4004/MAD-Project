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
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function Home(props) {
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
        <View style={styles.group50}>
          <View style={styles.group51}>
            <View style={styles.group52Stack}>
              <View style={styles.group52}>
                <View style={styles.rect16}>
                  <Text style={styles.all6}>ALL</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Meditation")}
                style={styles.button2}
              >
                <View style={styles.group53}>
                  <View style={styles.group54}>
                    <Text style={styles.meditation2}>Meditation</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.group55}>
            <View style={styles.group56}>
              <View style={styles.group57}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Sleep")}
                  style={styles.button3}
                >
                  <View style={styles.group58}>
                    <Text style={styles.sleep4}>Sleep</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.group59}>
            <View style={styles.group60}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Rain")}
                style={styles.button4}
              >
                <View style={styles.group61}>
                  <Text style={styles.rain4}>Rain</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.group62}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Relax")}
              style={styles.button5}
            >
              <Text style={styles.relax4}>Relax</Text>
            </TouchableOpacity>
          </View>
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
    borderStyle: "solid"
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
  group50: {
    width: 353,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 84
  },
  group51: {
    width: 77,
    height: 44
  },
  group52: {
    top: 0,
    left: 7,
    width: 77,
    height: 44,
    position: "absolute"
  },
  rect16: {
    width: 77,
    height: 44,
    backgroundColor: "#171a21",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  all6: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 22,
    height: 0,
    width: 0,
    opacity: 0
  },
  button2: {
    width: 92,
    height: 44,
    position: "absolute",
    backgroundColor: "#318fad",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000",
    left: 0,
    top: 0
  },
  group53: {
    width: 20,
    height: 25,
    marginTop: 9,
    marginLeft: 35
  },
  group54: {
    width: 20,
    height: 25
  },
  meditation2: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    alignSelf: "center"
  },
  group52Stack: {
    width: 92,
    height: 44,
    marginLeft: -7
  },
  group55: {
    width: 77,
    height: 44
  },
  group56: {
    width: 77,
    height: 44
  },
  group57: {
    width: 77,
    height: 44
  },
  button3: {
    width: 77,
    height: 44,
    backgroundColor: "#318fad",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  group58: {
    width: 46,
    height: 25,
    marginTop: 9,
    marginLeft: 15
  },
  sleep4: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  group59: {
    width: 77,
    height: 44
  },
  group60: {
    width: 77,
    height: 44
  },
  button4: {
    width: 77,
    height: 44,
    backgroundColor: "#318fad",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  group61: {
    width: 37,
    height: 25,
    marginTop: 9,
    marginLeft: 20
  },
  rain4: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  group62: {
    width: 77,
    height: 44
  },
  button5: {
    width: 77,
    height: 44,
    backgroundColor: "#318fad",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  relax4: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 15
  },
  rect6: {
    width: 375,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.7200000000000001)",
    marginTop: 584,
    marginLeft: 73
  },
  group19: {
    width: 328,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    marginLeft: 28
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

export default Home;
