import "./style.css";

const Tab = ({ id, panel, selected, label, onClick }) => {
  return (
    <button
      className="tab-button"
      aria-label={label + "tab"}
      id={id}
      aria-controls={panel}
      aria-selected={selected}
      role="tab"
      tabIndex={selected ? "0" : "-1"}
      onClick={onClick}
    >
      <p>{label}</p>
      {selected && <div class="tab-line"></div>}
    </button>
  );
};

export default Tab;
