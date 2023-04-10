import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Link from '../Link';
import colors from '../style/color';

const linkDataToElement = (options, link, key) => (
  <Link
    href={link.url}
    key={key}
    unstyled={options.unstyled}
    newTab={options.newTab}
    className={link.className}
  >
    {link.displayString}
  </Link>
);

const calulateLinkifiedText = (options, links, curString, calculatedElements = []) => {
  // nothing left to calculate, return all the caluculated pairs
  if ((curString && curString.length === 0) || !curString) {
    calculatedElements.reverse();
    return calculatedElements;
  }
  // consume whats left of the string
  if ((links && links.length === 0) || !links) {
    calculatedElements.push(curString);
    return calulateLinkifiedText(options, links, '', calculatedElements);
  }
  const lastLink = links[links.length - 1];
  // link is outside of bounds
  if (curString.length <= lastLink.indices[0]) {
    return calulateLinkifiedText(
      options,
      links.slice(0, -1),
      curString,
      calculatedElements,
    );
  }
  // text at the end that's not a link
  if (curString.length !== lastLink.indices[1]) {
    calculatedElements.push(curString.substring(lastLink.indices[1]));
    return calulateLinkifiedText(
      options,
      links,
      curString.substring(0, lastLink.indices[1]),
      calculatedElements,
    );
  }
  // found a link!
  calculatedElements.push(linkDataToElement(options, lastLink, calculatedElements.length));
  return calulateLinkifiedText(
    options,
    links.slice(0, -1),
    curString.substring(0, lastLink.indices[0]),
    calculatedElements,
  );
};

const LinkifiedText = ({
  children,
  color,
  links,
  newTab,
  size,
  unstyled,
  whitespace,
}) => {
  const options = { unstyled, newTab };
  return (
    <Text
      whitespace={whitespace}
      size={size}
      color={color}
    >
      {calulateLinkifiedText(options, links, children)}
    </Text>
  );
};

LinkifiedText.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      rawString: PropTypes.string,
      displayString: PropTypes.string,
      expandedUrl: PropTypes.string,
      indices: PropTypes.arrayOf(PropTypes.number),
    }),
  ),
  newTab: PropTypes.bool,
  size: PropTypes.string,
  unstyled: PropTypes.bool,
  whitespace: PropTypes.string,
};

LinkifiedText.defaultProps = {
  links: [],
};

export default LinkifiedText;
