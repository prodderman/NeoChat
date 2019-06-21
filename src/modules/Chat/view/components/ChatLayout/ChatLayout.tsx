import React from 'react';

import * as features from 'features';
import { featureConnect } from 'core';

interface IFeatureProps {
  chatFeatureEntry: features.chat.Entry;
}

type IProps = IFeatureProps;

function ChatLayout(props: IProps) {
  const { chatFeatureEntry: { containers } } = props;
  const { Chat } = containers;

  return <Chat />;
}

export { ChatLayout, IProps as IChatLayoutProps };
export default featureConnect({
  chatFeatureEntry: features.chat.loadEntry,
})(ChatLayout);
