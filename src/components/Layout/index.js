import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import NavBar from '../Nav/NavBar'
import Footer from '../Footer'
import SEO from '../SEO/SEO'
import config from '../../../config'
import '../../assets/sass/styles.sass'
import 'font-awesome/css/font-awesome.min.css'

class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    hideLogo: PropTypes.bool
  }

  static defaultProps = {
    hideLogo: false
  }
  
  constructor (props) {
    super(props)
    this.state = { isOverlayActive: false }
  }

  toggleOverlay = () => {
    this.setState({ isOverlayActive: !this.state.isOverlayActive })
  }

  render() {
    let title = this.props.title ? this.props.title+' | '+config.siteTitle : config.siteTitle
    let description = this.props.description ? this.props.description : config.siteDescription
    return (
      <div id='layout-wrapper'  className={`has-dark-overlay-toggle ${this.state.isOverlayActive ? 'is-overlay-active' : ''}`}>
        <Helmet>
          <title>{title}</title>
          <meta name='title' content={title} />
          <meta name='description' content={description} />
          <meta name='copyright' content={config.copyright} />
          <meta name='url' content={config.siteUrl} />
        </Helmet>
        <SEO title={title} meta_title={title} description={description} />
        <NavBar onToggleSidebar={this.toggleOverlay} hideLogo={this.props.hideLogo} />
        <div id='content-wrapper'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

}

export default Layout
