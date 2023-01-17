import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useRef } from "react";

export default function DummyComponent() {
  return (
    <>
      <Text id="textField">This is a simple proof of concept application. This component is a child of the uppermost View component in the application</Text>
      <Button id="buttonField" style={styles.eventButton} title="Click me to log the event" />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    eventButton: {},
  });
  