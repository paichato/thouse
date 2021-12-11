import styled from "styled-components/native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from "../../../lib/colors";
import fonts from "../../../lib/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";

export const Container=styled.View`
flex:1;
width: 100%;
/* align-items: center; */
/* justify-content: center; */
padding: ${RFValue(20)}px;
background-color: ${colors.bg};
`
export const HeaderContainer=styled.View`
flex-direction: row;
align-items: center;
width: 100%;
margin-top:16px;
`
export const MoviesDetailsContainer=styled.View`
flex-direction: row;
width: 100%;
align-self:center;
margin-top:24px;
`
export const MoviesExtraDetailsContainer=styled.View`

width: 40%;
align-items: center;
justify-content:center;
justify-content:space-between;
/* height: ${RFValue(240)}px; */

`
export const MoviesExtraDetailsItem=styled(Animatable.View)`
/* flex-direction: row; */
align-items: center;
/* justify-content:space-around; */
width: ${RFValue(70)}px;
height: ${RFValue(70)}px;
border: 0.25px solid ${colors.white};
border-radius:5px;
padding-top:${RFValue(4)}px;
`

export const MovieTitle=styled.Text`
color:${colors.white};
font-size:18px;
font-family:${fonts.bold};
border-bottom-width: 1px ;
border-bottom-color:${colors.unselected};
width: 100%;
margin-top:16px;
padding-bottom:16px;
`
export const VideoIcon=styled(MaterialCommunityIcons)`
/* margin-right:8px; */
`

export const Title=styled.Text`
color:${colors.white};
/* font-weight: bold; */
font-family:${fonts.bold};
`

export const SinopseContainer=styled.ScrollView`
/* width: 100%; */
/* height: ${RFValue(10)}px; */

`

export const BookButton=styled(TouchableOpacity)`
background-color:${colors.yellow};
width: ${RFValue(180)}px;
height: ${RFValue(40)}px;
border-radius:8px;
align-items:center;
justify-content:center;
align-self:center;
position: absolute;
bottom: 40px;
`