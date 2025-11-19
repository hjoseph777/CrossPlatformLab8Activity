import React, { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export default function DraggableBox() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const [isDragging, setIsDragging] = useState(false);
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // grab gestures immediately
      
      onPanResponderGrant: () => {
        // console.log('grabbed the box');
        // this bit handles the offset so we can drag from wherever - proccess is a bit rough but fine for now
        position.setOffset({
          x: position.x._value,
          y: position.y._value,
        });
        position.setValue({ x: 0, y: 0 });
        setIsDragging(true);
      },
      
      onPanResponderMove: Animated.event(
        [null, { dx: position.x, dy: position.y }],
        { useNativeDriver: false } // layout stuff needs JS thread unfortunately
      ),
      
      onPanResponderRelease: () => {
        position.flattenOffset();
        setIsDragging(false);
        
        // Spring back to center with a nice bounce
        Animated.parallel([
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            tension: 100,
            friction: 8,
            useNativeDriver: false,
          }),
          // Quick color flash to show we've released
          Animated.timing(colorAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          // fade color back after animation completes
          Animated.timing(colorAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        });
      },
      
      onPanResponderTerminationRequest: () => false,
    })
  ).current;

  // Interpolate color from blue to purple during release animation
  const boxColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#3498db', '#9b59b6'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.box,
          {
            transform: position.getTranslateTransform(),
            backgroundColor: boxColor,
            opacity: isDragging ? 0.8 : 1, // slight transparency while dragging
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 8,
    // TODO: maybe add some shadow later?
    // Note: backgroundColor is handled by animation now
  },
});