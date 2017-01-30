import React, { PropTypes } from 'react';
import Text from '../Text';
import Link from '../Link';


const linkDataToElement = (link, key) =>
  <Link href={link.url} key={key}>{link.displayString}</Link>;

const calulateLinkifiedText = (links, curString, calculatedElements = []) => {
  // nothing left to calculate, return all the caluculated pairs
  if (curString.length === 0) {
    calculatedElements.reverse();
    return calculatedElements;
  }
  // consume whats left of the string
  if (links.length === 0) {
    calculatedElements.push(curString);
    return calulateLinkifiedText(links, '', calculatedElements);
  }
  const lastLink = links[links.length - 1];
  // text at the end that's not a link
  if (curString.length !== lastLink.indices[1]) {
    calculatedElements.push(curString.substring(lastLink.indices[1]));
    return calulateLinkifiedText(
      links,
      curString.substring(0, lastLink.indices[1]),
      calculatedElements,
    );
  }
  // found a link!
  calculatedElements.push(linkDataToElement(lastLink, calculatedElements.length));
  return calulateLinkifiedText(
    links.slice(0, -1),
    curString.substring(0, lastLink.indices[0]),
    calculatedElements,
  );
};

const LinkifiedText = ({ children, links }) =>
  <Text>{calulateLinkifiedText(links, children)}</Text>;

LinkifiedText.propTypes = {
  children: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(React.PropTypes.number),
    }),
  ),
};

LinkifiedText.defaultProps = {
  links: [],
};

export default LinkifiedText;
