import "./style.css";

const Tab = ({ id, panel, selected, label, onClick }) => {
  return (
    <button
      className="tab-button"
      id={id}
      aria-controls={panel}
      aria-selected={selected}
      role="tab"
      tabIndex={selected ? "0" : "-1"}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
