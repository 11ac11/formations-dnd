import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

interface DraggablePlayerProps {
  playerName: string;
  playerNumber: number;
}

const DraggablePlayer: React.FC<DraggablePlayerProps> = ({
  playerName,
  playerNumber,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  return (
    <SafeAreaProvider>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          ...styles.container,
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.playerCircle}>
          <Text style={styles.playerNumber}>{playerNumber}</Text>
        </View>
        <Text style={styles.titleText}>{playerName}</Text>
      </Animated.View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderWidth: 1,
    borderColor: "red",
    zIndex: 2,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  playerCircle: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 100,
  },
  playerNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default DraggablePlayer;
