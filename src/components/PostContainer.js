import styled from "styled-components";
import {
  AiOutlineEllipsis,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineComment,
} from "react-icons/ai";

const Post = (props) => {
  return (
    <Container>
      <Head>
        <img src="/images/avatar.svg" />
        <Detail>
          <h1>Name</h1>
          <p>email@gmail.com</p>
          <p>5d ago</p>
        </Detail>
        <AiOutlineEllipsis />
      </Head>
      <Message>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor turpis a libero faucibus viverra. Integer lacinia efficitur
          enim a viverra. Duis a lorem ultricies, finibus purus sed, hendrerit
          arcu. Suspendisse imperdiet semper elit, sit amet volutpat libero
          venenatis eget. Aliquam auctor turpis id neque placerat auctor. Sed at
          pharetra tortor. Aliquam vel suscipit nibh, vel tempus arcu. Cras
          suscipit, sem ut venenatis faucibus, tortor erat semper erat, sed
          efficitur sapien lectus ut nisl. Maecenas ac nulla sem. Maecenas vitae
          venenatis quam, aliquam mattis nisl. Etiam sollicitudin euismod mi, ac
          rhoncus metus tristique ut. Fusce vitae enim ac velit sollicitudin
          imperdiet. Integer libero tortor, ultricies et pretium at, imperdiet
          quis mi.
        </p>
      </Message>
      <Photo>
        <img src="https://miro.medium.com/max/1096/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg" />
      </Photo>
      <Divider />
      <Buttons>
        <button>
          <AiOutlineLike /> <h1>Like</h1>
          <p>12</p>
        </button>
        <button>
          <AiOutlineComment /> <h1>Comment</h1>
        </button>
        <button>
          <AiOutlineShareAlt /> <h1>Share</h1>
        </button>
      </Buttons>
    </Container>
  );
};

export default Post;

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
