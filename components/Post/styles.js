import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  postVideo: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },

  rightContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    height: 300,
    right: 5,
    bottom: "20%",
  },
  bottomContainer: {
    position: "absolute",
    padding: 15,
    bottom: "18%",
    width: Dimensions.get("window").width * 0.89,
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
