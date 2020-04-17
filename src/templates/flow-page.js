import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import { ArcherContainer, ArcherElement } from 'react-archer'

const FlowPage = ({ data }) => {
  const { markdownRemark: post } = data

  const rootStyle = { display: 'flex', justifyContent: 'center' };
  const rowStyle = { marginBottom: '100px', display: 'flex', justifyContent: 'space-around' }

  return (
    <Layout title={post.frontmatter.title}>
      <div className='hero is-medium is-accent'>
        <div className='hero-body has-align-bottom'>
          <div className='container content'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                  <h1 className='is-size-1 has-text-weight-semibold  is-align-bottom has-text-centered'>
                    {post.frontmatter.title}
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <section className='section no-pad-top'>
                <HTMLContent content={post.html} />
              </section>

    <section className='section'>
      <ArcherContainer strokeColor='#ff3388' >
 
        <div style={rowStyle}>

          <ArcherElement
            id="code1"
            relations={[{
              targetId: 'code2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom'
            }, {
              targetId: 'robo1',
              targetAnchor: 'top',
              sourceAnchor: 'bottom'
            }]}
          >
            <div className='box'>Coding 101</div>
          </ArcherElement>
 
          <ArcherElement
            id="mech1"
            relations={[{
              targetId: 'robo1',
              targetAnchor: 'top',
              sourceAnchor: 'bottom'
            }]}
          >
            <div className='box'>Mech 1</div>
          </ArcherElement>

        </div>

 
        <div style={rowStyle}>

          <ArcherElement
            id="code2"
            relations={[]}
          >
            <div className='box'>Project Code</div>
          </ArcherElement>

          <ArcherElement
            id="robo1"
            relations={[{
              targetId: 'robo2',
              targetAnchor: 'top',
              sourceAnchor: 'bottom'
            }]}
          >
            <div className='box'>Robotics Basics</div>
          </ArcherElement>

        </div>

        <div style={rowStyle}>

          <ArcherElement
            id="robo2"
            relations={[]}
          >
            <div className='box'>Robotics Advanced</div>
          </ArcherElement>

        </div>

      </ArcherContainer>
    </section>



              {/* {
                post.frontmatter.flow.map(row => {
                  return (
                    <div className='columns'>
                    {
                      row.node.map(node => {
                        return (
                          <div className='column'>
                            <div className='box'>
                              <h2 className='has-text-centered'>{node.title}</h2>
                              {node.text}
                            </div>
                          </div>
                        )
                      })
                    }
                    </div>
                  )
                })
              } */}

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

FlowPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FlowPage 

export const pageQuery = graphql`
  query FlowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        flow {
          node {
            title
            text
          }
        }
      }
    }
  }
`
