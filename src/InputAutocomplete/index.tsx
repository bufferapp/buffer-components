import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'uuid' or its corresponding typ... Remove this comment to see the full error message
import uuid from 'uuid';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';
import Text from '../Text';
import {
  calculateStyles,
} from '../lib/utils';
import {
  aquaHaze,
  white,
} from '../style/color';

const matchValueToItem = (item: any, value: any) =>
  item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;

const InputAutocomplete = ({
  input: {
    value,
    onChange,
  },

  onSelect,
  items,
  sortItems,
  placeholder,
  onFocusHandler,
  onBlurHandler,
  disabled
}: any) => {
  const renderItem = ({
    label
  }: any, isHighlighted: any) => {
    const style = calculateStyles({
      default: {
        padding: '2px 6px',
        cursor: 'default',
        display: 'block',
        position: 'relative',
      },
      isHighlighted: {
        color: 'white',
        background: `${aquaHaze}`,
        padding: '2px 6px',
        cursor: 'default',
      },
    }, {
      isHighlighted,
    });
    return (
      <div style={style}>
        <Text
          key={uuid()}
        >
          {label}
        </Text>
      </div>
    );
  };

  const inputStyle = {
    margin: '0 0 0 0',
    padding: '.5rem',
    fontSize: '.8rem',
    backgroundColor: '#fff',
    border: '1px solid #e6ebef',
    borderRadius: '2px',
    width: '100%',
  };

  const notEmpty = items.length > 1;
  const menuStyle = calculateStyles({
    default: {
      margin: '0.25rem 0 0 0',
      backgroundColor: `${white}`,
      position: 'absolute',
    },
    notEmpty: {
      margin: '0.25rem 0 0 0',
      backgroundColor: `${white}`,
      border: '1px solid #e6ebef',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(50, 59, 67, 0.3)',
      position: 'absolute',
      zIndex: '3000',
    },
  }, {
    notEmpty,
  });

  const wrapperStyle = {
    display: 'flex',
    width: '100%',
  };

  return (
    <div>
      <Autocomplete
        value={value}
        inputProps={{
          id: 'states-autocomplete',
          style: inputStyle,
          placeholder,
          onFocus: onFocusHandler,
          onBlur: onBlurHandler,
          disabled,
        }}
        items={items}
        getItemValue={(item: any) => item.label}
        shouldItemRender={matchValueToItem}
        sortItems={sortItems}
        onChange={onChange}
        onSelect={(val: any, obj: any) => {
          value = val;
          onSelect(obj);
        }}
        renderItem={renderItem}
        menuStyle={menuStyle}
        wrapperStyle={wrapperStyle}
      />
    </div>
  );
};

InputAutocomplete.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  sortItems: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onBlurHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

InputAutocomplete.defaultProps = {
  value: '',
  items: [],
  placeholder: '',
  disabled: false,
};

export default InputAutocomplete;
