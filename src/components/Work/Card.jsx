import "./Card.scss";
const Card = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle "></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="img-container">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      </div>
      {/* <div className="p-info"> */}
        {/* <div className="p-title">Project 1</div>
        <div className="p-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          necessitatibus quasi, quos, voluptate voluptatem fugiat, quod
          </div>
          </div> */}
    </div>
  );
};

export default Card;