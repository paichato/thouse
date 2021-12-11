import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../lib/colors";
import { BackArrow, Greeting } from "../Home/styles";
import {
  Container,
  HeaderContainer,
  MoviesDetailsContainer,
  MoviesExtraDetailsContainer,
  MoviesExtraDetailsItem,
  Title,
} from "./styles";

export default function MoviesDetails() {
  const uri =
    "https://br.web.img2.acsta.net/pictures/21/05/10/15/32/2425639.png";

  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity style={{ marginRight: "25%" }}>
          <BackArrow name="md-chevron-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Title>Detalhes do filme</Title>
      </HeaderContainer>
      <MoviesDetailsContainer>
        <Image
          source={{ uri }}
          style={{
            height: RFValue(240),
            width: RFValue(200),
            borderRadius: 20,
          }}
        />
        <MoviesExtraDetailsContainer>
          <MoviesExtraDetailsItem>
            <Text>Hello</Text>
            <Greeting>hello</Greeting>
            <Title>Hello</Title>
          </MoviesExtraDetailsItem>
          <MoviesExtraDetailsItem>
            <Text>Hello</Text>
            <Greeting>hello</Greeting>
            <Title>Hello</Title>
          </MoviesExtraDetailsItem>
          <MoviesExtraDetailsItem>
            <Text>Hello</Text>
            <Greeting>hello</Greeting>
            <Title>Hello</Title>
          </MoviesExtraDetailsItem>
        </MoviesExtraDetailsContainer>
      </MoviesDetailsContainer>
    </Container>
  );
}
