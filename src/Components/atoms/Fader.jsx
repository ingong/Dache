import React from 'react';
import styled from 'styled-components';
import mainFirst from 'assets/img/main_picture_first.png';

const Wrapper = styled.div``;

const Fader = ({ value, image }) => {
  return (
    <Wrapper>
      <section>
        <div className="container" value={value} src={image} alt="firstImage">
          <div className="container__contents">
            <div className="container__contents-p">
              <p>추가 비용 없이 </p>
              <p>쉽고 간편하게</p>
              <p>우리집에 딱 맞는</p>
              <p>추천을 무제한으로</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Fader;
