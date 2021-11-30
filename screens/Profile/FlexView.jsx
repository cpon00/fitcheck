import * as React from "react";
import { View, StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileWindow } from "../../components/Profile/ProfileWindow";
import { ProfileWindowLong} from "../../components/Profile/ProfileWindowLong";

const FlexView = () => {
  return (
      
    <ScrollView>
        <View style={{flexDirection: "row"}}>
            <View style={styles.Left}>
                <ProfileWindow
                    img={require("../../assets/neon.png")}
                />
                <ProfileWindowLong
                    img={require("../../assets/winter.jpg")}
                    name=""
                />
                <ProfileWindow
                    img={require("../../assets/manson.png")}
                />
                <ProfileWindow
                    img={require("../../assets/festival.png")}
                />
            </View>
            <View style={styles.Right}>
                <ProfileWindowLong
                    img={require("../../assets/cyber.png")}
                    name=""
                />
                <ProfileWindow
                    img={require("../../assets/punk.png")}
                />
                <ProfileWindowLong
                    img={require("../../assets/streetStyle.png")}
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