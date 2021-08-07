import React, { useEffect, useState } from 'react';
import { getDefault, getRecommended } from 'lib/api/sample';
import { Footer } from 'Components';
import styled from 'styled-components';
import { Picture } from 'Components';
import Masonry from 'react-masonry-css';
const Wrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 18rem;

  article {
    width: 30rem;
    position: relative;
    background-color: #fcb8df;
    /* height: 100%; */
  }

  section {
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0;
    left: 0;
    text-decoration: none;
    position: absolute;
    display: flex;
    flex-direction: column;

    .title {
      padding-top: 2rem;
      padding-left: 1rem;
      font-size: 2rem;
    }
    .author {
      padding-top: 2rem;
      padding-left: 1rem;
      font-size: 1.5rem;
    }

    .icon__first {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1rem 0 2rem 2rem;
      font-size: 2rem;
      color: white;
    }

    .icon__second {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 1rem 2rem 2.3rem 0;
      font-size: 1.5rem;
      color: white;
    }

    i {
      color: white;
    }
  }

  img {
    width: 100%;
    transition: all 0.3s linear;
  }
`;

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 2,
  500: 1,
};

const RecommendPage = () => {
  const [pictures, setPicture] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getDefault();
      data && setPicture(data['recommend_images'].slice(0, 10));
      console.log(pictures);
    })();
  }, []);

  const handleEnter = e => {
    e.currentTarget.firstChild.style.opacity = 0;
    e.currentTarget.firstChild.style.transform = 'scale(1)';
    e.currentTarget.childNodes[1].style.opacity = 1;
  };

  const handleOut = e => {
    e.currentTarget.firstChild.style.opacity = 1;
    e.currentTarget.firstChild.style.transform = 'scale(1.05)';
    e.currentTarget.childNodes[1].style.opacity = 0;
  };

  const handleClick = (e, url) => {
    var win = window.open(url, '_blank');
    win();
  };
  return (
    <>
      <Wrapper>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {pictures &&
            pictures.map(item => (
              <article
                onMouseEnter={e => handleEnter(e)}
                onMouseOut={e => handleOut(e)}
                onClick={e => handleClick(e, item.purchase_url)}
              >
                <img key={item.title} src={item.img_path} alt="image" />
                <section>
                  <div className="title">{item.title}</div>
                  <div className="author">{item.author}</div>
                  <div className="icon__first">
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="icon__second">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </section>
              </article>
            ))}
        </Masonry>

        <Footer />
      </Wrapper>
    </>
  );
};

export default RecommendPage;
