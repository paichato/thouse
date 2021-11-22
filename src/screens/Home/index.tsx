import React from "react";
import { View, Text } from "react-native";
import colors from "../../lib/colors";
import {
  AvatarContainer,
  Container,
  Greeting,
  Header,
  Input,
  SearchContainer,
  SearchIcon,
  Square,
  Title,
  WelcomeContainer,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <WelcomeContainer>
          <Greeting>Welcome fulano</Greeting>
          <Title>Vamos relaxar e assistir um filme</Title>
        </WelcomeContainer>
        <AvatarContainer>
          <Square />
        </AvatarContainer>
      </Header>

      <SearchContainer>
        <SearchIcon name="search1" size={24} color="black" />
        <Input placeholderTextColor={colors.text} placeholder="pesquisar" />
      </SearchContainer>
    </Container>
  );
};

export default Home;
