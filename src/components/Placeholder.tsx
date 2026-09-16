import { StyleSheet, Text, View } from 'react-native';
import { Screen } from './Screen';
import { colors } from '@/src/theme';
export function Placeholder({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}){return <Screen><Text style={s.eye}>{eyebrow}</Text><Text style={s.title}>{title}</Text><View style={s.card}><Text style={s.copy}>{copy}</Text></View></Screen>}
const s=StyleSheet.create({eye:{color:colors.green,fontWeight:'900',letterSpacing:2,fontSize:11,marginTop:8},title:{color:colors.text,fontWeight:'900',fontSize:34,marginTop:8,marginBottom:24},card:{backgroundColor:colors.surface,borderColor:colors.line,borderWidth:1,borderRadius:24,padding:22},copy:{color:colors.muted,fontSize:14,lineHeight:21}});
