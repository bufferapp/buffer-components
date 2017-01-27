import { classNames } from './utils';

describe('utils', () => {
  describe('classNames', () => {
    it('should calculate string input class ', () => {
      const styles = {
        myClass: 'my class',
      };
      expect(classNames(styles, 'myClass'))
        .toBe(styles.myClass);
    });

    it('should calculate int arg classes', () => {
      const styles = {
        1: 'uno',
      };
      expect(classNames(styles, 1))
        .toBe(`${styles[1]}`);
    });

    it('should calculate multiple arg classes', () => {
      const styles = {
        myClass: 'my class',
        myOtherClass: 'my other class',
      };

      expect(classNames(styles, 'myClass', 'myOtherClass'))
        .toBe(`${styles.myClass} ${styles.myOtherClass}`);
    });

    it('should calculate array of classes', () => {
      const styles = {
        myClass: 'my class',
        myOtherClass: 'my other class',
      };
      expect(classNames(styles, ['myClass', 'myOtherClass']))
        .toBe(`${styles.myClass} ${styles.myOtherClass}`);
    });

    it('should not duplicate classes', () => {
      const styles = {
        myClass: 'my class',
      };
      expect(classNames(styles, 'myClass', 'myClass'))
        .toBe(`${styles.myClass}`);
    });

    it('should handle object of classes', () => {
      const styles = {
        myClass: 'my class',
        myOtherClass: 'my other class',
      };
      const switches = {
        myClass: true,
        myOtherClass: true,
      };
      expect(classNames(styles, switches))
        .toBe(`${styles.myClass} ${styles.myOtherClass}`);
    });

    it('should handle object with some classes switched off', () => {
      const styles = {
        myClass: 'my class',
        myOtherClass: 'my other class',
      };
      const switches = {
        myClass: true,
        myOtherClass: false,
      };
      expect(classNames(styles, switches))
        .toBe(`${styles.myClass}`);
    });

    it('should handle multiple input types', () => {
      const styles = {
        myClass: 'my class',
        myOtherClass: 'my other class',
        1: 'uno',
        stringClass: 'string class',
        arrayItemOne: 'array one',
        arrayItemTwo: 'array two',
      };
      const switches = {
        myClass: true,
        myOtherClass: true,
      };
      expect(classNames(
        styles,
        'stringClass',
        1,
        ['arrayItemOne', 'arrayItemTwo'],
        switches,
       ))
        .toBe(`${styles.stringClass} ${styles[1]} ${styles.arrayItemOne} ${styles.arrayItemTwo} ${styles.myClass} ${styles.myOtherClass}`);
    });
  });
});
