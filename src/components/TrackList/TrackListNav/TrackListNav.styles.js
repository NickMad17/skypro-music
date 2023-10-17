import styled from "styled-components";

export const FilterBtn = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px 9px 20px;

    &:hover {
      cursor: pointer;
      border-color: #d9b6ff;
      color: #d9b6ff;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  `;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterBtnActive = styled(FilterBtn)`
    color: #ad61ff;
    border-color: #ad61ff;
    cursor: pointer;
  
    &:hover{
      color: #ad61ff;
      border-color: #ad61ff;
    }
  `;

export const CenterblockFilter = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 30px;
`