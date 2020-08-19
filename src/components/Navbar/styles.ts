import styled from 'styled-components';

export const Content = styled.header`
  width: 100vw;
  max-width: 1000px;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-around;
  align-content: center; 
`;

export const Navigation = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 2px solid #2a2a2a;
  border-radius: 0;

  a {
    font-variant: small-caps;
    letter-spacing: 0.02em;
    font-size: 2.4rem;
    height: 100%;
  }

  @media(max-width: 414px){
    a {
      font-size: 2rem;
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
`;
