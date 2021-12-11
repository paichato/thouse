import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../lib/colors";
import { BackArrow, Greeting, Greeting1 } from "../Home/styles";
import {
  BookButton,
  Container,
  HeaderContainer,
  MoviesDetailsContainer,
  MoviesExtraDetailsContainer,
  MoviesExtraDetailsItem,
  MovieTitle,
  SinopseContainer,
  Title,
  VideoIcon,
} from "./styles";
import * as Animatable from "react-native-animatable";

export default function MoviesDetails({navigation}) {
  const uri =
    "https://br.web.img2.acsta.net/pictures/21/05/10/15/32/2425639.png";

  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{ marginRight: "25%" }}>
          <BackArrow name="md-chevron-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Title>Detalhes do filme</Title>
      </HeaderContainer>
      <MoviesDetailsContainer>
        <Animatable.Image
          animation="zoomInUp"
          source={{ uri }}
          style={{
            height: RFValue(240),
            width: RFValue(200),
            borderRadius: 20,
          }}
        />
        <MoviesExtraDetailsContainer>
          <MoviesExtraDetailsItem animation='fadeInRightBig' >
            <VideoIcon name="video" size={24} color={colors.white} />
            <Greeting>Genero</Greeting>
            <Title>Horror</Title>
          </MoviesExtraDetailsItem>
          <MoviesExtraDetailsItem animation='fadeInRightBig' delay={100}>
            <VideoIcon name="clock-time-five" size={24} color={colors.white} />
            <Greeting>Duracao</Greeting>
            <Title>1h 20m</Title>
          </MoviesExtraDetailsItem>
          <MoviesExtraDetailsItem animation='fadeInRightBig' delay={200}>
            <VideoIcon name="star" size={24} color={colors.white} />
            <Greeting>Avaliacao</Greeting>
            <Title>8.7/10</Title>
          </MoviesExtraDetailsItem>
        </MoviesExtraDetailsContainer>
      </MoviesDetailsContainer>
      <MovieTitle>Venom 2: Let there be Carnage</MovieTitle>

      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          height: "100%",
          paddingTop: 16,
          paddingBottom: 16,
          //   alignItems: 'flex-start',justifyContent:'space-around'
        }}
      >
        <Title>Sinopse</Title>
        <Greeting1 style={{marginTop:8}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Greeting1>
      </ScrollView>

      <BookButton style={{ elevation: 30 }}>
        <Greeting>Reservar agora</Greeting>
      </BookButton>
    </Container>
  );
}
