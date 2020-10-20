import React, { Component } from "react";
import styled, { css } from "styled-components";
import Header from "components/header";
import { WrapperStyle } from "./style";
import { Row, Col } from "antd";

class Home extends Component {
  render() {
    return (
      <WrapperStyle>
        <Header />
        <section className="intro">
          <div className="container">
            <div className="content">
              <div className="center_text">
                <h2>The way in the world is just one,</h2>
                <h3>
                  and that way is <span> TRUTH </span>.
                </h3>
                <a href="#"> JOIN US </a>
              </div>
            </div>
          </div>
          <div className="items_content">
            <div className="container">
              <div className="items">
                <div className="item">
                  <div className="pic_box">
                    <img src="img/pic/intro_img_one.jpg" alt="" />
                    <h4>Ravanshad</h4>
                  </div>
                  <p>
                    celebrating Zoroastrian-inspired artists Ex: gallery
                    exhibitions, trips to collections, poetry reading sessions,
                    meetings of Shahnamehkhooni groups, meetings of Tanavoli
                    collectors.
                  </p>
                </div>
                <div className="item">
                  <div className="pic_box">
                    <img src="img/pic/intro_img_two.jpg" alt="" />
                    <h4>Ojaghrowshan</h4>
                  </div>
                  <p>
                    celebrating Zoroastrian-inspired artists Ex: gallery
                    exhibitions, trips to collections, poetry reading sessions,
                    meetings of Shahnamehkhooni groups, meetings of Tanavoli
                    collectors.
                  </p>
                </div>
                <div className="item">
                  <div className="pic_box">
                    <img src="img/pic/intro_img_three.jpg" alt="" />
                    <h4>Honarmand</h4>
                  </div>
                  <p>
                    celebrating Zoroastrian-inspired artists Ex: gallery
                    exhibitions, trips to collections, poetry reading sessions,
                    meetings of Shahnamehkhooni groups, meetings of Tanavoli
                    collectors.
                  </p>
                </div>
                <div className="item">
                  <div className="pic_box">
                    <img src="img/pic/intro_img_four.jpg" alt="" />
                    <h4>Behdin events</h4>
                  </div>
                  <p>
                    celebrating Zoroastrian-inspired artists Ex: gallery
                    exhibitions, trips to collections, poetry reading sessions,
                    meetings of Shahnamehkhooni groups, meetings of Tanavoli
                    collectors.
                  </p>
                </div>
                <div className="item">
                  <div className="pic_box">
                    <img src="img/pic/intro_img_five.jpg" alt="" />
                    <h4>Pole Tajer</h4>
                  </div>
                  <p>
                    celebrating Zoroastrian-inspired artists Ex: gallery
                    exhibitions, trips to collections, poetry reading sessions,
                    meetings of Shahnamehkhooni groups, meetings of Tanavoli
                    collectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="items">
          <div className="container">
            <div className="content">
              <div className="item_main_title">
                <h3>Popular Groups</h3>
                <a href="#" className="more">
                  {" "}
                  See all{" "}
                </a>
              </div>

              <Row className="justify-content-md-center">
                <Col lg={4} md={12}>
                  <div className="item">
                    <img src="img/pic/populer_groups_img.png" alt="" />

                    <div className="text_content">
                      <div className="top_stairs">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="dis_stairs"></span>
                        <span className="dis_stairs"></span>
                      </div>

                      <h4>
                        <a href="#"> Intimate friends </a>
                      </h4>
                      <h5>Ravanshad</h5>

                      <div className="view__join">
                        <div className="left">
                          <span className="view"> 114 </span>
                        </div>
                        <a href="#" className="join">
                          {" "}
                          Join now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="item">
                    <img src="img/pic/populer_groups_img.png" alt="" />

                    <div className="text_content">
                      <div className="top_stairs">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="dis_stairs"></span>
                        <span className="dis_stairs"></span>
                      </div>

                      <h4>
                        <a href="#"> Intimate friends </a>
                      </h4>
                      <h5>Ravanshad</h5>

                      <div className="view__join">
                        <div className="left">
                          <span className="view"> 114 </span>
                        </div>
                        <a href="#" className="join">
                          {" "}
                          Join now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={12}>
                  <div className="item">
                    <img src="img/pic/populer_groups_img.png" alt="" />

                    <div className="text_content">
                      <div className="top_stairs">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="dis_stairs"></span>
                        <span className="dis_stairs"></span>
                      </div>

                      <h4>
                        <a href="#"> Intimate friends </a>
                      </h4>
                      <h5>Ravanshad</h5>

                      <div className="view__join">
                        <div className="left">
                          <span className="view"> 114 </span>
                        </div>
                        <a href="#" className="join">
                          {" "}
                          Join now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="items">
          <div className="container">
            <div className="content">
              <div className="item_main_title">
                <h3>Groups near you</h3>
                <a href="#" className="more">
                  {" "}
                  See all{" "}
                </a>
              </div>

              <Row className="justify-content-md-center">
                <Col lg={4} md={12}>
                  <div className="item">
                    <img src="img/pic/populer_groups_img.png" alt="" />

                    <div className="text_content">
                      <div className="top_stairs">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="dis_stairs"></span>
                        <span className="dis_stairs"></span>
                      </div>

                      <h4>
                        <a href="#"> Intimate friends </a>
                      </h4>
                      <h5>Ravanshad</h5>

                      <div className="view__join">
                        <div className="left">
                          <span className="location"> Tehran </span>
                          <span className="view"> 114 </span>
                        </div>
                        <a href="#" className="join">
                          {" "}
                          Join now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="item">
                    <img src="img/pic/populer_groups_img.png" alt="" />

                    <div className="text_content">
                      <div className="top_stairs">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="dis_stairs"></span>
                        <span className="dis_stairs"></span>
                      </div>

                      <h4>
                        <a href="#"> Intimate friends </a>
                      </h4>
                      <h5>Ravanshad</h5>

                      <div className="view__join">
                        <div className="left">
                          <span className="location"> Tehran </span>
                          <span className="view"> 114 </span>
                        </div>
                        <a href="#" className="join">
                          {" "}
                          Join now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12}>
                  <div className="item">
                    <img src="img/pic/populer_groups_img.png" alt="" />

                    <div className="text_content">
                      <div className="top_stairs">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="dis_stairs"></span>
                        <span className="dis_stairs"></span>
                      </div>

                      <h4>
                        <a href="#"> Intimate friends </a>
                      </h4>
                      <h5>Ravanshad</h5>

                      <div className="view__join">
                        <div className="left">
                          <span className="location"> Tehran </span>
                          <span className="view"> 114 </span>
                        </div>
                        <a href="#" className="join">
                          {" "}
                          Join now{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="new_events_coming_up">
          <div className="container">
            <div className="content">
              <div className="item_main_title">
                <h3>New events coming up</h3>
                <a href="#" className="more">
                  {" "}
                  See all{" "}
                </a>
              </div>

              <Row className="justify-content-lg-center justify-content-md-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="item">
                    <div className="pic">
                      <img src="img/pic/New_events_coming_up.png" alt="" />

                      <div className="text">
                        <div className="date">22 MAR 2020</div>
                        <h4>
                          <a href="#"> Riding bicycle in jungle </a>
                        </h4>
                      </div>
                    </div>
                    <div className="text_content">
                      <h5>
                        <a href="#"> Bachehaye khoshhal Iran </a>
                      </h5>

                      <div className="btn__map_attend_num">
                        <div className="map_attend_num">
                          <span className="map"> Tehran </span>
                          <span className="attend">
                            Attending
                            <span className="num"> 09 </span>
                          </span>
                        </div>
                        <a href="#" className="btn">
                          {" "}
                          Attend{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="item">
                    <div className="pic">
                      <img src="img/pic/New_events_coming_up.png" alt="" />

                      <div className="text">
                        <div className="date">22 MAR 2020</div>
                        <h4>
                          <a href="#"> Riding bicycle in jungle </a>
                        </h4>
                      </div>
                    </div>
                    <div className="text_content">
                      <h5>
                        <a href="#"> Bachehaye khoshhal Iran </a>
                      </h5>

                      <div className="btn__map_attend_num">
                        <div className="map_attend_num">
                          <span className="map"> Tehran </span>
                          <span className="attend">
                            Attending
                            <span className="num"> 09 </span>
                          </span>
                        </div>
                        <a href="#" className="btn">
                          {" "}
                          Attend{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="item">
                    <div className="pic">
                      <img src="img/pic/New_events_coming_up.png" alt="" />

                      <div className="text">
                        <div className="date">22 MAR 2020</div>
                        <h4>
                          <a href="#"> Riding bicycle in jungle </a>
                        </h4>
                      </div>
                    </div>
                    <div className="text_content">
                      <h5>
                        <a href="#"> Bachehaye khoshhal Iran </a>
                      </h5>

                      <div className="btn__map_attend_num">
                        <div className="map_attend_num">
                          <span className="map"> Tehran </span>
                          <span className="attend">
                            Attending
                            <span className="num"> 09 </span>
                          </span>
                        </div>
                        <a href="#" className="btn">
                          {" "}
                          Attend{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="item">
                    <div className="pic">
                      <img src="img/pic/New_events_coming_up.png" alt="" />

                      <div className="text">
                        <div className="date">22 MAR 2020</div>
                        <h4>
                          <a href="#"> Riding bicycle in jungle </a>
                        </h4>
                      </div>
                    </div>
                    <div className="text_content">
                      <h5>
                        <a href="#"> Bachehaye khoshhal Iran </a>
                      </h5>

                      <div className="btn__map_attend_num">
                        <div className="map_attend_num">
                          <span className="map"> Tehran </span>
                          <span className="attend">
                            Attending
                            <span className="num"> 09 </span>
                          </span>
                        </div>
                        <a href="#" className="btn">
                          {" "}
                          Attend{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="content">
              <div className="left">
                <a href="#" className="logo">
                  <img src="img/logo/logo.png" alt="" />
                </a>

                <ul>
                  <li>
                    <a href="#"> About </a>
                  </li>
                  <li>
                    <a href="#"> Contact us </a>
                  </li>
                  <li>
                    <a href="#"> Term and condition </a>
                  </li>
                  <li>
                    <address>Address : Iran -tehran - …..</address>
                  </li>
                </ul>
              </div>
              <div className="right">
                <p>
                  Sample : We make a living by what we get, But we make a life
                  by what we give.”“We make a living by what we get, But we make
                  a life by what we give.”“We make a living by what we get, But
                  we make a life by what we give.”
                </p>
                <a href="#" className="btn">
                  {" "}
                  Donate here{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="copy_right">
            <div className="container">
              <div className="copy_right_content">
                <p>Copy right by …..</p>

                <ul>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li className="instagram">
                    <a href="#"> </a>
                  </li>
                  <li className="twitter">
                    <a href="#"> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </WrapperStyle>
    );
  }
}
export default Home;
