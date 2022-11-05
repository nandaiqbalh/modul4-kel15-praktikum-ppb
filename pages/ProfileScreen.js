import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";
import { data as kelompok15 } from "../common/Data";

function ProfileScreen() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const request = await axios
                .get("https://api.github.com/users/" + kelompok15[count].githubUsername)
                .then((res) => setData(res.data))
                .catch((e) => Alert.alert("Failed!", e));
            return request;
        }

        fetchData();
    }, [count]);

    const next = () => {
        const nextCount = count + 1;
        setCount(nextCount);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={{
                        uri: data.avatar_url
                    }}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>
                    {data.name} ({data.login})
                </Text>
                <Text style={styles.headerTextDesc}>Email : {data.email}</Text>
                <Text style={styles.headerTextDesc}>Bio : {data.bio}</Text>
                <Text style={styles.headerTextDesc}>Company : {data.company}</Text>
                <Text style={styles.headerTextDesc}>Lokasi : {data.location}</Text>
                <Text style={styles.headerTextDesc}>Twitter : {data.twitter_username}</Text>
                <Text style={styles.headerTextDesc}>Followers : {data.followers}</Text>
                <Text style={styles.headerTextDesc}>Following : {data.following}</Text>

            </View>
            <TouchableOpacity style={styles.bodyTouchable} onPress={() => next()}>
                <Text style={styles.bodyText}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "skyblue",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        alignItems: "center",
        paddingBottom: 10
    },
    headerImage: {
        height: 150,
        width: 150,
        borderRadius: 60,
        marginVertical: 10
    },
    headerText: {
        fontWeight: "bold",
        color: "black"
    },
    headerTextDesc: {
        color: "black"
    },
    bodyTouchable: {
        alignSelf: "center",
        backgroundColor: "blue",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 20
    },
    bodyText: {
        color: "#efd",
        fontWeight: "bold",
        fontSize: 20
    }
});

export default ProfileScreen;
