import { connect } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import Header from "../components/Header";
import Post from "../components/PostContainer";
import ShareBox from "../components/ShareBox";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Header />
      <Content>
        <SideDiv />
        <CenterDiv>
          <ShareBox />
          <Post />
        </CenterDiv>
        <SideDiv />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({ user: state.userState.user });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

const Content = styled.section`
  align-items: center;
  max-width: 1128px;
  margin: auto;
  justify-content: center;
  display: flex;
  margin: 90px auto;
`;

const SideDiv = styled.div`
  width: 20%;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CenterDiv = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
