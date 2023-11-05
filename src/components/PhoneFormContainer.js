import { useCallback } from "react";
import "./PhoneFormContainer.css";

const PhoneFormContainer = () => {
  const onTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tabletContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="cp" data-scroll-to="cPContainer">
      <div className="shadow2" />
      <div className="div6" onClick={onTextClick}>{`<`}</div>
      <div className="phone">PHONE</div>
      <img className="cp-icon" alt="" src="/cp@2x.png" />
      <div className="cp-description1">
        A cellular telephone with an integrated computer and other features not
        originally associated with telephones, such as an operating system (OS),
        web browsing and the ability to run software applications.
      </div>
    </div>
  );
};

export default PhoneFormContainer;
