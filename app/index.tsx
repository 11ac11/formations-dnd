import React, { useRef, useState } from "react";
import Player from "@/components/DragAndDrop";
import { View, StyleSheet } from "react-native";

const players = [
  {
    name: "Crump",
    number: 11,
  },
  {
    name: "Mowatt",
    number: 27,
  },
  {
    name: "Palmer",
    number: 1,
  },
  {
    name: "Heggem",
    number: 6,
  },
  {
    name: "Maja",
    number: 9,
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {players.map((player, index) => (
          <Player
            playerName={player.name}
            playerNumber={player.number}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  cardContainer: {
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "green",
    flex: 1,
  },
});

export default App;
