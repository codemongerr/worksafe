import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledIcon } from "./Style";

library.add(fas, fab);

/**
 * Stateless function to create create font awesome icon component
 *
 * @param {object} props
 *
 * @see - https://github.com/FortAwesome/react-fontawesome
 *
 * @return Styled icon component with font awesome icon
 */
function Icon(props) {
  const { name } = props;
  return (
    name && (
      <StyledIcon>
        <FontAwesomeIcon icon={name} />
      </StyledIcon>
    )
  );
}

export default Icon;
