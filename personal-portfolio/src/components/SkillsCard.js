import { Col } from "react-bootstrap";

export const SkillsCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx-skills">
        <img src={imgUrl} />
        <div className="proj-txtx-skills">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
