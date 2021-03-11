import styled from 'styled-components';



export const Base = styled.div`
    background-color:${({fill}) => fill ? fill : 'none'};
    box-shadow:${({shadow}) => shadow ? shadow : 'none'};
    padding:${({padding}) => padding ? padding : '0'};
    border-radius:${({radius}) => radius ? radius : '0px'};
    color:${({color}) => color ? color : 'inherit'};
    border:${({border}) => border ? border : 'none'};
`;

export const Container = styled(Base)`
    width:${({ size,fullWidth}) => 
    size=='sm' && '40%' ||
    size=='md' && '60%' ||
    size=='lg' && '80%' ||
    fullWidth && '100%' ||
    size};
    height:${({height}) => height ? height : 'initial'};
    margin:0 auto;
    text-align:left;
    margin-top:${({top}) => top};  
`;
// wrapper for items
export const Box = styled(Base)`

`

export const Modal = styled(Container)`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`
export const Grid = styled(Base)`
    display:grid;
    grid-template-columns:${props => props.cols ? props.cols : 'initial'};
    grid-template-rows:${props => props.rows ? props.rows : 'initial'};
    grid-gap:${props => props.gap ? props.gap : '0'};
    width:100%;
`
export const Flex = styled(Base)`
    display:flex;
    align-items:${props => props.align ? props.align : 'initial'};
    justify-content:${props => props.justify ? props.justify : 'initial'};
`