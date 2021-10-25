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

function Allwindow(props) {
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
                onPress={() => props.navigation.navigate("Untitled1")}
                style={styles.button}
              >
                <View style={styles.group27}>
                  <View style={styles.group28}>
                    <Text style={styles.meditation}>Meditation</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
        <View style={styles.image2StackRow}>
          <View style={styles.image2Stack}>
            <Image
              source={require("../assets/images/beach2.jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <View style={styles.rect12}>
              <Text style={styles.eveningBeach}>Evening Beach</Text>
            </View>
          </View>
          <ImageBackground
            source={require("../assets/images/fire.jpg")}
            resizeMode="contain"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <View style={styles.rect13}>
              <Text style={styles.fire}>Fire</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.image4StackRow}>
          <View style={styles.image4Stack}>
            <Image
              source={require("../assets/images/train.jpg")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <View style={styles.rect14}>
              <Text style={styles.trainJourney}>Train Journey</Text>
            </View>
          </View>
          <ImageBackground
            source={require("../assets/images/country_side.jpg")}
            resizeMode="contain"
            style={styles.image5}
            imageStyle={styles.image5_imageStyle}
          >
            <View style={styles.rect15}>
              <Text style={styles.countryside}>Countryside</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.image6StackRow}>
          <View style={styles.image6Stack}>
            <Image
              source={require("../assets/images/winter.jpg")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
            <View style={styles.rect16}>
              <Text style={styles.coldWinter}>Cold Winter</Text>
            </View>
          </View>
          <View style={styles.image7Stack}>
            <Image
              source={require("../assets/images/city.jpg")}
              resizeMode="contain"
              style={styles.image7}
            ></Image>
            <View style={styles.rect17}>
              <Text style={styles.cityLife}>City Life</Text>
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
  meditation: {
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
  image2: {
    top: 0,
    left: 0,
    width: 165,
    height: 109,
    position: "absolute"
  },
  rect12: {
    top: 65,
    left: 1,
    width: 165,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  eveningBeach: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 22
  },
  image2Stack: {
    width: 166,
    height: 109
  },
  image3: {
    width: 166,
    height: 109,
    marginLeft: 23
  },
  image3_imageStyle: {},
  rect13: {
    width: 163,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 65
  },
  fire: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 65
  },
  image2StackRow: {
    height: 109,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 83,
    marginRight: 59
  },
  image4: {
    top: 0,
    left: 0,
    width: 165,
    height: 113,
    position: "absolute"
  },
  rect14: {
    top: 70,
    left: 1,
    width: 165,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  trainJourney: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 27
  },
  image4Stack: {
    width: 166,
    height: 113
  },
  image5: {
    width: 166,
    height: 113,
    marginLeft: 22
  },
  image5_imageStyle: {},
  rect15: {
    width: 166,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 70
  },
  countryside: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 34
  },
  image4StackRow: {
    height: 113,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 83,
    marginRight: 60
  },
  image6: {
    top: 0,
    left: 1,
    width: 165,
    height: 116,
    position: "absolute"
  },
  rect16: {
    top: 70,
    left: 0,
    width: 166,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  coldWinter: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 35
  },
  image6Stack: {
    width: 166,
    height: 116
  },
  image7: {
    top: 0,
    left: 0,
    width: 169,
    height: 111,
    position: "absolute"
  },
  rect17: {
    top: 69,
    left: 2,
    width: 167,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  cityLife: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 37
  },
  image7Stack: {
    width: 169,
    height: 112,
    marginLeft: 20,
    marginTop: 2
  },
  image6StackRow: {
    height: 116,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 83,
    marginRight: 59
  },
  rect6: {
    width: 375,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.7200000000000001)",
    marginTop: 212,
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

export default Allwindow;
