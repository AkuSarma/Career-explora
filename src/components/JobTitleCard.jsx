import { Link } from "react-router-dom";

const JobTitleCard = ({ role, key }) => {
  const learMoreHerf = `jobdetails/${role}`;
  return (
    <div className="JobTitleCard" key={key}>
      <h3>{role}</h3>
      <p>
        Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Sequi voluptatum placeat dignissimos! Officiis delectus nemo culpa!
        Provident officiis iusto nesciunt ea libero ipsum, laboriosam non
        adipisci laborum perferendis doloremque molestias.
      </p>
        <Link to={learMoreHerf}><button>Learn more....</button></Link>
    </div>
  );
};

export default JobTitleCard;
