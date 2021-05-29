import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import {
  AiFillMessage,
  AiFillCode,
  AiFillHome,
  AiFillCaretDown,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/social-sim.svg" alt="logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
            <ImSearch />
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a className="active" href="/#">
                <AiFillHome />
                <span>Home</span>
              </a>
              <a href="/#">
                <AiFillMessage />
                <span>Chatbox</span>
              </a>
              <a href="/#">
                <FaUserFriends />
                <span>Group</span>
              </a>
              <a href="/#">
                <AiFillCode />
                <span>Extras</span>
              </a>
              <a href="/#">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt=""/>
                ) : (
                  <img src="/images/avatar.svg" alt=""/>
                )}
                <div class="user">
                  <span>Me</span>
                  <AiFillCaretDown />
                </div>
                <SignOut onClick={() => props.signOut()}>SignOut</SignOut>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Container = styled.div`
  background-color: white;
  box-shadow: 0px 3px 4px #eee;
  position: fixed;
  top: 0;
  z-index: 9;
  padding: 10px;
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  width: 160px;
  img {
    width: 100%;
  }
`;

const Search = styled.div`
  position: relative;
  margin: auto;

  input {
    border: none;
    border-radius: 4px;
    /* font-size: 16px; */
    width: 270px;
    background-color: #eef3f8;
    line-height: 38px;
    padding: 0px 10px;
    color: grey;
    :focus {
      outline: none;
    }

    @media (max-width: 868px) {
      width: 180px;
    }

    @media (max-width: 500px) {
      width: 130px;
    }
  }

  svg {
    position: absolute;
    right: 0;
    color: blue;
    margin: 10px 10px 10px 0;
    pointer-events: none;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  left: 0;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  list-style-type: none;
`;

const SignOut = styled.div`
  position: absolute;
  background-color: white;
  width: 80px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px #ccc;
  text-align: center;
  font-weight: 600;
  padding: 10px;
  color: var(--secondary-clr);
  transition-duration: 0.4s;
  visibility: hidden;
  :hover {
    color: var(--accent-clr);
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 54px;
  margin-right: 30px;
  .active {
    color: var(--accent-clr);
  }

  @media (max-width: 768px) {
    margin-right: auto;
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    color: var(--primary-font-clr);
    line-height: 1.6;
    min-width: 70px;
    cursor: pointer;

    :hover,
    :active {
      span {
        opacity: 0.5;
      }
    }

    svg {
      font-size: 24px;
    }

    img {
      height: 24px;
    }

    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 18px;
      }
    }

    :last-child {
      &:hover {
        ${SignOut} {
          visibility: visible;
          transform: translateY(48px);
          @media (max-width: 768px) {
            transform: translateY(-48px);
          }
        }
      }
    }
  }
`;
