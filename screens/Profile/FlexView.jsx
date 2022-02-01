import * as React from "react";
import { View, StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileWindow } from "../../components/Profile/ProfileWindow";
import { ProfileWindowLong} from "../../components/Profile/ProfileWindowLong";

const FlexView = () => {
  return (
      
    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
    <View style={{flexDirection: "row"}}>
            <View style={styles.Left}>
                <ProfileWindow
                    img={require("../../assets/neon.png")}
                    key={1}
                />
                <ProfileWindowLong
                    img={require("../../assets/winter.jpg")}
                    name=""
                    key={2}
                />
                <ProfileWindow
                    img={require("../../assets/manson.png")}
                    key={3}
                />
                <ProfileWindow
                    img={require("../../assets/festival.png")}
                    key={4}
                />
            </View>
            <View style={styles.Right}>
                <ProfileWindowLong
                    img={require("../../assets/cyber.png")}
                    name=""
                    key={5}
                />
                <ProfileWindow
                    img={require("../../assets/punk.png")}
                    key={6}
                />
                <ProfileWindowLong
                    img={require("../../assets/streetStyle.png")}
                    key={7}
                />            
            </View>
        
        </View>
   
    
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    Left: {
        width: '50%',
        top: 20,
        left: 20,
    },
    Right: {
        width: '40%',
        position: 'absolute',
        top: 20,
        right:25,
    }
});
export default FlexView;