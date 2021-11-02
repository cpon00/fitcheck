import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  postVideo: {
    height: Dimensions.get("window").height,
    width: "100%",
    position: "absolute",
    top: -80,
  },
  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
    bottom: "18%",
  },
  rightContainer: {
    alignSelf: "flex-end",
    justifyContent: "space-between",
    height: 300,
    marginRight: 5,
  },
  bottomContainer: {
    justifyContent: "flex-end",
    padding: 15,
  },
  handle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },
  statsLabel: {
    fontSize: 14,
    marginTop: 5,
    color: "white",
  },
  iconContainer: {
    alignItems: "center",
  },
});

export default styles;
