import {
  calcActiveStyles,
  mergeStyles,
  calculateStyles,
} from './utils';

describe('utils', () => {
  describe('calcActiveStyles', () => {
    it('should return default if no styles passed in', () => {
      expect(calcActiveStyles())
        .toEqual(['default']);
    });
    it('should return enabled style', () => {
      const active = true;
      expect(calcActiveStyles({
        active,
      }))
        .toEqual(['default', 'active']);
    });
    it('should not return disabled style', () => {
      const notActive = false;
      expect(calcActiveStyles({
        notActive,
      }))
        .toEqual(['default']);
    });
  });

  describe('mergeStyles', () => {
    it('should return empty style', () => {
      expect(mergeStyles())
        .toEqual({});
      expect(mergeStyles([]))
        .toEqual({});
    });
    it('should return one style', () => {
      const styleA = {
        a: true,
      };
      expect(mergeStyles([styleA]))
        .toEqual({
          ...styleA,
        });
    });
    it('should merge two styles', () => {
      const styleA = {
        a: true,
      };
      const styleB = {
        b: 'yes',
      };
      expect(mergeStyles([styleA, styleB]))
        .toEqual({
          ...styleA,
          ...styleB,
        });
    });
  });

  describe('calculateStyles', () => {
    it('should throw if missing style', () => {
      expect(() => calculateStyles())
        .toThrowError('missing `default` style');
    });

    it('should throw if missing default style', () => {
      expect(() => calculateStyles({
        party: {
          color: 'green',
        },
      }))
        .toThrowError('missing `default` style');
    });

    it('should return default style', () => {
      const defaultStyle = {
        color: 'default',
      };
      expect(calculateStyles({
        default: defaultStyle,
      }))
        .toEqual(defaultStyle);
    });

    it('should return default style with enabled styles', () => {
      const defaultStyle = {
        color: 'default',
      };
      const hoveredStyle = {
        color: 'hover',
      };
      expect(calculateStyles({
        default: defaultStyle,
        hovered: hoveredStyle,
      }, { hovered: true }))
        .toEqual({
          ...defaultStyle,
          ...hoveredStyle,
        });
    });

    it('should ignore disabled styles', () => {
      const defaultStyle = {
        color: 'default',
      };
      const hoveredStyle = {
        color: 'hover',
      };
      expect(calculateStyles({
        default: defaultStyle,
        hovered: hoveredStyle,
      }, { hovered: false }))
        .toEqual({
          ...defaultStyle,
        });
    });

    it('should throw an error if activating non-existent style', () => {
      const defaultStyle = {
        color: 'default',
      };
      expect(() => calculateStyles({
        default: defaultStyle,
      }, { hovered: true }))
        .toThrowError('style `hovered` is not an available style');
    });
  });
});
