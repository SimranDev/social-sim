import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModal from "./PostModal";

const ShareBox = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    setShowModal(!showModal);
  };

  return (
    <Container>
      <InputContainer>
        {props.user && props.user.photoURL ? (
          <img src={props.user.photoURL} />
        ) : (
          <img src="/images/avatar.svg" />
        )}
        <button onClick={handleClick} disabled={props.loading ? true : false}>
          Write a post
        </button>
      </InputContainer>
      <Options>
        <Option>
          <img src="/images/photo.svg" />
          <h3>Photo</h3>
        </Option>
        <Option>
          <img src="/images/video.svg" />
          <h3>Video</h3>
        </Option>
        <Option>
          <img src="/images/link.svg" />
          <h3>Link</h3>
        </Option>
      </Options>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShareBox);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  width: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* padding-top: 6px; */
  /* border: 1px dashed green; */

  img {
    width: 46px;
    margin: 5px;
    border-radius: 25px;
  }

  button {
    width: 100%;
    margin: 5px;
    border-style: none;
    border: 1.8px solid #eee;
    box-shadow: none;
    background: transparent;
    height: 46px;
    border-radius: 23px;
    padding-left: 20px;
    color: var(--primary-font-clr);
    cursor: pointer;
    font-size: 17px;

    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  /* border: 1px dashed purple; */
`;

const Option = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-grow: 1;
  color: var(--primary-font-clr);
  cursor: pointer;

  :hover {
    color: grey;
  }

  img {
    height: 30px;
    margin-right: 8px;
  }
`;
