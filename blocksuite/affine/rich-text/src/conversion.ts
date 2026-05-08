import {
  BulletedListIcon,
  CheckBoxIcon,
  CodeBlockIcon,
  DividerIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  NumberedListIcon,
  QuoteIcon,
  TextIcon,
} from '@blocksuite/affine-components/icons';
import type { TemplateResult } from 'lit';

/**
 * Text primitive entries used in slash menu and format bar,
 * which are also used for registering hotkeys for converting block flavours.
 */
export interface TextConversionConfig {
  flavour: string;
  type?: string;
  name: string;
  description?: string;
  hotkey: string[] | null;
  icon: TemplateResult<1>;
  searchAlias?: string[];
}

export const textConversionConfigs: TextConversionConfig[] = [
  {
    flavour: 'affine:paragraph',
    type: 'text',
    name: '文本',
    description: '使用纯文本开始输入。',
    hotkey: [`Mod-Alt-0`, `Mod-Shift-0`],
    icon: TextIcon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h1',
    name: '一级标题',
    description: '最大字号的标题。',
    hotkey: [`Mod-Alt-1`, `Mod-Shift-1`],
    icon: Heading1Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h2',
    name: '二级标题',
    description: '第二大字号的标题。',
    hotkey: [`Mod-Alt-2`, `Mod-Shift-2`],
    icon: Heading2Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h3',
    name: '三级标题',
    description: '第三大字号的标题。',
    hotkey: [`Mod-Alt-3`, `Mod-Shift-3`],
    icon: Heading3Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h4',
    name: '四级标题',
    description: '第四大字号的标题。',
    hotkey: [`Mod-Alt-4`, `Mod-Shift-4`],
    icon: Heading4Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h5',
    name: '五级标题',
    description: '第五大字号的标题。',
    hotkey: [`Mod-Alt-5`, `Mod-Shift-5`],
    icon: Heading5Icon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'h6',
    name: '六级标题',
    description: '第六大字号的标题。',
    hotkey: [`Mod-Alt-6`, `Mod-Shift-6`],
    icon: Heading6Icon,
  },
  {
    flavour: 'affine:list',
    type: 'bulleted',
    name: '无序列表',
    description: '创建无序列表。',
    hotkey: [`Mod-Alt-8`, `Mod-Shift-8`],
    icon: BulletedListIcon,
  },
  {
    flavour: 'affine:list',
    type: 'numbered',
    name: '有序列表',
    description: '创建有序列表。',
    hotkey: [`Mod-Alt-9`, `Mod-Shift-9`],
    icon: NumberedListIcon,
  },
  {
    flavour: 'affine:list',
    type: 'todo',
    name: '待办列表',
    description: '将任务添加到待办列表。',
    searchAlias: ['checkbox'],
    hotkey: null,
    icon: CheckBoxIcon,
  },
  {
    flavour: 'affine:code',
    type: undefined,
    name: '代码块',
    description: '带格式的代码片段。',
    hotkey: [`Mod-Alt-c`],
    icon: CodeBlockIcon,
  },
  {
    flavour: 'affine:paragraph',
    type: 'quote',
    name: '引用',
    description: '添加引用块以突出内容。',
    hotkey: null,
    icon: QuoteIcon,
  },
  {
    flavour: 'affine:divider',
    type: 'divider',
    name: '分割线',
    description: '在视觉上分隔内容。',
    hotkey: [`Mod-Alt-d`, `Mod-Shift-d`],
    icon: DividerIcon,
  },
];
