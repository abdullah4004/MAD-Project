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

function Rain(props) {
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
        <View style={styles.group24}>
          <View style={styles.group25}>
            <View style={styles.group26Stack}>
              <View style={styles.group26}>
                <View style={styles.rect7}>
                  <Text style={styles.all3}>ALL</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Meditation")}
                style={styles.button}
              >
                <View style={styles.group27}>
                  <View style={styles.group28}>
                    <Text style={styles.text}>Meditation</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.group29}>
            <View style={styles.group30}>
              <View style={styles.group31}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Sleep")}
                  style={styles.button4}
                >
                  <View style={styles.group32}>
                    <Text style={styles.sleep2}>Sleep</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.group33}>
            <View style={styles.group34}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Rain")}
                style={styles.button3}
              >
                <View style={styles.group35}>
                  <Text style={styles.rain2}>Rain</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.group36}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Relax")}
              style={styles.button2}
            >
              <Text style={styles.relax2}>Relax</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.image10Row}>
          <ImageBackground
            source={require("../assets/images/s_rain.jpg")}
            resizeMode="contain"
            style={styles.image10}
            imageStyle={styles.image10_imageStyle}
          >
            <View style={styles.rect20}>
              <Text style={styles.springRain}>Spring Rain</Text>
            </View>
          </ImageBackground>
          <View style={styles.image11Stack}>
            <Image
              source={require("../assets/images/l_rain.jpg")}
              resizeMode="contain"
              style={styles.image11}
            ></Image>
            <View style={styles.rect21}>
              <Text style={styles.lightRain}>Light Rain</Text>
            </View>
          </View>
        </View>
        <View style={styles.image12Row}>
          <ImageBackground
            source={require("../assets/images/rain_f.jpg")}
            resizeMode="contain"
            style={styles.image12}
            imageStyle={styles.image12_imageStyle}
          >
            <View style={styles.rect22}>
              <Text style={styles.rainInForest}>Rain in Forest</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/images/rain_roof.jpg")}
            resizeMode="contain"
            style={styles.image13}
            imageStyle={styles.image13_imageStyle}
          >
            <View style={styles.rect23}>
              <Text style={styles.rainOnRoof}>Rain on Roof</Text>
            </View>
          </ImageBackground>
        </View>
        <ImageBackground
          source={require("../assets/images/rain_leaves.jpg")}
          resizeMode="contain"
          style={styles.image14}
          imageStyle={styles.image14_imageStyle}
        >
          <View style={styles.rect24}>
            <Text style={styles.rainOnLeaves}>Rain on Leaves</Text>
          </View>
        </ImageBackground>
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
  group24: {
    width: 353,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 87
  },
  group25: {
    width: 77,
    height: 44
  },
  group26: {
    top: 0,
    left: 7,
    width: 77,
    height: 44,
    position: "absolute"
  },
  rect7: {
    width: 77,
    height: 44,
    backgroundColor: "#171a21",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  all3: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 22,
    height: 0,
    width: 0,
    opacity: 0
  },
  button: {
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
  group27: {
    width: 20,
    height: 25,
    marginTop: 9,
    marginLeft: 35
  },
  group28: {
    width: 20,
    height: 25
  },
  text: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    alignSelf: "center"
  },
  group26Stack: {
    width: 92,
    height: 44,
    marginLeft: -7
  },
  group29: {
    width: 77,
    height: 44
  },
  group30: {
    width: 77,
    height: 44
  },
  group31: {
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
  group32: {
    width: 46,
    height: 25,
    marginTop: 9,
    marginLeft: 15
  },
  sleep2: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  group33: {
    width: 77,
    height: 44
  },
  group34: {
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
  group35: {
    width: 37,
    height: 25,
    marginTop: 9,
    marginLeft: 20
  },
  rain2: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  group36: {
    width: 77,
    height: 44
  },
  button2: {
    width: 77,
    height: 44,
    backgroundColor: "#318fad",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  relax2: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 15
  },
  image10: {
    width: 166,
    height: 110
  },
  image10_imageStyle: {},
  rect20: {
    width: 163,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 62,
    marginLeft: 3
  },
  springRain: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 34
  },
  image11: {
    top: 0,
    left: 0,
    width: 164,
    height: 106,
    position: "absolute"
  },
  rect21: {
    top: 64,
    left: 0,
    width: 163,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  lightRain: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 41
  },
  image11Stack: {
    width: 164,
    height: 107,
    marginLeft: 26
  },
  image10Row: {
    height: 110,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 81,
    marginRight: 60
  },
  image12: {
    width: 166,
    height: 121
  },
  image12_imageStyle: {},
  rect22: {
    width: 163,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 66,
    marginLeft: 2
  },
  rainInForest: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 26
  },
  image13: {
    width: 210,
    height: 99,
    marginLeft: 1,
    marginTop: 10
  },
  image13_imageStyle: {},
  rect23: {
    width: 153,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 56,
    marginLeft: 30
  },
  rainOnRoof: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 23
  },
  image12Row: {
    height: 121,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 81,
    marginRight: 39
  },
  image14: {
    width: 164,
    height: 116,
    marginTop: 13,
    marginLeft: 84
  },
  image14_imageStyle: {},
  rect24: {
    width: 162,
    height: 42,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 68,
    marginLeft: 1
  },
  rainOnLeaves: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 8,
    marginLeft: 20
  },
  rect6: {
    width: 375,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.7200000000000001)",
    marginTop: 177,
    marginLeft: 73
  },
  group19: {
    width: 328,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
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

export default Rain;
