import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink", 
    padding: 10,
    alignItems: "center",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    color: "white", 
  },
});

export default Header;