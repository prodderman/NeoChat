import React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';

import { ChatLayout } from './view/components';

const Chat: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.chat.getElementKey()}
        path={routes.chat.getRoutePath()}
        component={ChatLayout}
      />
    );
  },
};

export default Chat;
