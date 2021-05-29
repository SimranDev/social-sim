import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";

const PostModal = (props) => {
  const [textareaText, setTextareaText] = useState("");
  const [shareImg, setShareImg] = useState("");
  const [shareVid, setShareVid] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const reset = (e) => {
    setTextareaText("");
    setShareVid("");
    setAssetArea("");
    props.handleClick(e);
  };

  const handleShareImg = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImg(image);
  };

  const switchAssetArea = (area) => {
    setShareImg("");
    setShareVid("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    console.log(shareImg);
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImg,
      video: shareVid,
      user: props.user,
      description: textareaText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  return (
    <>
      {props.showModal && (
        <Container>
          <Content>
            <Head>
              <p>Create a post</p>
              <IoMdClose onClick={(e) => reset(e)} />
            </Head>
            <Divider></Divider>
            <Body>
              <BodyHead>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/avatar.svg" alt="" />
                )}
                <h1>{props.user.displayName}</h1>
              </BodyHead>
              <textarea
                placeholder="Say Something..."
                autoFocus
                rows="6"
                value={textareaText}
                onChange={(e) => setTextareaText(e.target.value)}
              />
              {assetArea === "image" ? (
                <UploadImg>
                  <input
                    type="file"
                    accept="image/gif, image/jpeg, image/jpg, image/png"
                    name="image"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleShareImg}
                  />
                  <p>
                    <label htmlFor="file">Upload an image</label>
                  </p>
                  {shareImg && (
                    <img src={URL.createObjectURL(shareImg)} alt="" />
                  )}
                </UploadImg>
              ) : assetArea === "video" ? (
                <>
                  <input
                    type="text"
                    placeholder="Paste a video link"
                    value={shareVid}
                    style={{
                      width: "-webkit-fill-available",
                      height: "30px",
                    }}
                    onChange={(e) => setShareVid(e.target.value)}
                  />
                  {shareVid && <ReactPlayer width={"100%"} url={shareVid} />}
                </>
              ) : (
                false
              )}
            </Body>
            <Footer>
              <div>
                <img
                  src="images/photo.svg"
                  onClick={() => switchAssetArea("image")}
                  alt=""
                />
                <img
                  src="images/video.svg"
                  onClick={() => switchAssetArea("video")}
                  alt=""
                />
                <img src="images/link.svg" alt="" />
              </div>
              <PostBtn
                disabled={textareaText === "" ? true : false}
                onClick={(e) => postArticle(e)}
              >
                Post
              </PostBtn>
            </Footer>
          </Content>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.userState.user });
const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: fadeIn 0.4s;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  width: 500px;
  height: 400px;
  padding: 16px 16px 0 16px;
  color: var(--primary-font-clr);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
  margin-top: 80px;
`;

const Head = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 28px;
    padding: 4px;
    border-radius: 14px;
    cursor: pointer;

    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Divider = styled.div`
  display: flex;
  margin-top: 10px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Body = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 320px;

  textarea {
    margin: 12px 0;
    width: 100%;
    border: none;
    font-size: 15px;
    resize: none;
    :focus {
      outline: none;
    }
  }
`;

const BodyHead = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 40px;
    border-radius: 20px;
  }
  h1 {
    margin-left: 10px;
  }
`;
const Footer = styled.div`
  // border: 1px dashed green;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30px;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const PostBtn = styled.button`
  width: 76px;
  border: none;
  height: 36px;
  font-weight: 600;
  color: white;
  background-color: var(--primary-clr);
  border-radius: 40px;
  cursor: pointer;

  :active {
    background-color: grey;
  }

  :disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;

const UploadImg = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
