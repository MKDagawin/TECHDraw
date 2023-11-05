import { useState, useCallback } from "react";
import About from "../components/About";
import PortalPopup from "../components/PortalPopup";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import Footer from "../components/Footer";
import "./HomePage2.css";

const HomePage2 = () => {
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
    navigate("/home-page-3");
  }, [navigate]);

  return (
    <>
      <div className="home-page-2">
        <div className="header3" />
        <div className="heading3">
          <div className="frame-div">
            <div className="home3">HOME</div>
            <div className="about4" onClick={openAbout}>
              ABOUT
            </div>
            <div className="gallery3" onClick={onGALLERYTextClick}>
              GALLERY
            </div>
            <div className="creators3" onClick={openModal}>
              CREATORS
            </div>
          </div>
          <div className="techdraw4">{`TECHDraw `}</div>
        </div>
        <div className="image-container">
          <div className="image4" onClick={onImageContainerClick}>
            <img className="bg-icon5" alt="" src="/bg1@2x.png" />
            <div className="image-child1" />
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

export default HomePage2;
