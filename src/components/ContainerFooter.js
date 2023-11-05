import "./ContainerFooter.css";

const ContainerFooter = ({ onButton1ContainerClick }) => {
  return (
    <div className="footer">
      <div className="button-1" onClick={onButton1ContainerClick}>
        <div className="button" />
        <div className="view-more">{`View More >>`}</div>
      </div>
      <div className="explore-techdraw-today">EXPLORE TECHDraw Today!</div>
    </div>
  );
};

export default ContainerFooter;
