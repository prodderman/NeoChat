import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = {
  root: rule({
    position: 'relative',
    backgroundColor: '#000',
    height: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': rule({
      display: 'none',
    }),
  }),

  overlay: rule({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: `repeating-linear-gradient(0deg, #fff, #fff 1px, #555 1px, #555 calc(1px * 2)),
      repeating-linear-gradient(90deg, #F003, #0F03 1px, #00F3 2px)`,
    backgroundBlendMode: 'overlay',
    mixBlendMode: 'multiply',
    zIndex: 1,
  }),

  viewPort: rule({
    padding: '10px',
  }),

  message: rule({
    marginBottom: '5px',
  }),
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
