import styled from "styled-components";

export const ExecBox = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  border-color: ${({ borColor }) => (borColor ? borColor : "")};
  min-width: "394.95px";
  min-height: "257.4px";
  border: "3px solid";
  box-shadow: "-4px 4px 4px rgba(0, 0, 0, 0.25)";
`;

export const ExecTitle = styled.h2`
  color: ${({ textColor }) => (textColor ? textColor : "")};
`;

export const ExecSubTitle = styled.h3`
  color: ${({ textColor }) => (textColor ? textColor : "")};
`;

export const ExecHeadshot = styled.img`
  min-width: "211.55px";
  min-height: "246.98px";
  object-fit: cover;
`;

export const WordMark = styled.img``;

export const LogoMark = styled.img``;

export const Header = styled.h1``;

export const Paragraph = styled.p``;
