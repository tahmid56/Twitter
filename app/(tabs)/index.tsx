import { StyleSheet ,View, FlatList} from 'react-native';

import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';

const tweet = tweets[0]
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
        {/* <Tweet tweet={tweets[0]}/> */}
        <FlatList data={tweets} renderItem={({item}) => <Tweet tweet={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor: "white",
        flex: 1
    }
});
