import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'components/Img';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const GalleryWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 -0.5rem;
`;

const GalleryItem = styled.div`
  margin: 0.5rem;
  flex: 1 1 300px;
  max-width: 600px;
  cursor: pointer;

  & .gatsby-image-outer-wrapper,
  & .gatsby-image-wrapper {
    height: 100%;
  }
`;

class Gallery extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  state = {
    currentIndex: 0,
    imgCount: this.props.data.length,
    isOpen: false
  };

  handleOpen = currentIndex => () =>
    this.setState({ isOpen: true, currentIndex });

  handleClose = () => this.setState({ isOpen: false });

  handleMovePrev = () =>
    this.setState(({ currentIndex, imgCount }) => ({
      currentIndex: (currentIndex + imgCount - 1) % imgCount
    }));

  handleMoveNext = () =>
    this.setState(({ currentIndex, imgCount }) => ({
      currentIndex: (currentIndex + 1) % imgCount
    }));

  render() {
    const { isOpen, currentIndex, imgCount } = this.state;
    const imgData = this.props.data;
    const imgSources = imgData.map(({ src }) => src);

    return (
      <GalleryWrapper>
        {imgData.map((img, index) => (
          <GalleryItem key={index} onClick={this.handleOpen(index)}>
            <Img fluid={img} alt="" />
          </GalleryItem>
        ))}
        {isOpen && (
          <Lightbox
            mainSrc={imgSources[currentIndex]}
            nextSrc={imgSources[(currentIndex + 1) % imgCount]}
            prevSrc={imgSources[(currentIndex + imgCount - 1) % imgCount]}
            onCloseRequest={this.handleClose}
            onMovePrevRequest={this.handleMovePrev}
            onMoveNextRequest={this.handleMoveNext}
          />
        )}
      </GalleryWrapper>
    );
  }
}

export default Gallery;
