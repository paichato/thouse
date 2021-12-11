import styled from "styled-components/native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from "../../../lib/colors";
import fonts from "../../../lib/fonts";
import { RFValue } from "react-native-responsive-fontsize";

export const Container=styled.View`
flex:1;
width: 100%;
align-items: center;
justify-content: center;
padding: ${RFValue(20)}px;
background-color: ${colors.bg};
`
export const HeaderContainer=styled.View`
flex-direction: row;
align-items: center;
width: 100%;
`
export const MoviesDetailsContainer=styled.View`
flex-direction: row;
width: 100%;
align-self:center;

`
export const MoviesExtraDetailsContainer=styled.View`

width: 40%;
align-items: center;
justify-content:center;
justify-content:space-between;
/* height: ${RFValue(240)}px; */

`
export const MoviesExtraDetailsItem=styled.View`
/* flex-direction: row; */
align-items: center;
/* justify-content:space-around; */
width: ${RFValue(70)}px;
height: ${RFValue(70)}px;
border: 0.25px solid ${colors.white};
border-radius:5px;
`

export const MovieTitle=styled.View`
color:${colors.white};
font-size:18px;
font-family:${fonts.bold};
`
export const CloseIcon=styled(Ionicons)`
margin-right:8px;
`

export const Title=styled.Text`
color:${colors.white};
/* font-weight: bold; */
font-family:${fonts.bold};
`