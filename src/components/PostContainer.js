import { useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlineEllipsis,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineComment,
} from "react-icons/ai";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const Post = (props) => {
  const { getArticles } = props;

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <>
      {props.loading ? (
        <img
          src="images/spinner.svg"
          style={{ width: "100%", borderRadius: "25px", height: "40px" }}
          alt=""
        />
      ) : (
        <>
          {props.articles.length > 0 &&
            props.articles.map((article, key) => (
              <Container key={key}>
                <Head>
                  <img src={article.actor.image} alt="" />
                  <Detail>
                    <h1>{article.actor.title}</h1>
                    <p>{article.actor.email}</p>
                    <p>{article.actor.date.toDate().toLocaleDateString()}</p>
                  </Detail>
                  <AiOutlineEllipsis />
                </Head>
                <Message>
                  <p>{article.description} </p>
                </Message>
                <Photo>
                  {!article.sharedImg && article.video ? (
                    <ReactPlayer width={"100%"} url={article.video} />
                  ) : (
                    <img src={article.sharedImg} alt="" />
                  )}
                </Photo>
                <Divider />
                <Buttons>
                  <button>
                    <AiOutlineLike /> <h1>Like</h1>
                    <p>{article.likes}</p>
                  </button>
                  <button>
                    <AiOutlineComment /> <h1>Comment</h1>
                  </button>
                  <button>
                    <AiOutlineShareAlt /> <h1>Share</h1>
                  </button>
                </Buttons>
              </Container>
            ))}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);

const Container = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  width: auto;
  margin: 20px 10px 10px 10px;
  border-radius: 8px;
  background-color: #fff;
  padding: 14px;
`;

const Head = styled.div`
  display: flex;
  /* border: 1px dashed blue; */
  height: 60px;

  img {
    height: 50px;
    border-radius: 25px;
    margin: 6px;
  }

  svg {
    font-size: 24px;
  }
`;

const Detail = styled.div`
  width: 100%;
  font-size: 14px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--primary-font-clr);

  p {
    font-size: 12px;
    color: grey;
  }
`;

const Message = styled.div`
  color: var(--primary-font-clr);
  margin: 6px;

  p {
    font-size: 14px;
    margin: 14px 0;
    line-height: 1.6;
    color: #78909c;
  }
`;

const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 0;
    padding: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Divider = styled.div`
  margin: 10px;
  width: auto;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.08);
`;

const Buttons = styled.div`
  display: flex;

  button {
    color: var(--primary-font-clr);
    border: none;
    padding: 4px;
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    transition-duration: 167ms;

    svg {
      font-size: 18px;
    }

    h1 {
      margin: 0 3px;
    }

    p {
      font-size: 12px;
    }

    :hover {
      padding-top: 0px;
    }

    :active {
      padding-top: 4px;
      color: grey;
    }
  }
`;
