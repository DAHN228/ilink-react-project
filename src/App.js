import React, { useState } from "react";
import Header from "./components/Header/Header";
import PersonalData from "./components/PersonalData/PersonalData";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {
  const windowWidth = window.innerWidth
  return (
    <div className="App">
      {
        windowWidth <= 320
        ? <Header name={"Данила"} img={process.env.PUBLIC_URL + "/assets/img/Avatar_small.png"}></Header>
        : <Header name={"Данила Ермаков"} img={process.env.PUBLIC_URL + "/assets/img/Avatar_small.png"}></Header>
        }
      <h1>Добро пожаловать в академию!</h1>
      <PersonalData
        img={process.env.PUBLIC_URL + "/assets/img/Avatar.jpg"}
        name={"Данила Ермаков"}
        date_of_birth={"18.02.1999"}
        city={"Томск"}
        sex={"Мужской"}
        sex_logo={process.env.PUBLIC_URL + "/assets/icons/male.svg"}
        age={23}
        about={
          "Привет, я Даня! С самой школы увлекаюсь IT, первые простенькие сайты делал в 11 классе. А сейчас уже 5й год обучаюсь на IT-специальности в Томском Политехе. Очень люблю видеоигры, гулять, устраивать велопрогулки, живое общение и животных.   BTW: У меня есть классная рыжая собачка Зина породы Русский Спаниель :)"
        }
        pet={"есть"}
        pet_logo={process.env.PUBLIC_URL + "/assets/icons/pet.svg"}
      ></PersonalData>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
