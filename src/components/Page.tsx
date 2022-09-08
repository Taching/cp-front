import styled from 'styled-components';
import GlobalStyle from './globalstyles';
import PropTypes from 'prop-types';
import Header from './Header';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <h1>Component Page</h1>

      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
Page.PropTypes = {
  children: PropTypes.any,
};
