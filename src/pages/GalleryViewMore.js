import { useState, useCallback } from "react";
import About from "../components/About";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import LaptopContainer from "../components/LaptopContainer";
import FilteredForm from "../components/FilteredForm";
import PhoneFormContainer from "../components/PhoneFormContainer";
import "./GalleryViewMore.css";

const GalleryViewMore = () => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();

  const onGalleryViewMoreClick = useCallback(() => {
    navigate("/home-page-1");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/home-page-1");
  }, [navigate]);

  const openAbout = useCallback(() => {
    setAboutOpen(true);
  }, []);

  const closeAbout = useCallback(() => {
    setAboutOpen(false);
  }, []);

  const onCREATORSTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="gallery-view-more" onClick={onGalleryViewMoreClick}>
        <div className="gallery-view-more-child" />
        <FormContainer />
        <div className="laptops-smart-container">
          <p className="laptops">Laptops | Smart Phones | Tablets</p>
          <p className="laptops">
            Powerbanks | Smart Watches | Headphones | Stylus Pens | Fast
            Chargers
          </p>
          <p className="laptops">Bluetooth Speakers | Gaming Consoles</p>
          <p className="laptops">Keyboards | Mouse | Printers</p>
        </div>
        <div className="discover-cutting-edge-tech">{`Discover cutting-edge tech and find the perfect gadgets to fit your lifestyle. From smartphones to printers, we've got the innovation the youth seeks. `}</div>
        <div className="header" />
        <div className="heading">
          <div className="home-parent">
            <div className="home" onClick={onHOMETextClick}>
              HOME
            </div>
            <div className="about1" onClick={openAbout}>
              ABOUT
            </div>
            <div className="gallery">GALLERY</div>
            <div className="creators" onClick={onCREATORSTextClick}>
              CREATORS
            </div>
          </div>
          <div className="techdraw1">{`TECHdraw `}</div>
        </div>
        <div className="carousel">
          <LaptopContainer />
          <FilteredForm />
          <PhoneFormContainer />
        </div>
        <div className="image">
          <img className="bg-icon" alt="" src="/bg3@2x.png" />
          <div className="image-child" />
        </div>
        <div className="image1">
          <img className="bg-icon1" alt="" src="/bg4@2x.png" />
          <div className="image-item" />
        </div>
        <img className="bg-icon2" alt="" src="/bg5@2x.png" />
        <div className="products">PRODUCTS</div>
        <div className="exploring-techdraw">Exploring TECHDraw</div>
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

export default GalleryViewMore;
