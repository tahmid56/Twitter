import {View ,Text } from "../../components/Themed";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useGlobalSearchParams } from "expo-router";

export default function TweetScreen(){
    const {id} = useGlobalSearchParams();
    console.warn(id);
    const tweet = tweets.find(t => t.id === id);
    if(!tweet) {
        return <Text>Tweet id not found!</Text>
    }
    return (
         <Tweet tweet={tweet}/>
    )
}