import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/src/theme';

const icon = (name: keyof typeof Ionicons.glyphMap) => ({ color, size }: { color: string; size: number }) => <Ionicons name={name} color={color} size={size} />;

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.green,
      tabBarInactiveTintColor: colors.muted,
      tabBarStyle: { position: 'absolute', height: 86, paddingTop: 10, paddingBottom: 22, backgroundColor: '#080D09F5', borderTopColor: colors.line },
      tabBarLabelStyle: { fontSize: 10, fontWeight: '700' },
      sceneStyle: { backgroundColor: colors.bg },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Сегодня', tabBarIcon: icon('flash-outline') }} />
      <Tabs.Screen name="stats" options={{ title: 'Статистика', tabBarIcon: icon('stats-chart-outline') }} />
      <Tabs.Screen name="add" options={{ title: 'Добавить', tabBarIcon: icon('add-circle') }} />
      <Tabs.Screen name="goals" options={{ title: 'Цели', tabBarIcon: icon('flag-outline') }} />
      <Tabs.Screen name="profile" options={{ title: 'Профиль', tabBarIcon: icon('person-outline') }} />
    </Tabs>
  );
}
