import * as React from "react";
import { View, StyleSheet, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProfileWindow } from "../../components/ProfileWindow";
import { ProfileWindowLong} from "../../components/ProfileWindowLong";

const FlexView = () => {
  return (
      
    <ScrollView>
        <View style={{flexDirection: "row"}}>
            <View style={styles.Left}>
                <ProfileWindow
                    img={require("../../resources/neon.png")}
                />
                <ProfileWindowLong
                    img={require("../../resources/winter.jpg")}
                    name=""
                />
                <ProfileWindow
                    img={require("../../resources/manson.png")}
                />
                <ProfileWindow
                    img={require("../../resources/festival.png")}
                />
            </View>
            <View style={styles.Right}>
                <ProfileWindowLong
                    img={require("../../resources/cyber.png")}
                    name=""
                />
                <ProfileWindow
                    img={require("../../resources/punk.png")}
                />
                <ProfileWindowLong
                    img={require("../../resources/streetStyle.png")}
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