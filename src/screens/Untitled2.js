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

function Untitled2(props) {
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
            <View style={styles.group26}>
              <View style={styles.rect7}>
                <View style={styles.all3Stack}>
                  <Text style={styles.all3}>ALL</Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Untitled1")}
                    style={styles.button}
                  >
                    <View style={styles.group27}>
                      <View style={styles.group28}>
                        <Text style={styles.all4}>All</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group29}>
            <View style={styles.group30}>
              <View style={styles.group31}>
                <View style={styles.rect9}>
                  <View style={styles.group32}>
                    <Text style={styles.sleep2}>Sleep</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group33}>
            <View style={styles.group34}>
              <View style={styles.rect10}>
                <View style={styles.group35}>
                  <Text style={styles.rain2}>Rain</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group36}>
            <View style={styles.rect11}>
              <Text style={styles.relax2}>Relax</Text>
            </View>
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
  group24: {
    width: 353,
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 84
  },
  group25: {
    width: 77,
    height: 44
  },
  group26: {
    width: 77,
    height: 44
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
    top: 9,
    left: 22,
    position: "absolute",
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    height: 0,
    width: 0,
    opacity: 0
  },
  button: {
    top: 0,
    left: 0,
    width: 77,
    height: 44,
    position: "absolute",
    backgroundColor: "#318fad",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#000000"
  },
  group27: {
    width: 20,
    height: 25,
    marginTop: 9,
    marginLeft: 28
  },
  group28: {
    width: 20,
    height: 25
  },
  all4: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18
  },
  all3Stack: {
    width: 77,
    height: 44
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
  rect9: {
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
  rect10: {
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
  rect11: {
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
    marginLeft: 34
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

export default Untitled2;
