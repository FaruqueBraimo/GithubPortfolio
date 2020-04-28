import React from "react";
import styled from "styled-components";


const ListWrapper = styled.ul`
list-style : none;
text-align : left
padding: 0;
`;

const ItemWrapper = styled.li`
display : flex
justify-content: space-between;
`;
const Label = styled.span`
font-weight: 600;
float : left
`;
const value = styled.span`
  float : right
`;
const Title = styled.h2`
 padding: 10px 0;
 border-bottom: 1px solid lightGrey;`

const List = (props) => (
  <div>
      
<Title>{props.title}</Title>
  <ListWrapper>
    {props.items.map((item) => (
      <ItemWrapper key={item.label}>
        <Label>{item.label}</Label>  <value>{item.value}  </value>
      </ItemWrapper>
    ))}
  </ListWrapper>

  </div>

  
);

export default List;
