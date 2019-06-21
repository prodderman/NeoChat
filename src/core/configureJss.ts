import { create, createGenerateClassName } from 'jss';
import jssCompose from 'jss-compose';
import { IJssDependencies } from 'shared/types/app';

export function configureJss(virtual?: boolean): IJssDependencies {
  const jss = create({ virtual, plugins: [jssCompose()] });
  jss.setup({ insertionPoint: 'jss-insertion-point' });
  const generateClassName = createGenerateClassName();

  return { jss, generateClassName };
}
