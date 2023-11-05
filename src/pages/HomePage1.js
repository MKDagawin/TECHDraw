import { useState, useCallback } from "react";
import About from "../components/About";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import Footer from "../components/Footer";
import "./HomePage1.css";

const HomePage1 = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();

  const onButton1ContainerClick = useCallback(() => {
    navigate("/gallery-view-more");
  }, [navigate]);

  const openAbout = useCallback(() => {
    setAboutOpen(true);
  }, []);

  const closeAbout = useCallback(() => {
    setAboutOpen(false);
  }, []);

  const onGALLERYTextClick = useCallback(() => {
    navigate("/gallery-view-more");
  }, [navigate]);

  const onCREATORSTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="home-page-1">
        <div className="header1" />
        <div className="heading1">
          <div className="home-group">
            <div className="home1">HOME</div>
            <div className="about2" onClick={openAbout}>
              ABOUT
            </div>
            <div className="gallery1" onClick={onGALLERYTextClick}>
              GALLERY
            </div>
            <div className="creators1" onClick={onCREATORSTextClick}>
              CREATORS
            </div>
          </div>
          <div className="techdraw2">{`TECHDraw `}</div>
        </div>
        <div className="image-parent">
          <div className="image2">
            <img className="bg-icon3" alt="" src="/bg@2x.png" />
            <div className="image-inner" />
          </div>
          <ContainerFooter onButton1ContainerClick={onButton1ContainerClick} />
        </div>
        <Footer />
      </div>
      {isAboutOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAbout}
        >
          <About onClose={closeAbout} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage1;
