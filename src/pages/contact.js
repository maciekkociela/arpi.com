import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Container from "../components/Container";
import Seo from "../components/Seo";
import Arrow from "../images/svg-icons/arrow-right-gray.svg";

const ContactPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="contactForm">
          <Container>
            <div>
              <Link to="/">
                <div className="linkBox linkBoxMobile">
                  <div className="link" >Go back home</div> <span className="rotateUp"><Arrow /> </span>
                </div>
              </Link>
            </div>
            <header>
              <h1>drop us a line</h1>
              <p>Describe briefly what kind of assistance can we provide</p>
              <form action="/" method="POST">

                <input type="text" name="name" placeholder="name and surname"></input>
                <input type="email" name="email" placeholder="your email"></input>
                <input type="text" name="topic" placeholder="topic"></input>
                <textarea name="message" placeholder="your message"></textarea>

              </form>
            </header>
            {/* <div className="resp-container">
                <iframe className="resp-iframe" src="https://arpistaffing.com/email/contact-form/"></iframe>
            </div> */}
            <div className="backHome">
              <Container>
              <Link to="/">
                <div className="linkBox">
                  <div className="link" >Go back home</div> <span className="rotateDown"><Arrow /> </span>
                </div>
              </Link>
              </Container>
            </div>
            
            
          </Container>
          </div>
        )}
      </ThemeContext.Consumer>

      
      <style jsx>{`

      input, textarea {
        font-family: geomanist;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        transition: .2s;
        border: 2px solid #C6C6C6 !important;
        outline: none !important;
        width: 100%;
        max-width: 343px;
        letter-spacing: 0.03em;
        line-height: 1.8;
        text-rendering: optimizeLegibility;
        padding: 0.36rem 0.66rem;
        -webkit-appearance: none;
        outline-offset: 0;
        border-radius: 0;
        box-sizing: border-box;
        display: block;
        margin-bottom: 20px;
      }
      textarea {
        min-height: 200px;
      }

      input:focus, textarea:focus {
        border-color: #555  !important;
      }

      ::placeholder {
        color: #C6C6C6; 
      }
      
      
      .backHome {
        position:fixed;
        bottom: 0;
        left: 0;
        width: 100%;
      }
      .rotateDown {
        transform: rotate(90deg);
      }
      .rotateUp {
        display: inline-block;
        transform: rotate(-90deg);
        position: relative;
        left: 1px;
      }
      h1 {
        font-size: 64px;
        line-height: 66px;
        letter-spacing: 0.03em;
        color: #434343;
        font-weight: 300;
        margin-bottom: 30px;
        margin-top: 50px;
      }
      p {
        font-size:34px;
        line-height: 40px;
        max-width: 470px;
        letter-spacing: 0.03em;
        opacity: 0.6;
        font-weight: 300;
        margin-bottom: 55px;
      }
      .linkBox {
        font-family: "geomanist-bold";
        display: flex;
        align-items: center;
        transition: .2s;
        opacity: 0.6;
        margin-bottom: 50px;
        @media(max-width:800px) {
          display: none;
        }
        :hover {
          opacity: 1;
        }
        &.linkBoxMobile {
          margin-top:50px;
          display: block;
          @media(min-width:800px) {
            display: none;
          }
        }
      }
      .link {
        font-size: 14px;
        color: #434343;
        
    line-height: 20px;
    margin-bottom: -3px;
        font-weight: 700;
        transition: .2s;
        display: inline-block;
        margin-right: 15px;
        
      }
      .contactForm {
        min-height:100vh;
        display: flex;
        align-items: center;
        z-index: 1;
        position: relative;
        background: #fff;
      }
      .resp-container {
        position: relative;
        overflow: hidden;
        height: 700px;
    }
    .resp-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
  }
  
      `}</style>
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
