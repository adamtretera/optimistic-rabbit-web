import type { FC } from 'react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

import { ArrowDown, ArrowUp, Close, MoonIcon, SearchIcon, SunIcon } from './Icons';
import { IconBox } from './Icon.styles';

export enum Types {
    MOON_ICON = 'moonIcon',
    SEARCH_ICON = 'searchIcon',
    SUN_ICON = 'sunIcon',
    ARROW_DOWN = 'arrowDown',
    ARROW_UP = 'arrowUp',
    CLOSE = 'close',
}

const assertIconExists = (type: never): void => console.warn(`Unknown icon type '${type}'`);

const getIcon = (type: Types) => {
    switch (type) {
        case Types.MOON_ICON:
            return MoonIcon;
        case Types.SEARCH_ICON:
            return SearchIcon;
        case Types.SUN_ICON:
            return SunIcon;
        case Types.ARROW_DOWN:
            return ArrowDown;
        case Types.ARROW_UP:
            return ArrowUp;
        case Types.CLOSE:
            return Close;

        default:
            assertIconExists(type);
    }
};

export interface IconProps {
    type: Types;
    size?: 'small' | 'medium' | 'large';
    label?: string;
}

export const Icon: FC<IconProps> & { Types: typeof Types } = ({ type, size = 'medium', label = '' }) => {
    const IconComponent = getIcon(type);

    return IconComponent ? (
        <IconBox size={size}>
            <AccessibleIcon label={label}>
                <IconComponent />
            </AccessibleIcon>
        </IconBox>
    ) : null;
};

Icon.Types = Types;
