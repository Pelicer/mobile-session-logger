import { StyleSheet, View } from "react-native";
import { useEffect, useRef } from "react";
import DummyComponent from "./DummyComponent";

const sequence = ['textField','buttonField','textField','buttonField','buttonField','buttonField','textField']
var pos = 0


export default function App() {
  const viewRef = useRef();

  const logEvent = (e) =>{
    console.info("Logging event from uppermost view")
    const teste = {id: sequence[pos]}
    pos++;
    if(pos >= sequence.length){
      pos=0

    }

    fetch('http://192.168.5.59:3000/log-event', {method: 'POST', headers: {
      "Content-Type": "application/json",
    },body: JSON.stringify(teste) }).then(response =>
      response.json()
   ).
   then((data) =>{
    console.info(`Response: ${JSON.stringify(data)}`)
   }).
   catch(error =>{
   });
  }

  return (
    <View id="teste" ref={viewRef} style={styles.container} onTouchEnd={logEvent}>
      <DummyComponent />
    </View>
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
