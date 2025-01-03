import { Icon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import {
  BadgeDollarSignIcon,
  BriefcaseIcon,
  Coffee,
  DramaIcon,
  GamepadIcon,
  GraduationCapIcon,
  ImageIcon,
  LanguagesIcon,
  LaughIcon,
  Layers,
  LayoutPanelTop,
  MicroscopeIcon,
  PencilIcon,
  PrinterIcon,
  TerminalSquareIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { AssistantCategory } from '@/types/discover';

import { ICON_SIZE } from '../../../components/CategoryMenu';

export const useCategory = (fontsize?: number) => {
  const theme = useTheme();

  const { t } = useTranslation('discover');

  const size = fontsize ? { fontSize: fontsize } : ICON_SIZE;

  return [
    {
      icon: <Icon color={theme.colorTextSecondary} icon={LayoutPanelTop} size={size} />,
      key: AssistantCategory.All,
      label: t('category.assistant.all'),
    }
  ];
};

export const useCategoryItem = (key?: AssistantCategory, fontsize?: number) => {
  const items = useCategory(fontsize);
  if (!key) return;
  return items.find((item) => item.key === key);
};
