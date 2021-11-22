import styled from 'styled-components/native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../lib/colors'


export const Container=styled.View`
flex:1;
align-items: center;
justify-content: center;
padding: ${RFValue(20)}px;
background-color: ${colors.bg};
`
export const Header=styled.View`
flex-direction: row;
height: ${RFValue(45)}px;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const WelcomeContainer=styled.View`

`

export const AvatarContainer=styled.View`

`

export const Greeting=styled.Text`

`

export const Title=styled.Text`

`
export const Square=styled.View`
height: 30px;
width: 30px;
background-color: aqua;
`

export const SearchContainer=styled.View`
width: 100%;
height: ${RFValue(45)}px;
background-color: #32323C;
border-radius: 50;
flex-direction: row;
justify-content:space-evenly;
align-items: center;
margin-top: ${RFValue(10)}px;

`

export const Input=styled.TextInput`
width: 80%;
`

export const SearchIcon=styled(AntDesign)`
width: 10%;
`


