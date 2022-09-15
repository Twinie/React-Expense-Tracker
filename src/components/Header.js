import Button from "./Button";

const Header = ({ onShow, isAddButton }) => {
  return (
    <div className="header">
      <h2>EXPENSE TRACKER</h2>
      <Button
        onShow={onShow}
        isAddButton={isAddButton}
        color={isAddButton ? "green" : "red"}
      />
    </div>
  );
};

export default Header;
