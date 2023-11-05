import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onCloseIconClick = useCallback(() => {
    navigate("/gallery-view-more");
  }, [navigate]);

  return (
    <div className="about5">
      <div className="bound1" />
      <img
        className="close-icon1"
        alt=""
        src="/close.svg"
        onClick={onCloseIconClick}
      />
      <div className="techdraw5">TECHDraw</div>
      <div className="content1">
        <p className="a-mock-online1">
          A mock online website for shopping phones, laptop and gadget gadgets.
          [UI only]
        </p>
      </div>
    </div>
  );
};

export default About;
