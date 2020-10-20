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
      <Form layout={"vertical"} form={form}>
        <FormItem label="Form Layout" name="layout" theme="dark">
          <Radio.Group>
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group>
        </FormItem>
        <FormItem label="Field A">
          <Input placeholder="input placeholder" />
        </FormItem>
        <FormItem label="Field B">
          <Input placeholder="input placeholder" />
        </FormItem>
        <FormItem name="field" noStyle>
          <Input />
        </FormItem>
        // that will bind input
        <FormItem>
          <Button type="primary">Submit</Button>
        </FormItem>
      </Form>
    </div>
  );
};
export default Home;
