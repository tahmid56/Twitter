import { Link, router } from "expo-router";

import { useState } from "react";
import { Image, StyleSheet,View, Text, TextInput, Pressable,StatusBar, SafeAreaView } from "react-native";


const user = {
    id: '123456789',
      name: 'Jeff B',
      username: 'bezos',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
}

export default function NewTweet(){
    const [text, setText] = useState("");
    const onTweetPress =()=>{
        console.warn("Posting the tweet!")
        setText("");
        router.back()
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href={"../"} style={{fontSize: 18}}>Cancel</Link>
                <Pressable onPress={onTweetPress} style={styles.button}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <Image src={user.image} style={styles.image}/>
                <TextInput 
                    value={text}
                    onChangeText={setText}
                    placeholder="What's happening?" 
                    multiline 
                    numberOfLines={5}
                    style={{flex: 1}}    
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        padding: 10,
        backgroundColor: "white",
        flex: 1
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#1C9BF0",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})