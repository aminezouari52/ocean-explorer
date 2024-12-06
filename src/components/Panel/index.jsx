const Panel = ({ id, labeledBy, hidden, children }) => {
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={labeledBy}
      tabIndex="-1"
      hidden={hidden}
    >
      {children}
    </div>
  );
};

export default Panel;
