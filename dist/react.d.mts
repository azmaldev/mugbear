import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { DiceBearStyle } from './index.mjs';

interface MugBearAvatarProps {
    /** Name or username — same name always gives same avatar */
    name: string;
    /** Which provider to use */
    provider?: 'dicebear' | 'ui-avatars' | 'robohash';
    /** DiceBear style (only used when provider is 'dicebear') */
    style?: DiceBearStyle;
    /** Size in pixels */
    size?: number;
    /** Circle or square */
    shape?: 'circle' | 'square';
    /** Alt text for accessibility */
    alt?: string;
    /** Extra CSS class */
    className?: string;
    /** Inline styles */
    imgStyle?: React.CSSProperties;
    /** Called when avatar fails to load */
    onError?: () => void;
}
declare function MugBearAvatar({ name, provider, style, size, shape, alt, className, imgStyle, onError, }: MugBearAvatarProps): react_jsx_runtime.JSX.Element;
interface AvatarWithFallbackProps extends MugBearAvatarProps {
    fallbackBg?: string;
    fallbackColor?: string;
}
declare function AvatarWithFallback({ name, fallbackBg, fallbackColor, size, shape, ...rest }: AvatarWithFallbackProps): react_jsx_runtime.JSX.Element;

export { AvatarWithFallback, type AvatarWithFallbackProps, MugBearAvatar, type MugBearAvatarProps };
