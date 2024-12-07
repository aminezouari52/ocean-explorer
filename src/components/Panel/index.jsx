const Panel = ({ id, labeledBy, hidden, children }) => {
  return (
    <li role="presentation">
      <div
        id={id}
        role="tabpanel"
        aria-labelledby={labeledBy}
        tabIndex="-1"
        hidden={hidden}
      >
        {children}
      </div>
    </li>
  );
};

export default Panel;
