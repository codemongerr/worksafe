import { 
  StyledSectionList,
  StyledSectionListItem,
  StyledSectionListItemTitle,
  StyledSectionListItemDetail
} from "./Style";
import { handleWrapping } from "../Helper";

export const SectionList = (props) =>
  handleWrapping(StyledSectionList, props);

export const SectionListItem = (props) =>
  handleWrapping(StyledSectionListItem, props);

export const SectionListItemTitle = (props) =>
  handleWrapping(StyledSectionListItemTitle, props);

export const SectionListItemDetail = (props) =>
  handleWrapping(StyledSectionListItemDetail, props);