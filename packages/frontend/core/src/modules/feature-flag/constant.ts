import type { FlagInfo } from './types';

// const isNotStableBuild = BUILD_CONFIG.appBuildType !== 'stable';
const isCanaryBuild = BUILD_CONFIG.appBuildType === 'canary';
const isMobile = BUILD_CONFIG.isMobileEdition;
const isIOS = BUILD_CONFIG.isIOS;
const isAndroid = BUILD_CONFIG.isAndroid;

export const AFFINE_FLAGS = {
  enable_ai: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-ai.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-ai.description',
    hide: true,
    configurable: true,
    defaultState: true,
  },
  enable_ai_network_search: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-ai-network-search.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-ai-network-search.description',
    hide: true,
    configurable: false,
    defaultState: true,
  },
  enable_ai_playground: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-ai-model-switch.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-ai-model-switch.description',
    configurable: isCanaryBuild,
    defaultState: isCanaryBuild,
  },
  enable_edgeless_text: {
    category: 'blocksuite',
    bsFlag: 'enable_edgeless_text',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-edgeless-text.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-edgeless-text.description',
    configurable: false,
    defaultState: true,
  },
  enable_color_picker: {
    category: 'blocksuite',
    bsFlag: 'enable_color_picker',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-color-picker.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-color-picker.description',
    configurable: false,
    defaultState: true,
  },
  enable_ai_chat_block: {
    category: 'blocksuite',
    bsFlag: 'enable_ai_chat_block',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-ai-chat-block.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-ai-chat-block.description',
    configurable: false,
    defaultState: true,
  },
  enable_ai_onboarding: {
    category: 'blocksuite',
    bsFlag: 'enable_ai_onboarding',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-ai-onboarding.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-ai-onboarding.description',
    configurable: false,
    defaultState: true,
  },
  enable_mind_map_import: {
    category: 'blocksuite',
    bsFlag: 'enable_mind_map_import',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-mind-map-import.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-mind-map-import.description',
    configurable: false,
    defaultState: true,
  },
  enable_block_meta: {
    category: 'blocksuite',
    bsFlag: 'enable_block_meta',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-block-meta.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-block-meta.description',
    configurable: isCanaryBuild,
    defaultState: true,
  },

  enable_emoji_folder_icon: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-emoji-folder-icon.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-emoji-folder-icon.description',

    feedbackType: 'discord',
    feedbackLink:
      'https://discord.com/channels/959027316334407691/1280014319865696351/1280014319865696351',
    configurable: true,
    defaultState: true,
  },
  enable_emoji_doc_icon: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-emoji-doc-icon.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-emoji-doc-icon.description',
    feedbackType: 'discord',
    feedbackLink:
      'https://discord.com/channels/959027316334407691/1280014319865696351',
    configurable: true,
    defaultState: true,
  },
  enable_editor_settings: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-editor-settings.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-editor-settings.description',
    configurable: false,
    defaultState: true,
  },
  enable_theme_editor: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-theme-editor.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-theme-editor.description',
    configurable: isCanaryBuild && !isMobile,
    defaultState: isCanaryBuild,
  },
  enable_advanced_block_visibility: {
    category: 'blocksuite',
    bsFlag: 'enable_advanced_block_visibility',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-advanced-block-visibility.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-advanced-block-visibility.description',
    configurable: true,
    defaultState: false,
  },
  enable_mobile_keyboard_toolbar: {
    category: 'blocksuite',
    bsFlag: 'enable_mobile_keyboard_toolbar',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-mobile-keyboard-toolbar.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-mobile-keyboard-toolbar.description',
    configurable: false,
    defaultState: isMobile,
  },
  enable_mobile_linked_doc_menu: {
    category: 'blocksuite',
    bsFlag: 'enable_mobile_linked_doc_menu',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-mobile-linked-doc-menu.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-mobile-linked-doc-menu.description',
    configurable: false,
    defaultState: isMobile,
  },
  enable_mobile_edgeless_editing: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-mobile-edgeless-editing.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-mobile-edgeless-editing.description',
    configurable: isMobile,
    defaultState: false,
  },
  enable_pdf_embed_preview: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-pdf-embed-preview.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-pdf-embed-preview.description',
    configurable: !isMobile,
    defaultState: true,
  },
  enable_editor_rtl: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-editor-rtl.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-editor-rtl.description',
    configurable: isCanaryBuild,
    defaultState: false,
  },
  enable_mobile_ai_button: {
    category: 'affine',
    displayName: '启用 AI 按钮',
    description: '在移动端启用 AI 按钮',
    configurable: isMobile && isIOS,
    defaultState: isMobile && isIOS,
  },
  enable_mermaid_wasm_native_renderer: {
    category: 'affine',
    displayName: '启用原生 Mermaid 渲染器',
    description:
      '使用新的 Mermaid 渲染器后端。Web 端使用 WASM，桌面端使用原生渲染器，移动端始终使用原生渲染器。原生渲染器速度快 10 倍以上，但其样式/美观质量以及支持的图形类型不如 JS 版本。',
    configurable: !isIOS && !isAndroid,
    defaultState: isIOS || isAndroid,
  },
  enable_turbo_renderer: {
    category: 'blocksuite',
    bsFlag: 'enable_turbo_renderer',
    displayName: '启用 Turbo 渲染器',
    description: '启用实验性无界 Turbo 渲染器',
    configurable: isCanaryBuild,
    defaultState: false,
  },
  enable_dom_renderer: {
    category: 'blocksuite',
    bsFlag: 'enable_dom_renderer',
    displayName: '启用 DOM 渲染器',
    description: '为图形元素启用 DOM 渲染器',
    configurable: true,
    defaultState: false,
  },
  enable_edgeless_scribbled_style: {
    category: 'blocksuite',
    bsFlag: 'enable_edgeless_scribbled_style',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-edgeless-scribbled-style.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-edgeless-scribbled-style.description',
    configurable: isCanaryBuild,
    defaultState: false,
  },
  enable_table_virtual_scroll: {
    category: 'blocksuite',
    bsFlag: 'enable_table_virtual_scroll',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-table-virtual-scroll.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-table-virtual-scroll.description',
    configurable: isCanaryBuild,
    defaultState: false,
  },
  enable_setting_subpage_animation: {
    category: 'affine',
    displayName: '启用设置子页面动画',
    description: '为设置子页面的打开/关闭应用动画',
    configurable: isCanaryBuild,
    defaultState: false,
  },
  enable_adapter_panel: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-adapter-panel.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-adapter-panel.description',
    configurable: isCanaryBuild,
    defaultState: false,
  },
  enable_view_analytics_panel: {
    category: 'affine',
    displayName: '启用视图分析面板',
    description: '在右侧边栏显示视图分析标签页。',
    configurable: true,
    defaultState: false,
  },
  enable_two_step_journal_confirmation: {
    category: 'affine',
    displayName: '启用两步日记确认',
    description:
      '启用后，必须先确认日记，然后才能创建新的日记。',
    configurable: isCanaryBuild,
    defaultState: isCanaryBuild,
  },
  enable_send_detailed_object_to_ai: {
    category: 'affine',
    displayName:
      'com.affine.settings.workspace.experimental-features.enable-ai-send-detailed-object.name',
    description:
      'com.affine.settings.workspace.experimental-features.enable-ai-send-detailed-object.description',
    configurable: true,
    defaultState: true,
  },
  enable_battery_save_mode: {
    category: 'affine',
    displayName: '启用省电模式（需要重启）',
    description:
      '限制此设备上的索引和其他计算密集型任务，以获得更安静的体验，但可能会导致搜索和其他功能的加载时间更长、延迟更高。',
    configurable: true,
    defaultState: isMobile,
  },
  enable_mobile_database_editing: {
    category: 'blocksuite',
    bsFlag: 'enable_mobile_database_editing',
    displayName: '启用移动端数据库编辑',
    description: '启用移动端数据库编辑',
    configurable: isMobile,
    defaultState: false,
  },
  enable_pdfmake_export: {
    category: 'blocksuite',
    bsFlag: 'enable_pdfmake_export',
    displayName: '启用 PDF 导出',
    description:
      '实验性 PDF 导出支持，可能包含错误的样式。',
    configurable: true,
    defaultState: false,
  },
} satisfies { [key in string]: FlagInfo };

// oxlint-disable-next-line no-redeclare
export type AFFINE_FLAGS = typeof AFFINE_FLAGS;
