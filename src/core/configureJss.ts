import { create, createGenerateClassName } from 'jss';
import jssCompose from 'jss-compose';
import preset from 'jss-preset-default';
import { IJssDependencies } from 'shared/types/app';

export function configureJss(virtual?: boolean): IJssDependencies {
  const jss = create({ virtual, plugins: [...preset().plugins, jssCompose()] });
  jss.setup({ insertionPoint: 'jss-insertion-point' });
  const generateClassName = createGenerateClassName();

  return { jss, generateClassName };
}
