import "./arrowdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ArrowDown = () => {
  const pageId = [
    {
      page: "#portfolio",
    },
    {
      page: "#resume",
    },
    {
        page: "#skills",
    },
    {
        page: "#contact",
    },
  ];

  return (
    <>
        {pageId.map((p) => (
            <a href={p.page} className="arrowLink">
            <FontAwesomeIcon className="arrowIcon" icon={faChevronDown} />
          </a>
        ))}
      
    </>
  );
};

export default ArrowDown;
