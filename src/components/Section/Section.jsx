import { StyledSection, StyledSectionHeading } from "./Style";
import { handleWrapping } from "../Helper";

export const Section = (props) => handleWrapping(StyledSection, props);

export const SectionHeading = (props) =>
  handleWrapping(StyledSectionHeading, props);
