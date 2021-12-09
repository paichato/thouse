import styled from 'styled-components/native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../lib/colors'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


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
color:${colors.text};
`

export const Title=styled.Text`
color:${colors.white};
font-weight: bold;
`
export const Square=styled.View`
height: 30px;
width: 30px;
background-color: aqua;
border-radius: 5px;
`

export const SearchContainer=styled.View`
width: 100%;
height: ${RFValue(45)}px;
background-color: ${colors.unselected};
border-radius: 50px;
flex-direction: row;
justify-content:space-evenly;
align-items: center;
margin-top: ${RFValue(10)}px;

`

export const Input=styled.TextInput`
width: 80%;
color:${colors.text};
`

export const SearchIcon=styled(AntDesign)`
width: 10%;
color: ${colors.text};
`

export const CategoryContainer=styled.View`
width: 100%;
`

export const CategoryHeader=styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const SeeAllContainer=styled.View`
flex-direction: row;
align-items: center;
`

export const SeeAllText=styled.Text`
color: ${colors.yellow};

`

export const RightArrowIcon=styled(MaterialIcons)`
color: ${colors.yellow};
`

export const CategoryItemContainer=styled(TouchableOpacity)`

`
export const CategoryItemWrapper=styled.View`
width: ${RFValue(60)}px;
height:${RFValue(60)}px;
border-radius: 15px;
background-color: ${colors.unselected};
align-items: center;
justify-content: center;
`
export const Emojis=styled.Text`
font-size: ${RFValue(25)}px;

`

export const CategoryItems=styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`



