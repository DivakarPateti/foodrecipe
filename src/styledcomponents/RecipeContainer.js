import styled from "styled-components";


export const RecipeListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap:20px;
justify-content:space-evenly`;

export const RecipeContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:300px;
box-shadow:0 3px 10px 0 #aaa;
`;


export const RecipeImg=styled.img`
height:200px;`;

export const RecipeName =styled.div`
font-weight:bold;
font-size:18px;
margin:10px 0;`;

export const RecipeIngredients=styled.div`
font-weight:bold;
font-size:18px;
margin:10px 0;
border:solid 1px green;
cursor:pointer;
text-align:center;
color:green;
`;

export const MoreRecipe=styled.div`
font-weight:bold;
font-size:18px;
margin:10px 0;
border:solid 1px red;
cursor:pointer;
text-align:center;
color:red;`;
export const PlaceHolder=styled.img`


opacity:50%;`;
