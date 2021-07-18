import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
  z-index: 10;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid transparent;
  border-top: 4px solid #0073a9;
  border-left: 4px solid #0073a9;
  animation: 1s spin linear infinite;

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

export default Loader;
