type Provider = 'dicebear' | 'ui-avatars' | 'robohash';
type DiceBearStyle = 'initials' | 'avataaars' | 'notionists' | 'thumbs' | 'bottts' | 'micah' | 'pixel-art' | 'lorelei' | 'adventurer' | 'croodles' | 'fun-emoji' | 'identicon' | 'rings' | 'shapes';
interface DiceBearOptions {
    provider: 'dicebear';
    style?: DiceBearStyle;
    size?: number;
    radius?: number;
    backgroundColor?: string;
}
interface UIAvatarsOptions {
    provider: 'ui-avatars';
    size?: number;
    rounded?: boolean;
    bold?: boolean;
    background?: string;
    color?: string;
    uppercase?: boolean;
}
interface RoboHashOptions {
    provider: 'robohash';
    size?: number;
    set?: 'set1' | 'set2' | 'set3' | 'set4' | 'set5';
}
type AvatarOptions = DiceBearOptions | UIAvatarsOptions | RoboHashOptions;
declare function getAvatar(name: string, options: AvatarOptions): string;
/** Quick initials avatar (like Gmail) */
declare function initialsAvatar(name: string, size?: number): string;
/** Quick cartoon avatar */
declare function cartoonAvatar(name: string, size?: number): string;
/** Quick robot avatar */
declare function robotAvatar(name: string, size?: number): string;
/** Quick pixel art avatar */
declare function pixelAvatar(name: string, size?: number): string;
/** Returns avatars from ALL providers at once for comparison */
declare function getAllAvatars(name: string, size?: number): {
    initials: string;
    cartoon: string;
    robot: string;
    pixel: string;
    notionists: string;
    thumbs: string;
    uiAvatars: string;
};
declare const DICEBEAR_STYLES: DiceBearStyle[];
declare const PROVIDERS: Provider[];

export { type AvatarOptions, DICEBEAR_STYLES, type DiceBearOptions, type DiceBearStyle, PROVIDERS, type Provider, type RoboHashOptions, type UIAvatarsOptions, cartoonAvatar, getAllAvatars, getAvatar, initialsAvatar, pixelAvatar, robotAvatar };
