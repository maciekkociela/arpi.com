import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Arrow from "../images/svg-icons/arrow-right-gray.svg";
import Container from "../components/Container";
import Hamburger from "../components/Menu/Hamburger";

class IndexPage extends Component {
  componentDidMount() {
    //setTimeout(function(){ location.href = "/services"; }, 6000);
  }
  
  render() {
    return (
      <StaticQuery
        query={graphql`
          query allIndexPageData {
            allWordpressPage(sort: { fields: menu_order, order: ASC }) {
              edges {
                node {
                  title
                  slug
                  acf {
                    button
                    link
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="mainSection">
            <Hamburger />
            <Container>
              <p>{data.allWordpressPage.edges[0].node.title}</p>
              
              <Link className="slideButton" to={data.allWordpressPage.edges[0].node.acf.link}>
                <div className="textGray">{data.allWordpressPage.edges[0].node.acf.button}</div> <Arrow /> 
              </Link>
            </Container>

            <div className="colorBar">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <style jsx>{`

            .colorBar {
              position: fixed;
              bottom: 0px;
              display: flex;
              width: 110%;
              left: -5%;
              height: 30px;
              span {
                width: 25%;
                transform: skewX(-25deg);
              }
              span:nth-child(1) {
                background-image: linear-gradient(122deg, rgb(26, 140, 207), rgb(23, 168, 254));
              }
              span:nth-child(2) {
                background-image: linear-gradient(122deg, rgb(0, 68, 132), rgb(14, 104, 188));
              }
              span:nth-child(3) {
                background-image: linear-gradient(122deg, rgb(127, 29, 70), rgb(187, 50, 107));
              }
              span:nth-child(4) {
                background-image: linear-gradient(122deg, rgb(234, 65, 72), rgb(255, 119, 124));
              }
            }

            
              .mainSection {
                height: 100vh;
                display: flex;
                align-items: center;

                

                
                
                
                p {
                  color: #434343;
                  line-height: 66px;
                  font-weight: 400;
                  font-size: 64px;
                  max-width: 673px;
                  letter-spacing: 0.045em;
                  margin-bottom: 40px;  
                  margin-top: 100px;
                  @media(max-width: 1000px) {
                    margin-bottom: 5px;
                    line-height: 44px;
                    font-size: 40px;
                    max-width: 263px;
                    margin-top: 0px;
                  }
                  @media(max-width: 500px) {
                    
                    margin-bottom: 40px;
                  }
                }
              }
              
            `}</style>
          </div>
        )}
      />
    );
  }
}

export default IndexPage;
