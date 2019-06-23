import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = {
  input: rule({
    display: 'flex',
    fontSize: '25px',
    color: '#0f0',
    textShadow: '0px 0px 10px #0f0a',
  }),

  prompt: rule({
    marginRight: '10px',
  }),

  field: rule({
    background: 'none',
    border: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    width: '98%',
  }),
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
