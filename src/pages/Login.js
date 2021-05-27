import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions/index";
import { Redirect } from "react-router";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}

      <Nav>
        <a href="/">
          <img src="/images/social-sim.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your SocialSim platform</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
      </Section>
      <Form>
        <Google onClick={() => props.signIn()}>
          Sign in with
          <img src="images/google.svg" alt="" />
        </Google>
      </Form>
    </Container>
  );
};

// export default Login;

const Container = styled.div`
  max-width: 1128px;
  margin: auto;
`;

const Nav = styled.div`
  margin: auto;
  padding: 6px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 180px;
  }

  img {
    width: 100%;
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 8px;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px var(--primary-clr);
  color: var(--primary-clr);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  /* line-height: 40px; */
  text-align: center;
  padding: 10px;

  :hover {
    background-color: rgba(66, 103, 178, 0.1);
    cursor: pointer;
  }
`;

const Section = styled.section`
  position: relative;
  padding-top: 40px;
  display: flex;
  align-content: start;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: auto;
  /* border: 1px dashed blue; */

  @media (max-width: 768px) {
    margin: auto;
  }

  img {
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      position: initial;
    }
  }
`;

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 50%;
    font-size: 42px;
    line-height: 60px;
    color: var(--accent-clr);
    font-weight: 100;
    opacity: 0.7;
    /* border: 1px dashed blue; */

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 50%;
    @media (max-width: 768px) {
      width: 80%;
      margin: auto;
    }
  }
`;

const Form = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding-left: none;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 400px;
  padding: 10px;
  font-size: 20px;
  border-radius: 30px;
  border: 1px solid grey;
  background-color: #fff;
  color: grey;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  img {
    padding-top: 4px;
    display: block;
    height: 24px;
    padding-left: 6px;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.01);
  }

  :active {
    background-color: #fff;
  }
`;

const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
