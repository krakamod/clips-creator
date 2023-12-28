import type { FC } from 'react';
import { type SvgIconProps } from '../components/SvgIcon';

export type IconProps = Omit<SvgIconProps, 'viewBox'>;

export type IconComponent = FC<IconProps>;
