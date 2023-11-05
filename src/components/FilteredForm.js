import { useCallback } from "react";
import "./FilteredForm.css";

const FilteredForm = () => {
  const onContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='laptopContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cPContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="tablet" data-scroll-to="tabletContainer">
      <div className="shadow1" />
      <div className="div2" onClick={onContainerClick}>
        <div className="div3">{`<`}</div>
      </div>
      <div className="div4" onClick={onContainer1Click}>
        <div className="div3">{`>`}</div>
      </div>
      <div className="tablet1">TABLET</div>
      <img className="tablet-icon" alt="" src="/tablet@2x.png" />
      <div className="cp-description">
        A computer that is intermediate in size between a laptop computer and a
        smartphone. Early tablet computers used either a keyboard or a stylus to
        input information, but these methods were subsequently displaced by
        touch screens.
      </div>
    </div>
  );
};

export default FilteredForm;
