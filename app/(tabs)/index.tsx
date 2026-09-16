import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Screen } from '@/src/components/Screen';
import { colors, radius } from '@/src/theme';

const actions = [
  ['Тренировка', 'ТЕЛО', '+30 XP'],
  ['Главная задача дня', 'РАБОТА', '+25 XP'],
  ['Чтение · 20 минут', 'РАЗВИТИЕ', '+20 XP'],
  ['Без прокрастинации', 'ДИСЦИПЛИНА', '+25 XP'],
];

export default function Today() {
  return <Screen>
    <View style={s.top}><View><Text style={s.eyebrow}>LEVEL UP</Text><Text style={s.hello}>Доброе утро, Фарух</Text></View><View style={s.avatar}><Text style={s.avatarText}>Ф</Text></View></View>
    <View style={s.levelRow}><View><Text style={s.rank}>НОВИЧОК · УРОВЕНЬ 1</Text><Text style={s.xp}>120 <Text style={s.muted}>/ 500 XP</Text></Text></View><Text style={s.percent}>24%</Text></View>
    <View style={s.track}><LinearGradient colors={[colors.greenSoft, colors.green]} style={[s.fill,{width:'24%'}]} /></View>

    <LinearGradient colors={['#142016','#0B100D']} style={s.hero}>
      <View><Text style={s.heroLabel}>РЕЗУЛЬТАТ ДНЯ</Text><Text style={s.score}>75<Text style={s.scoreSmall}>%</Text></Text><Text style={s.muted}>3 из 4 действий выполнено</Text></View>
      <View style={s.ring}><Text style={s.ringText}>+75</Text><Text style={s.ringSub}>XP</Text></View>
    </LinearGradient>

    <View style={s.metrics}><Metric n="7" label="серия"/><Metric n="3/4" label="выполнено"/><Metric n="1" label="осталось"/></View>
    <View style={s.sectionHead}><Text style={s.section}>ДЕЙСТВИЯ</Text><Text style={s.muted}>Сегодня</Text></View>
    {actions.map((a,i)=><Pressable key={a[0]} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)} style={s.action}>
      <View style={[s.check,i<3&&s.checkOn]}>{i<3&&<Text style={s.tick}>✓</Text>}</View><View style={{flex:1}}><Text style={[s.actionName,i<3&&s.done]}>{a[0]}</Text><Text style={s.category}>{a[1]}</Text></View><Text style={s.actionXp}>{a[2]}</Text>
    </Pressable>)}
    <Text style={[s.section,{marginTop:24}]}>ТЕКУЩАЯ ЦЕЛЬ</Text>
    <View style={s.goal}><Text style={s.goalTag}>В ФОКУСЕ</Text><Text style={s.goalTitle}>30 тренировок</Text><Text style={s.goalMeta}>12 из 30 · 40%</Text><View style={s.goalTrack}><View style={[s.fill,{width:'40%'}]}/></View></View>
  </Screen>;
}
function Metric({n,label}:{n:string;label:string}){return <View style={s.metric}><Text style={s.metricN}>{n}</Text><Text style={s.metricL}>{label}</Text></View>}
const s=StyleSheet.create({top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},eyebrow:{color:colors.green,fontWeight:'900',letterSpacing:3,fontSize:12},hello:{color:colors.text,fontWeight:'800',fontSize:24,marginTop:5},avatar:{width:46,height:46,borderRadius:23,backgroundColor:colors.surface2,borderWidth:1,borderColor:'#29412D',alignItems:'center',justifyContent:'center'},avatarText:{color:colors.green,fontWeight:'900',fontSize:18},levelRow:{marginTop:30,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'},rank:{color:colors.green,fontWeight:'800',fontSize:11,letterSpacing:1.1},xp:{color:colors.text,fontSize:15,fontWeight:'800',marginTop:5},muted:{color:colors.muted,fontSize:12},percent:{color:colors.text,fontWeight:'800'},track:{height:6,borderRadius:99,backgroundColor:'#182019',overflow:'hidden',marginTop:10},fill:{height:'100%',borderRadius:99,backgroundColor:colors.green},hero:{marginTop:22,borderRadius:radius.lg,borderWidth:1,borderColor:'#1F3122',padding:22,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},heroLabel:{color:colors.muted,fontSize:10,fontWeight:'800',letterSpacing:1.3},score:{color:colors.text,fontSize:48,fontWeight:'900',marginVertical:4},scoreSmall:{color:colors.green,fontSize:24},ring:{width:92,height:92,borderRadius:46,borderWidth:8,borderColor:colors.green,alignItems:'center',justifyContent:'center',shadowColor:colors.green,shadowOpacity:.25,shadowRadius:16},ringText:{color:colors.text,fontWeight:'900',fontSize:22},ringSub:{color:colors.green,fontWeight:'900',fontSize:10},metrics:{flexDirection:'row',gap:9,marginTop:10},metric:{flex:1,backgroundColor:colors.surface,borderRadius:18,padding:14,borderWidth:1,borderColor:colors.line},metricN:{color:colors.text,fontWeight:'900',fontSize:19},metricL:{color:colors.muted,fontSize:10,marginTop:3},sectionHead:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:28,marginBottom:10},section:{color:colors.text,fontSize:12,fontWeight:'900',letterSpacing:1.5},action:{flexDirection:'row',alignItems:'center',gap:13,backgroundColor:colors.surface,borderWidth:1,borderColor:colors.line,borderRadius:18,padding:15,marginBottom:9},check:{width:28,height:28,borderRadius:9,borderWidth:1,borderColor:'#334039',alignItems:'center',justifyContent:'center'},checkOn:{backgroundColor:colors.green,borderColor:colors.green},tick:{color:'#071006',fontWeight:'900'},actionName:{color:colors.text,fontWeight:'800',fontSize:14},done:{color:'#8C988F'},category:{color:colors.muted,fontSize:9,fontWeight:'800',letterSpacing:1,marginTop:4},actionXp:{color:colors.green,fontSize:11,fontWeight:'900'},goal:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.line,borderRadius:22,padding:18,marginTop:10},goalTag:{color:colors.green,fontSize:9,fontWeight:'900',letterSpacing:1.2},goalTitle:{color:colors.text,fontSize:18,fontWeight:'900',marginTop:8},goalMeta:{color:colors.muted,fontSize:11,marginTop:4},goalTrack:{height:5,borderRadius:99,backgroundColor:'#182019',overflow:'hidden',marginTop:15}});
