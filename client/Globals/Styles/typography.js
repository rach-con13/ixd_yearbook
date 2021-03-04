import styled from 'styled-components';

export const Typography=styled.p`
    font-size:${props => props.size ? props.size : '16px'};
    color:${props => props.color ? props.color : 'inherit'};
    margin:${props => props.margin ? props.margin : '0px'};
    text-align:${props => props.align ? props.align : 'left'};
    font-weight:${props => props.weight ? props.weight : 'normal'};
    display:${props => props.inline ? 'inline' : 'block'};
`;

export const Title=styled(Typography).attrs({
    as:'h1'
})`
    font-weight:bold;
    font-size:${props => props.size ? props.size : '24px'};
`
export const Subtitle=styled(Typography)`
    font-size:${props => props.size ? props.size : '12px'};
`

export const Info=styled(Typography)`
font-size:${props => props.size ? props.size : '10px'};
`

export const Text=styled(Typography)`
`

export const Paragraph=styled(Typography)`
    line-height:1.5em;
`