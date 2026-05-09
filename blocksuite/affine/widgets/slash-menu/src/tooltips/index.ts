import type { SlashMenuTooltip } from '../types';
import { CopyTooltip } from './copy';
import { DeleteTooltip } from './delete';
import { MoveDownTooltip } from './move-down';
import { MoveUpTooltip } from './move-up';
import { NowTooltip } from './now';
import { TodayTooltip } from './today';
import { TomorrowTooltip } from './tomorrow';
import { YesterdayTooltip } from './yesterday';

export const slashMenuToolTips: Record<string, SlashMenuTooltip> = {
  今天: {
    figure: TodayTooltip,
    caption: '今天',
  },

  明天: {
    figure: TomorrowTooltip,
    caption: '明天',
  },

  昨天: {
    figure: YesterdayTooltip,
    caption: '昨天',
  },

  现在: {
    figure: NowTooltip,
    caption: '现在',
  },

  上移: {
    figure: MoveUpTooltip,
    caption: '上移',
  },

  下移: {
    figure: MoveDownTooltip,
    caption: '下移',
  },

  复制: {
    figure: CopyTooltip,
    caption: '复制 / 创建副本',
  },

  删除: {
    figure: DeleteTooltip,
    caption: '删除',
  },
};
