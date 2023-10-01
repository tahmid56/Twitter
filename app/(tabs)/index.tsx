import { StyleSheet ,View, FlatList, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { router } from 'expo-router';

const tweet = tweets[0]
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
        {/* <Tweet tweet={tweets[0]}/> */}
        <FlatList data={tweets} renderItem={({item}) => <Tweet tweet={item}/>}/>
        
        <Pressable style={styles.floatingButton} onPress={()=> {
            router.push("/new_tweet");
        }}>
            <View style={styles.buttonBack}>
                <Entypo name="plus" size={36} color="white" />
            </View>  
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: "white",
        flex: 1
    },
    buttonBack:{
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 60,
        backgroundColor: "#1C9BF0",
        borderRadius: 50

    },
    floatingButton: {
        position: "absolute",
        bottom: 40,
        right: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});
