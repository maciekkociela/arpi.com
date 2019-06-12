import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import ReactFullpage from "@fullpage/react-fullpage";
import Image from "gatsby-image";

import Container from "../components/Container";

import Arrow from "../images/svg-icons/arrow.svg";

class IndexPage extends Component {

  

  render() {
    
    return (
      <div>
        <div className="backHome">
          <Container>
            <Link to="/pl">
              <div className="slideButton goBackHome">
                <div>Powrót</div> <span className="rotateUp"><Arrow /></span>
              </div>
            </Link>
          </Container>
        </div>
        <StaticQuery
          query={graphql`
            query allPlFullPageData {
              allWordpressPost(sort: { fields: menu_order, order: ASC }) {
                edges {
                  node {
                    title
                    slug
                    content
                    excerpt
                    language
                    acf {
                      text
                      gradient
                      link
                      logo {
                        source_url
                      }
                    }
                  }
                }
              }
              allWordpressWpLanguage {
                edges {
                  node {
                    wordpress_id
                    name
                    slug
                  }
                }
              }
            }
          `}
          render={data => (
            
            <ReactFullpage
            licenseKey={'D9096ED4-77F14A81-8A5B07B2-83C84CBE'}
              navigation
              continuousVertical
              
              anchors={data.allWordpressPost.edges
                .filter(edge => edge.node.language == "5")
                .map(edge => edge.node.slug)}
              render={({ state, fullpageApi }) => {
                return (
                  <div>
                    <ReactFullpage.Wrapper>
                      {data.allWordpressPost.edges
                        .filter(edge => edge.node.language == "5")
                        .map((edge, i, arr) => (
                          <div key={edge.node.acf.text}
                            className="section fullpageSlide"
                            style={{ backgroundImage: edge.node.acf.gradient }}
                          >
                            <Container>
                              <div className="slideContent">
                                <div className="slideContentItem">
                                  <img className="logo" src={edge.node.acf.logo.source_url} />
                                  <p>{edge.node.acf.text}</p>
                                  <p>{edge.node.lang}</p>
                                  <div className="proceed mobileOnly">
                                    <a href={edge.node.acf.link} target="_blank">
                                      <div className="proceedText">Kontynuuj</div> <Arrow />
                                    </a>
                                  </div>
                                  <div className="slideButtons"
                                  // className={arr.length - 1 === i ? 'last' : ''}
                                  >
                                    <div
                                      className="slideButton next"
                                      onClick={() => fullpageApi.moveSectionDown()}
                                    >
                                      <div>Dalej</div> <span className="rotateDown"><Arrow /></span>
                                      
                                    </div>
                                    <Link to="/pl">
                                    <div
                                      className="slideButton mobileBackHome next"
                                    >
                                      <div>Powrót</div> <span className="rotateUp"><Arrow /></span>
                                    </div>
                                    </Link>
                                  </div>

                                </div>
                                <div className="slideContentItem desktopOnly">
                                  <div className="proceed">
                                    <a href={edge.node.acf.link} target="_blank">
                                      <div className="proceedText">Kontynuuj</div> <Arrow />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Container>
                          </div>
                        ))}
                    </ReactFullpage.Wrapper>
                  </div>
                );
              }}
            />
          )}
        />

        <style jsx>{`

        .slideContentItem {
          @media(min-width:560px){
            @media(max-width:830px){
              .slideButtons {
                position: relative;
              }
            }
          }
        }

        .mobileBackHome {
          @media(min-width:831px){
          display: none !important;
          }
          @media(min-width:560px){
            @media(max-width:830px){
              position: absolute;
              top: 0;
              left: 100px;
            }
          }
          @media(max-width:559px){
            display: none !important;
            }
        }
        

        .backHome {
          @media(min-width:560px){
            @media(max-width:830px){
              display: none;
            }
          }
        }

        .last {
          display: none;
        }

        .rotateDown {
          transform: rotate(90deg);
        }

        .rotateUp {
          transform: rotate(-90deg);
          position: relative;
          left: 1px;
        }

        .logo {
          width: 198px;
          @media(max-width: 1000px) {
            width:145px;
          }
        }
          .mobileOnly {
            display: none;
          }
          
          .slideContent {
            display: flex;
            align-items: center;
            .slideContentItem {
              width: 50%;

              @media(max-width: 640px) {
                width: 100%;
              }

              .proceedText {
                font-family: geomanist-bold;
                font-size: 26px;
                color: #fff;

                display: inline-block;
                margin-right: 15px;
              }
              .proceed {
                opacity: 0.6;
                float: right;
                transition: 0.2s;
                :hover {
                  opacity: 1;
                }
              }
            }
          }

          .slideButton {
            font-family: "geomanist-bold";
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #fff;
            line-height: 41px;
            font-weight: 700;
            opacity: 0.6;
            letter-spacing: 0.03em;
            transition: 0.2s;
            cursor: pointer;
            :hover {
              opacity: 1;
            }
            div {
              margin-right: 15px;
            }
          }
          .fullpageSlide {
            p {
              color: #fff;
              opacity: 0.6;
              font-size: 34px;
              max-width: 543px;
              line-height: 40px;
              margin-top: 40px;
              margin-bottom: 40px;
              letter-spacing: 0.03em;
              @media(max-width: 830px) {
                line-height: 32px;
                  font-size: 30px;
              }
              @media(max-width: 680px) {
                line-height: 26px;
                  font-size: 24px;
              }
              @media(max-width: 530px) {
                {
                  font-size: 20px;
                  line-height: 28px;
                  margin-top: 40px;
                }
              }
            }
          }
          .backHome {
            position: fixed;
            top: 40px;
            left: 0;
            z-index: 3;
            width: 100%;
          }
          @media(max-width: 640px) {
            .proceed {
              float: right !important;
            }
            .desktopOnly {
              display: none;
            }
            .mobileOnly {
              display: block;
            }
            .next {
              position: absolute;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default IndexPage;
