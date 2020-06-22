import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "80e4e2378e235fae347d6f18a4538af9";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        sys: { country }
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      country
    });
  }
  
  getLocation = async () => {
    try {
      // 사용자가 퍼미션(permission)을 준다면
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        await Location.getPermissionsAsync();
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        // Send to API 
        this.getWeather(latitude, longitude);
      }
    } catch (error) {
      // 사용자가 퍼미션(permission)을 주지 않는다면
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, country } = this.state;
    return isLoading ? (
      <Loading />) : (
        <Weather temp={Math.round(temp)} condition={condition} country={country}/>
      );
  }

}
