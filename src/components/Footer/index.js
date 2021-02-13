import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/DaciteRocks" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
   
        <Styled.Link href="https://www.linkedin.com/in/connor-wardell-4b8481183/" rel="noreferrer noopener" target="_blank">
          Linkedin
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
