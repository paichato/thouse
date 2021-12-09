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
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../lib/colors";
import {
  AvatarContainer,
  CategoryContainer,
  CategoryHeader,
  CategoryItemContainer,
  CategoryItems,
  CategoryItemWrapper,
  Container,
  Emojis,
  Greeting,
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

const { width, height } = Dimensions.get("window");
const itemWidth = (width / 7) * 4;
const itemHeight = (height / 5) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;

const data = ["violet", "indigo", "blue", "orange"];

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState({
    current: 1,
    previous: 0,
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
  const onScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    let newIndex = Math.floor(x / itemWidth + 0.5);
    if (activeIndex.current != newIndex) {
      setActiveIndex({ current: newIndex, previous: activeIndex.current });
    }
  };

  const handleUnFocus = () => {
    setIsFocused(false);
    Keyboard.dismiss();
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

  const Cards = () => {
    return (
      <>
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
            <Item key={x} data={x} i={i} scrollX={scrollX} />
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
              key={x}
              style={[
                {
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  marginHorizontal: 3,
                  backgroundColor: "#444",
                },
                i == activeIndex.current && { backgroundColor: colors.yellow },
              ]}
            />
          ))}
        </View>
      </>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleUnFocus}>
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
          <Input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={colors.text}
            placeholder="pesquisar"
          />
        </SearchContainer>
        {!isFocused ? (
          <>
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
                <CatItem text="Romance" emo="😂" />
                <CatItem text="Romance" emo="🔥" />
                <CatItem text="Romance" emo="😘" />
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
                  <Item key={x} data={x} i={i} scrollX={scrollX} />
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
                    key={x}
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
          </>
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
        <Text>{data}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
