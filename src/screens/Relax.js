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

function Relax(props) {
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Meditation")}
            style={styles.button5}
          >
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
                    <Text style={styles.text}>Meditation</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
        <View style={styles.image15Row}>
          <ImageBackground
            source={require("../assets/images/nature.jpg")}
            resizeMode="contain"
            style={styles.image15}
            imageStyle={styles.image15_imageStyle}
          >
            <View style={styles.rect25}>
              <Text style={styles.naturalMelody}>Natural Melody</Text>
            </View>
          </ImageBackground>
          <View style={styles.image17Stack}>
            <Image
              source={require("../assets/images/yoga.jpg")}
              resizeMode="contain"
              style={styles.image17}
            ></Image>
            <View style={styles.rect27}>
              <Text style={styles.yougaMusic}>Youga Music</Text>
            </View>
          </View>
        </View>
        <View style={styles.image16Row}>
          <ImageBackground
            source={require("../assets/images/relax.jpg")}
            resizeMode="contain"
            style={styles.image16}
            imageStyle={styles.image16_imageStyle}
          >
            <View style={styles.rect26}>
              <Text style={styles.relaxTime}>Relax Time</Text>
            </View>
          </ImageBackground>
          <View style={styles.image18Stack}>
            <Image
              source={require("../assets/images/night.jpg")}
              resizeMode="contain"
              style={styles.image18}
            ></Image>
            <View style={styles.rect28}>
              <Text style={styles.peacefulNight}>Peaceful Night</Text>
            </View>
          </View>
        </View>
        <View style={styles.image19Stack}>
          <ImageBackground
            source={require("../assets/images/d_re.jpg")}
            resizeMode="contain"
            style={styles.image19}
            imageStyle={styles.image19_imageStyle}
          >
            <View style={styles.rect29}>
              <Text style={styles.deepRelaxation}>Deep Relaxation</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/images/mem1.jpg")}
            resizeMode="contain"
            style={styles.image20}
            imageStyle={styles.image20_imageStyle}
          >
            <View style={styles.rect30}>
              <Text style={styles.memories}>Memories</Text>
            </View>
          </ImageBackground>
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
  button5: {
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
  image15: {
    width: 171,
    height: 108
  },
  image15_imageStyle: {},
  rect25: {
    width: 163,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 64,
    marginLeft: 4
  },
  naturalMelody: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 21
  },
  image17: {
    top: 0,
    left: 1,
    width: 161,
    height: 108,
    position: "absolute"
  },
  rect27: {
    top: 64,
    left: 0,
    width: 163,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  yougaMusic: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 30
  },
  image17Stack: {
    width: 163,
    height: 108,
    marginLeft: 19
  },
  image15Row: {
    height: 108,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 78,
    marginRight: 66
  },
  image16: {
    width: 167,
    height: 111
  },
  image16_imageStyle: {},
  rect26: {
    width: 163,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 68,
    marginLeft: 3
  },
  relaxTime: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 33
  },
  image18: {
    top: 0,
    left: 1,
    width: 163,
    height: 111,
    position: "absolute"
  },
  rect28: {
    top: 68,
    left: 0,
    width: 163,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.45)"
  },
  peacefulNight: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 23
  },
  image18Stack: {
    width: 164,
    height: 111,
    marginLeft: 19
  },
  image16Row: {
    height: 111,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 81,
    marginRight: 66
  },
  image19: {
    top: 0,
    left: 196,
    width: 176,
    height: 108,
    position: "absolute"
  },
  image19_imageStyle: {},
  rect29: {
    width: 162,
    height: 42,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 65,
    marginLeft: 8
  },
  deepRelaxation: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 13
  },
  image20: {
    top: 0,
    left: 0,
    width: 200,
    height: 108,
    position: "absolute"
  },
  image20_imageStyle: {},
  rect30: {
    width: 163,
    height: 43,
    backgroundColor: "rgba(0,0,0,0.45)",
    marginTop: 65,
    marginLeft: 19
  },
  memories: {
    fontFamily: "helvetica-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 42
  },
  image19Stack: {
    width: 372,
    height: 108,
    marginTop: 18,
    marginLeft: 66
  },
  rect6: {
    width: 375,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.7200000000000001)",
    marginTop: 180,
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

export default Relax;
