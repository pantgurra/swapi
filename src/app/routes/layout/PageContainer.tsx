import styled from "styled-components";

const PageContainer = styled.main<{$isRoot?: boolean}>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme}) => theme.spacing(5)};
  padding-top: ${({ $isRoot }) => $isRoot ? 0 : '90px'}
`;
export default PageContainer;
