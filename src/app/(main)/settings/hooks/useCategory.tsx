import { Icon } from '@lobehub/ui';
import { Tag } from 'antd';
import { Bot, Brain, Cloudy, Info, Mic2, Settings2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import type { MenuProps } from '@/components/Menu';
import { SettingsTabs } from '@/store/global/initialState';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

export const useCategory = () => {
  const { t } = useTranslation('setting');
  const { enableWebrtc, showLLM, enableSTT, hideDocs } =
    useServerConfigStore(featureFlagsSelectors);

  const cateItems: MenuProps['items'] = useMemo(
    () =>
      [
        {
          icon: <Icon icon={Settings2} />,
          key: SettingsTabs.Common,
          label: (
            <Link href={'/settings/common'} onClick={(e) => e.preventDefault()}>
              {t('tab.common')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Sparkles} />,
          key: SettingsTabs.SystemAgent,
          label: (
            <Link href={'/settings/system-agent'} onClick={(e) => e.preventDefault()}>
              {t('tab.system-agent')}
            </Link>
          ),
        },
        enableWebrtc && {
          icon: <Icon icon={Cloudy} />,
          key: SettingsTabs.Sync,
          label: (
            <Link href={'/settings/sync'} onClick={(e) => e.preventDefault()}>
              <Flexbox align={'center'} gap={8} horizontal>
                {t('tab.sync')}
                <Tag bordered={false} color={'warning'}>
                  {t('tab.experiment')}
                </Tag>
              </Flexbox>
            </Link>
          ),
        },
        showLLM && {
          icon: <Icon icon={Brain} />,
          key: SettingsTabs.LLM,
          label: (
            <Link href={'/settings/llm'} onClick={(e) => e.preventDefault()}>
              {t('tab.llm')}
            </Link>
          ),
        },
       
        !hideDocs && {
          icon: <Icon icon={Info} />,
          key: SettingsTabs.About,
          label: (
            <Link href={'/settings/about'} onClick={(e) => e.preventDefault()}>
              {t('tab.about')}
            </Link>
          ),
        },
      ].filter(Boolean) as MenuProps['items'],
    [t, enableWebrtc, showLLM],
  );

  return cateItems;
};