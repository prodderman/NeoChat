import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

import { IProps } from './Message';

const styles = {
  message: rule({
    display: 'flex',
    fontSize: '25px',
    color: (props: IProps) => props.message.type === 'in' ? '#fff' : '#0f0',
    textShadow: '0px 0px 10px #0f0a',
  }),
  author: rule({
    flexShrink: 0,
    flexBasis: '160px',
    textAlign: 'right',
  }),
  text: rule({
    wordWrap: 'break-word',
    minWidth: 0,
  }),
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
