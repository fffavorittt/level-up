import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/src/theme';

export function Screen({ children }: PropsWithChildren) {
  return (
    <View style={styles.root}>
      <LinearGradient colors={['#10210F', '#050806', '#050806']} locations={[0, .32, 1]} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({ root:{flex:1,backgroundColor:colors.bg}, safe:{flex:1}, content:{paddingHorizontal:20,paddingTop:12,paddingBottom:120} });
