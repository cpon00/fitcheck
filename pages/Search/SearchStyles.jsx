import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  search: {
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    height: 35,
    marginTop: 50,
    marginBottom: 40,
  },
  searchText: {
    left: 30,
    position: "absolute",
  },
  card: {
    flexDirection: "row",
    left: 20,
  },
  searchTextStyle: {
    fontSize: 25,
  },
  descriptionText: {
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Left: {
    width: "40%",
    top: 20,
    left: 20,
  },
  Right: {
    width: "40%",
    position: "absolute",
    top: 20,
    right: 25,
  },
  categoriesText: {
    left: 30,
    marginBottom: 15,
    width: "260%",
    marginTop: 5,
  },
  categoriesTextStyle: {
    fontSize: 25,
    left: 35,
    position: "absolute",
  },
  relatedTextStyle: {
    fontSize: 25,
    marginTop: 15,
  },
  image: {
    width: 310,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  imgCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop:10,
  },
  imgText: {
    fontSize: 15,
    fontWeight: "300",
    letterSpacing: 0.5,
    color: "#fff",
    position: "absolute",
  },
  categoriesImgText: {
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 0.5,
    color: "#fff",
    position: "absolute",
  },
  imgTextStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  shadowContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
  },
  gallery: {
    flex: 1,
    flexDirection: "row",
    marginTop:5
  },
  imageGallery: {
    height: 100,
    width: 60,
    marginRight: 5,
  },
  tagText: {
    marginBottom: 5,
    position: "absolute",
  },
  container: {
    marginTop: 30,
    marginLeft: 20,
  },
  seeMore: {
    textAlign: "right",
    right: 30,
  },
});
export default styles;
