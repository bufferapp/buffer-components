// These utils are stub data for InputAutocomplete's story :)
// Taken from the examples in react-autocomplete https://github.com/reactjs/react-autocomplete/tree/master/examples

/**
 * An example of how to implement a relevancy-based sorting method. States are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
export function sortItems(a, b, value) {
  const aLower = a.label.toLowerCase();
  const bLower = b.label.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
}

export function getTimezones() {
  return [
    { label: 'Benxi - China', timezone: 'Asia/Shanghai', offset: 28800 },
    { label: 'Berrechid - Morocco', timezone: 'Africa/Casablanca', offset: 3600 },
    { label: 'Kitakyu016bshu016b - Japan', timezone: 'Asia/Tokyo', offset: 32400 },
    { label: 'Basingstoke - United Kingdom', timezone: 'Europe/London', offset: 3600 },
    { label: 'Bridgetown - Barbados', timezone: 'America/Barbados', offset: -14400 },
    { label: 'Ventura, CA - United States', timezone: 'America/Los_Angeles', offset: -25200 },
    { label: 'Birmingham - United Kingdom', timezone: 'Europe/London', offset: 3600 },
    { label: 'Brisbane - Australia', timezone: 'Australia/Brisbane', offset: 36000 },
    { label: 'North Charleston, SC - United States', timezone: 'America/New_York', offset: -14400 },
    { label: 'Kitakami - Japan', timezone: 'Asia/Tokyo', offset: 32400 },
  ];
}
