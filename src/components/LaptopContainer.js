import { useCallback } from "react";
import "./LaptopContainer.css";

const LaptopContainer = () => {
  const onContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tabletContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="laptop" data-scroll-to="laptopContainer">
      <div className="shadow" />
      <div className="div" onClick={onContainerClick}>
        <div className="div1">{`>`}</div>
      </div>
      <img className="laptop-icon" alt="" src="/laptop@2x.png" />
      <div className="laptop1">LAPTOP</div>
      <div className="laptop-description">{`Also called notebook or personal computer, portable personal computer that features a screen, touch pad, and alphanumeric keyboard. Laptops usually have a clam shell design,in which the screen is located on the interior of the upper lid and the keyboard is located on the interior of the lower lid. `}</div>
    </div>
  );
};

export default LaptopContainer;
