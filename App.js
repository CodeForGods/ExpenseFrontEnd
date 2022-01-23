import { StyleSheet, Text, View } from 'react-native';
import NavigationHandler from './Navigation/NavigationHandler';
export default function App() {
  return (
  <NavigationHandler/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
