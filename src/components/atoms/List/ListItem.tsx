import styled from "styled-components";

const ListItem = styled.li<{$disableMargin?: boolean}>`
  list-style-type: none;
  margin: ${({ theme }) => theme.spacing(2)} ${({ $disableMargin, theme }) => ($disableMargin ? 0 : theme.spacing(2))};
  text-transform: none;
`;

export default ListItem;