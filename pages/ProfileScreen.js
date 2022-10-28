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

function ProfileScreen() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const request = await axios
                .get("https://reqres.in/api/users/" + count.toString())
                .then((res) => setData(res.data.data))
                .catch((e) => Alert.alert("Gagal!", e));
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
                        uri: data.avatar
                    }}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>
                    {data.first_name + " " + data.last_name}
                </Text>
                <Text style={styles.headerTextDesc}>{data.email}</Text>
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
        backgroundColor: "#1363DF",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 15,
        alignItems: "center",
        paddingBottom: 10
    },
    headerImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginVertical: 10
    },
    headerText: {
        fontWeight: "bold",
        color: "#fff"
    },
    headerTextDesc: {
        color: "#fff"
    },
    bodyTouchable: {
        alignSelf: "center",
        backgroundColor: "#47B5FF",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 20
    },
    bodyText: {
        color: "#efd",
        fontSize: 20
    }
});

export default ProfileScreen;
