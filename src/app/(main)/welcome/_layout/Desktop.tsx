import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ORG_NAME } from '@/const/branding';
import { isCustomORG } from '@/const/version';
import Follow from '@/features/Follow';

const COPYRIGHT = `© ${new Date().getFullYear()} ${ORG_NAME}`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flexbox
        align="center"
        height="100%"
        justify="space-between"
        padding={24}
        style={{ overflow: 'hidden', position: 'relative' }}
        width="100%"
      >
        <div />
        <div
          style={{ maxHeight: 'calc(100% - 104px)', maxWidth: 1024, width: '100%' }}
        >
          {children}
        </div>
        <Flexbox align="center" direction="horizontal" justify="space-between">
          <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
        </Flexbox>
      </Flexbox>
    </>
  );
};

export default DesktopLayout;
