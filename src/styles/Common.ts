import {theme} from "./Theme"

type FontPropsType = {
    fontFamily?: string
    fontWeight?: number;
    fontColor?: string
    lineHeight?: number
    letterSpacing?: string;
    Fmax?:number
    Fmin?:number
}

export const font = ({fontFamily, fontWeight, fontColor, lineHeight, letterSpacing,Fmax,Fmin}: FontPropsType) => `
    font-family: ${fontFamily || "Poppins"};
    font-weight: ${fontWeight || 400};
    color: ${fontColor || theme.color.font};
    line-height: ${lineHeight || 'normal'};
    letter-spacing: ${letterSpacing || '2.5px'};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`
