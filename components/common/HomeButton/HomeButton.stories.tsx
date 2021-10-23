import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import HomeButton, { HomeButtonProps } from '.';

export default {
  title: 'Common/HomeButton',
  component: HomeButton,
  decorators: [withNextRouter],
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
  },
} as Meta;

export const Large = (args: HomeButtonProps) => <HomeButton {...args} />;
Large.args = {
  size: 2,
};

export const Green = (args: HomeButtonProps) => <HomeButton {...args} />;
Green.args = {
  color: 'green',
};
export const Default = (args: HomeButtonProps) => <HomeButton {...args} />;
Default.args = {};
