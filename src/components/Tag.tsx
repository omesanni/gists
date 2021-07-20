import React from 'react';
import styled from 'styled-components';

export const StyledTag = styled.span`
  background: #d1e4f1;
  border-radius: 3px 0 0 3px;
  color: #86a4b9;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  white-space: nowrap;

  &::before {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    right: -10px;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #d1e4f1;
    border-top: 13px solid transparent;
  }
`;

const Tag = ({ children }: { children: React.ReactNode }) => <StyledTag>{children}</StyledTag>;

export default Tag;
