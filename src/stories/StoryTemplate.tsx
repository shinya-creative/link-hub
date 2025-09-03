// StoryTemplate.tsx
// 使い方:
// 1) このファイルを対象コンポーネントの横にコピー
// 2) コンポーネントの import、meta.title、meta.component、args を編集
// 3) 必要に応じて argTypes/parameters/render/play を追加
// Storybook 8 (react-vite) + TypeScript 想定

import type { Meta, StoryObj } from '@storybook/react';
// import React from 'react'; // JSX 自動ランタイム使用時は不要

// あなたのコンポーネントに差し替えてください
// import YourComponent from '@/components/YourComponent';

// 具体的なコンポーネントが未決定なら暫定の Stub を使えます。
// label または children をシンプルに表示します。
const Stub = ({ label = 'Hello', ...rest }: { label?: string } & Record<string, unknown>) => (
  <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }} {...rest}>
    {label}
  </div>
);

// 下記 meta を編集:
// - title: サイドバーに表示されるパス (例: 'Atoms/Button')
// - component: 対象コンポーネント
// - parameters/argTypes: ドキュメントや操作の設定
const meta: Meta<typeof Stub> = {
  title: 'Category/YourComponent',
  component: Stub, // replace with YourComponent
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  // onClick: { action: 'clicked' }, // Actions アドオン連携
  // color: { control: 'color' },    // Controls で色を操作
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// 基本のストーリー (デフォルト args 使用)
export const Primary: Story = {
  args: {
    label: 'Primary',
  },
};

// バリエーション例
export const Secondary: Story = {
  name: 'Secondary',
  args: {
    label: 'Secondary',
  },
  parameters: {
  // backgrounds: { default: 'dark' }, // 背景切替などの例
  },
};

// カスタム render 例: レイアウトラッパーや複合表示に便利
export const CustomRender: Story = {
  args: {
    label: 'With custom render',
  },
  render: (args) => (
    <div style={{ padding: 16, background: '#f9fafb' }}>
      <Stub {...args} />
    </div>
  ),
};

// play 関数の例: 軽量なインタラクションテスト用
// export const WithPlay: Story = {
//   args: { label: 'Click me' },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await userEvent.click(await canvas.findByText('Click me'));
//   },
// };
