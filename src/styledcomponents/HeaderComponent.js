import styled from "styled-components";

export const Container =styled.div`
display:flex;
flex-direction: column;
padding 10px`;

export const Header = styled.div`
color:white;
background:black;
font-weight:bold;
padding:20px;
display:flex;
align-items:center;
justify-content:space-between;
`;

export const HamImg=styled.img`
height:30px`;

export const AppNameComponent=styled.div`
display:flex;
align-items:center;
padding:10px`;

export const SearchComponent=styled.div`
display:flex;
flex-direction:row;
color:white;
padding:10px;
border-radius:10px;
width:50%;
background:black`;

export const SearchInput = styled.input`
border:none;
outline:none`;

export const SearchIcon=styled.img`
height:30px;
weight:30px`;
