import styled from 'styled-components';

export const ForkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;

  li {
    margin-right: 10px;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 5px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-family: arial;
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid #ecf0f4;
  transition: all 100ms ease-in;

  &:hover {
    background-color: #fbfbfc;
  }

  &:focus {
    outline: 0;
    border: 1px solid #bcd8e0;
    background-color: #ffffff;
  }
`;

export const GistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const EmptyMessage = styled.h2`
  font-weight: 500;
`;

export const Table = styled.table`
  border-collapse: separate;
  border-radius: 10px;
  border-spacing: 0;
  margin: 4rem 0;
  width: 100%;

  th {
    background-color: #ffffff;
    font-weight: normal;
    font-size: 16px;
    border-bottom: 2px solid #dde8f1;
    width: 30%;

    &:first-of-type {
      width: 40%;
    }
  }

  th,
  td {
    padding: 15px;
    text-align: left;
  }

  td {
    background-color: #ffffff;

    &.empty {
      text-align: center;
      height: 100px;
      color: #aaaaaa;
    }
  }

  tr {
    &:nth-child(odd) td:not(.empty) {
      background-color: #eef3f8;
    }
  }
`;

export const Tag = styled.span`
  background: #d1e4f1;
  border-radius: 3px 0 0 3px;
  color: #86a4b9;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin-right: 15px;
  margin-bottom: 5px;

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
