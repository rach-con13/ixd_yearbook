import styled from 'styled-components';
import { Base } from './main';




export const Button = styled(Base).attrs({
    as: "button"
  })`
   border-style:${({variant,border}) => 
  variant === 'outlined' ? border : 'none'};
   background:${({variant,fill}) => 
    variant === 'fill' ? fill : 'none'
   }
   
`;

export const Input = styled(Base).attrs({
    as:'input'
})`
    border-style:none;
    outline:none;
    width:${props => props.width ? props.width : '100%'};
    &:not(:first-child):{
        margin-top:16px;
    }
`