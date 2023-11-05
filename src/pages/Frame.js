import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onCloseIconClick = useCallback(() => {
    navigate("/gallery-view-more");
  }, [navigate]);

  return (
    <div className="frame-parent">
      <div className="about-wrapper">
        <div className="about">
          <div className="bound" />
          <img
            className="close-icon"
            alt=""
            src="/close.svg"
            onClick={onCloseIconClick}
          />
          <div className="techdraw">TECHDraw</div>
          <div className="content">
            <p className="a-mock-online">
              A mock online website for shopping phones, laptop and gadget
              gadgets. [UI only]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
