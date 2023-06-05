import styled from 'styled-components';

const cardWidth = 320;
const borderRadius = 10;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  /* z-index: 200; */
  /* width: 320px; */
  position: relative;
  display: flex;
    align-items: center;
    justify-content: center;

  margin: 0;
  padding: 0;
  height: 200px;
  background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  // responsive
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
  }
`;

const Content = styled.div`
  /* z-index: 200; */
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  color: #8d61ec;
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;

const Style = styled.button`
  position: relative;
  /* flex-shrink: 0; */
  width: ${cardWidth}px;
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  //border colour transparent to hide the border line
  /* border: 0.1px solid black; */
  border-color: transparent;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};

  // responsive
    @media (max-width: 768px) {
        width: 300px;
    }
    @media (max-width: 425px) {
        width: 280px;
    }


  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Card = ({ hexa, title, description, image }) => (
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <Style>
            <Screenshot image={image} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BottomBar background={hexa} />
            </Content>
        </Style>
    </a>
);

export default Card;

// import "./Card.scss"

// const Card = ({ hexa, title, description, image }) => (
//     <div className="style">
//         <div className="screenshot">
//             <img src={image} alt={title} />
//         </div>
//         <div className="card__content">
//             <h3 className="title">{title}</h3>
//             <p className="description">{description}</p>
//             <div className="bottom-bar" style={{ background: hexa }}></div>
//         </div>
//     </div>
// );

// export default Card;
