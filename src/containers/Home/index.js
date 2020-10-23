import React, { Component } from "react";
import styled, { css } from "styled-components";
import { WrapperStyle } from "./style";
import { Header, HeroImage, FormItem } from "components";
import BgImage from "assets/images/intro_bg.jpg";
import { useQuery, gql } from "@apollo/client";
import { Form, Button, Radio, Input } from "antd";

const EXCHANGE_RATES = gql`
  query {
    users {
      id
      lastname
      firstname
      email
      role
      avatarUrl
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  console.log(loading, error, data);
  const [form] = Form.useForm();
  return (
    <div>
      <Header light />
      <HeroImage img={BgImage} overlay />
    </div>
  );
};
export default Home;
