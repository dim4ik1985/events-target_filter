import "./toolbar.css";

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const ToolbarElements = filters.map((filter, index) =>
    filter === selected ? (
      <button key={index} className={"toolbar-button active"} onClick={onSelectFilter}>
        {filter}
      </button>
    ) : (
      <button key={index} className={"toolbar-button"} onClick={onSelectFilter}>
        {filter}
      </button>
    )
  );
  return <div>{ToolbarElements}</div>;
};
