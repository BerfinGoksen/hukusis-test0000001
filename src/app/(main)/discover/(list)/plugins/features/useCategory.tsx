import { Icon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import {
  Gamepad2,
  ImagePlay,
  LayoutPanelTop,
  MicroscopeIcon,
  PocketKnife,
  Receipt,
  ScanSearch,
  TwitterIcon,
  Umbrella,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PluginCategory } from '@/types/discover';

import { ICON_SIZE } from '../../../components/CategoryMenu';

export const useCategory = (fontsize?: number) => {
  const theme = useTheme();

  const { t } = useTranslation('discover');

  const size = fontsize ? { fontSize: fontsize } : ICON_SIZE;

  return [
    {
      icon: <Icon color={theme.colorTextSecondary} icon={LayoutPanelTop} size={size} />,
      key: PluginCategory.All,
      label: t('category.plugin.all'),
    }
  ];
};

export const useCategoryItem = (key?: PluginCategory, fontsize?: number) => {
  const items = useCategory(fontsize);
  if (!key) return;
  return items.find((item) => item.key === key);
};
