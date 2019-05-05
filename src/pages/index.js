import React, { Component } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Container from "../components/Container";

class IndexPage extends Component {
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
            <Container>
              <p>{data.allWordpressPage.edges[0].node.title}</p>
              <Link to={data.allWordpressPage.edges[0].node.acf.link}>
                {data.allWordpressPage.edges[0].node.acf.button}
              </Link>
            </Container>

            <style jsx>{`
              .mainSection {
                height: 100vh;
                display: flex;
                align-items: center;
              }
            `}</style>
          </div>
        )}
      />
    );
  }
}

export default IndexPage;
