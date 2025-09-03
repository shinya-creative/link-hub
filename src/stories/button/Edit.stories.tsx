import type { Meta, StoryObj } from '@storybook/react';
// import React from 'react'; // JSX 自動ランタイム使用時は不要


// 具体的なコンポーネントが未決定なら暫定の Stub を使えます。
// label または children をシンプルに表示します。
const Stub = ({ label = 'Edit', ...rest }: { label?: string } & Record<string, unknown>) => (
  <button
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      background: '#fff',
      cursor: 'pointer',
    }}
    {...rest}
  >
    {/* シンプルな代替アイコン */}
    <span aria-hidden>✏️</span>
    <span>{label}</span>
  </button>
);

// 下記 meta を編集:
// - title: サイドバーに表示されるパス (例: 'Atoms/Button')
// - component: 対象コンポーネント
// - parameters/argTypes: ドキュメントや操作の設定
const meta: Meta<typeof Stub> = {
  title: 'Category/Button',
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
