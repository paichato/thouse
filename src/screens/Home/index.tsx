import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../lib/colors";
import {
  AvatarContainer,
  BackArrow,
  BackCointainer,
  BackText,
  CategoryContainer,
  CategoryHeader,
  CategoryItemContainer,
  CategoryItems,
  CategoryItemWrapper,
  Container,
  Emojis,
  Greeting,
  Greeting1,
  Header,
  Input,
  RightArrowIcon,
  SearchContainer,
  SearchIcon,
  SeeAllContainer,
  SeeAllText,
  Square,
  Title,
  WelcomeContainer,
} from "./styles";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");
const itemWidth = (width / 7) * 4;
const itemHeight = (height / 5) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
const uri = "https://br.web.img2.acsta.net/pictures/21/05/10/15/32/2425639.png";
const uri2 = "https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg";
const uri4 =
  "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg";
const uri3 =
  "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_FMjpg_UX1000_.jpg";

const data = [
  { text: "violet", uri: uri },
  { text: "indigo", uri: uri2 },
  { text: "blue", uri: uri3 },
  { text: "orange", uri: uri4 },
];

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState({
    current: 0,
    previous: null,
  });
  const scale = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    animate();
  }, []);
  useEffect(() => {
    animate();
  }, [activeIndex]);
  const animate = () => {
    scale.setValue(0);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 1,
      bounciness: 1000,
    }).start();
  };

  //--------------------------------------------------------------------->>>>>>
  //For General
  const [animation, setAnimation] = useState({
    visible: false,
    type: "",
  });
  const animate2 = (type: string) => {
    // setAnimation({ visible: false, type });
    // setTimeout(() => {
    // setAnimation({ visible: true, type });
    // }, 550);
  };
  const prop = animation.visible ? { animation: animation.type } : {};
  //--------------------------------------------------------------------->>>>>>

  const onScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    let newIndex = Math.floor(x / itemWidth + 0.5);
    if (activeIndex.current != newIndex) {
      setActiveIndex({ current: newIndex, previous: activeIndex.current });
    }
  };

  const handleUnFocus = () => {
    if (isFocused) {
      Keyboard.dismiss();
      // setIsFocused(false);
      // setTimeout(() => {
      //   animate2("fadeInUp");
      // }, 1000);
    }
  };

  const handleFocus = () => {
    animate2("fadeOutDown");
    setIsFocused(true);
  };

  const CatItem = ({ emo, text, action }) => {
    return (
      <CategoryItemContainer onPress={() => console.log("hello")}>
        <CategoryItemWrapper>
          <Emojis>{emo}</Emojis>
        </CategoryItemWrapper>
        <Greeting>{text}</Greeting>
      </CategoryItemContainer>
    );
  };

  return (
    <TouchableWithoutFeedback>
      <Container>
        {activeIndex.current === 0 ? (
          <Image
            style={[StyleSheet.absoluteFill, { flex: 1 }]}
            source={{ uri }}
            blurRadius={3}
          />
        ) : (
          <Image
            style={[StyleSheet.absoluteFill, { flex: 1 }]}
            source={{ uri: uri2 }}
            blurRadius={3}
          />
        )}
        <BlurView
          tint="dark"
          intensity={130}
          style={[StyleSheet.absoluteFill, { flex: 1 }]}
        ></BlurView>
        {isFocused && (
          <BackCointainer onPress={handleUnFocus}>
            <BackArrow name="md-chevron-back" size={24} color={colors.white} />
            <BackText>Voltar</BackText>
          </BackCointainer>
        )}
        <Header>
          <WelcomeContainer>
            <Greeting1>Welcome fulano</Greeting1>
            <Title>Vamos relaxar e assistir um filme</Title>
          </WelcomeContainer>
          <AvatarContainer>
            <Square />
          </AvatarContainer>
        </Header>

        <SearchContainer>
          <SearchIcon name="search1" size={24} color="black" />
          <Input
            onFocus={handleFocus}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={colors.text}
            placeholder="pesquisar"
          />
        </SearchContainer>
        {!isFocused ? (
          <Animatable.View
            // easing="ease-in-sine"
            style={{ width: "100%" }}
            {...prop}
          >
            <CategoryContainer>
              <CategoryHeader>
                <Title>Categorias</Title>
                <SeeAllContainer>
                  <SeeAllText>Ver todas</SeeAllText>
                  <RightArrowIcon
                    name="keyboard-arrow-right"
                    size={24}
                    color="black"
                  />
                </SeeAllContainer>
              </CategoryHeader>
              <CategoryItems>
                <CatItem text="Romance" emo="😍" />
                <CatItem text="Comedia" emo="😂" />
                <CatItem text="Populares" emo="🔥" />
                <CatItem text="Drama" emo="😘" />
              </CategoryItems>
            </CategoryContainer>
            <View style={{ width: "100%" }}>
              <Title>Filmes da semana</Title>
              <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                style={{ flexGrow: 0, marginTop: RFValue(20) }}
                contentContainerStyle={{
                  paddingHorizontal: padding,
                  alignItems: "center",
                  paddingVertical: 10,
                  zIndex: 1,
                }}
                showsHorizontalScrollIndicator={false}
                snapToInterval={offset}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  {
                    useNativeDriver: false,
                    listener: onScroll,
                  }
                )}
              >
                {data.map((x, i) => (
                  <Item key={x.text} data={x} i={i} scrollX={scrollX} />
                ))}
              </ScrollView>
              <View
                style={{
                  // flex: 1,
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {data.map((x, i) => (
                  <View
                    key={x.text}
                    style={[
                      {
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        marginHorizontal: 3,
                        backgroundColor: "#444",
                      },
                      i == activeIndex.current && {
                        backgroundColor: colors.yellow,
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
          </Animatable.View>
        ) : (
          <View></View>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;

function Item({ i, data, scrollX }) {
  const scale = scrollX.interpolate({
    inputRange: [-offset + i * offset, i * offset, offset + i * offset],
    outputRange: [0.9, 1, 0.9],
  });
  return (
    <TouchableWithoutFeedback onPress={() => console.log("hi")}>
      <Animated.View
        style={[
          {
            height: itemHeight,
            width: itemWidth,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            backgroundColor: "#fff",
            elevation: 5,
          },
          { transform: [{ scale }] },
        ]}
      >
        <ImageBackground
          style={{
            flex: 1,
            width: "100%",
            overflow: "hidden",
            borderRadius: 30,
          }}
          source={{ uri: data?.uri }}
        >
          {/* <Text>{data?.text}</Text> */}
        </ImageBackground>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
