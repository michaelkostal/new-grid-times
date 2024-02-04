import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>        
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubLink href="/">Already a member?</SubLink>
        </SubscribeWrapper>
      </MainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media(${QUERIES.laptopAndUp}){
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media(${QUERIES.laptopAndUp}){
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media(${QUERIES.tabletAndUp}){
    margin-top: 48px;
    margin-bottom: 72px;
  }
  @media(${QUERIES.laptopAndUp}){
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: start;
    margin-top: 16px;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  @media(${QUERIES.laptopAndUp}){
    justify-self: end;
    align-self: center;
    display: block;
    position: relative;
  }
`

const SubLink = styled.a`
  position: absolute;
  margin-top:8px;
  display:block; 
  width: 100%;
  text-align: center;
  color: var(--color-gray-900);
  font-style:italic;
  text-decoration: underline;
  font-size:#{14/16}rem;
`;

export default Header;
