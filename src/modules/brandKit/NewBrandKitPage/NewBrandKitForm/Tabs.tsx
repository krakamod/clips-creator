import { memo } from 'react';

import UiKitTabs from '@shared/ui-kit/components/Tabs';
import Tab from '@shared/ui-kit/components/Tab';

const Tabs: React.FC = () => {
  return (
    <UiKitTabs orientation="vertical" value={2}>
      <Tab label="Texts" />
      <Tab label="Logo" />
      <Tab label="Outro" />
      <Tab label="Custom brand kit" />
    </UiKitTabs>
  );
};

export default memo(Tabs);
