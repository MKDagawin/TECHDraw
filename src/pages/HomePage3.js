import { useState, useCallback } from "react";
import About from "../components/About";
import PortalPopup from "../components/PortalPopup";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import Footer from "../components/Footer";
import "./HomePage3.css";

const HomePage3 = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
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

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const onImageContainerClick = useCallback(() => {
    navigate("/home-page-1");
  }, [navigate]);

  return (
    <>
      <div className="home-page-3">
        <div className="header2" />
        <div className="heading2">
          <div className="home-container">
            <div className="home2">HOME</div>
            <div className="about3" onClick={openAbout}>
              ABOUT
            </div>
            <div className="gallery2" onClick={onGALLERYTextClick}>
              GALLERY
            </div>
            <div className="creators2" onClick={openModal}>
              CREATORS
            </div>
          </div>
          <div className="techdraw3">{`TECHDraw `}</div>
        </div>
        <div className="image-group">
          <div className="image3" onClick={onImageContainerClick}>
            <img className="bg-icon4" alt="" src="/bg2@2x.png" />
            <div className="rectangle-div" />
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
      {isModalOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModal}
        >
          <Modal onClose={closeModal} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage3;
