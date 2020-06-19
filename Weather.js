import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Haze",
        subtitle: "Turn on the light when you're driving. Be careful."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#DBD65C", "#5614B0"],
        title: "Thunderstrom",
        subtitle: "Thunder, feel the thunder, Lightning then the thunder ⚡"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Drizzle",
        subtitle: "Drop drop drop 💧"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "Rain",
        subtitle: "Take an umbrella☂ with you when you go out."
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#9dbae3", "#d7e4f5"],
        title: "Snow",
        subtitle: "Let it snow, let it snow, let it snow 🎵"
    },
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ["#373B44", "#4286f4"],
        title: "Atmosphere",
        subtitle: "Umm.. I don't know what the Atmosphere is"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FFE47A", "#64b3f4"],
        title: "Clear",
        subtitle: "It's sunny day!🌞 Let's go outside."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#56CCF2", "#2F80ED"],
        title: "Clouds",
        subtitle: "If fine dust is good, hang out the laundry."
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Mist",
        subtitle: "It's like my mood. ☁"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#D1913C", "#FFD194"],
        title: "Dust",
        subtitle: "Thanks a lot China 🖕🏻"
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View srtle={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={86}
                    name={weatherOptions[condition].iconName || "wheather-sunset"}
                    style={styles.icon}
                    color="white" />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.bottomContainer }}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {weatherOptions[condition].subtitle}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 70
    },
    halfContainer: {
        flex: 1,
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        left: 15,
        color: "white"
    },
    bottomContainer: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    title: {
        fontWeight: "300",
        fontSize: 34,
        marginBottom: 10,
        color: "white"
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: "flex-start"
    }
});