import DraggableBox from '@/components/DraggableBox';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Gesture Demo</ThemedText>
        <ThemedText style={styles.instruction}>
          Drag the box around and release to see it snap back!
        </ThemedText>
      </ThemedView>
      <DraggableBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  instruction: {
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.7,
  },
});
