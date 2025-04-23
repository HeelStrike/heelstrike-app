import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, { MapView } from "@rnmapbox/maps";
import { MAPBOX_KEY } from "@/src/keys/key";
import MapsButtonMenu from "@/src/features/maps/components/Buttons/MapsButtonMenu";
import SearchBar from "@/src/shared/components/InputFields/SearchBars/SearchBar"

Mapbox.setAccessToken(MAPBOX_KEY);

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    },
    buttonMenuContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        right: 10,
        zIndex: 1,
    },

});

export default class App extends Component {
    componentDidMount() {
        Mapbox.setTelemetryEnabled(false);
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <MapView style={styles.map} />
                    <View style={styles.buttonMenuContainer}>
                        <SearchBar />
                        <MapsButtonMenu />
                    </View>

                </View>
            </View>
        );
    }
}