import "./projectList.css";

export const ProjectList = ({ projects }) => {
  const ProjectElements = projects.map((item, index) => (
    <li key={index} className={"project-item"}>
      <img src={item.img} alt={item.category} />
    </li>
  ));

  return <ul className={"project-list"}>{ProjectElements}</ul>;
};
