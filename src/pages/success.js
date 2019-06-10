import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import { ThemeContext } from "../layouts";

import Container from "../components/Container";

class IndexPage extends Component {
  // componentDidMount() {
  //   setTimeout(function(){ location.href = "/"; }, 2000);
  // }
  render() {
    return (
      <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (

      <StaticQuery
        query={graphql`
          query allSuccessPageData {
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
          <div className="mainSection successPage">
            
            <Container>
              <p>Sent</p>
              <Link to={data.allWordpressPage.edges[0].node.acf.link}>
                {data.allWordpressPage.edges[0].node.acf.button}
              </Link>
            </Container>

            
          </div>
        )}
      />

      )}
      </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

export default IndexPage;
