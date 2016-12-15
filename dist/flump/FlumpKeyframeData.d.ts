import { IKeyframe } from "./IFlumpLibrary";
export declare class FlumpKeyframeData {
    index: number;
    duration: number;
    label: string;
    ref: string;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    pivotX: number;
    pivotY: number;
    visible: boolean;
    alpha: number;
    tweened: boolean;
    ease: number;
    constructor(json: IKeyframe | Array<any>);
    getValueOrder(): string[];
    toArray(): any[];
    fromArray(data: any): void;
}
