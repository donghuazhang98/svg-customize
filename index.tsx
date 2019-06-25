import React from "react";
import classNames from "classnames";
import "./index.less";
import { svgBaseProps } from "./utils";

export interface IconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    className?: string;
    viewBox?: string;
    style?: React.CSSProperties;
    spin?: boolean;
    rotate?: number;
    ["aria-hidden"]?: React.AriaAttributes["aria-hidden"];
}

export interface IconProps {
    className?: string;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    component?: React.ComponentType<IconComponentProps>;
    viewBox?: string;
    spin?: boolean;
    rotate?: number;
    style?: React.CSSProperties;
}

const Icon: React.FunctionComponent<IconProps> = props => {
    // eslint-disable-next-line prettier/prettier
    const {
        //affect inner <i></i>
        className,

        //affect inner <svg></svg>
        component: Component,
        viewBox,
        spin,
        rotate,

        onClick,

        ...restProps
    } = props;

    const svgClassName = classNames(
        {
            [`icon`]: true,
            [`icon-spin`]: spin,
        },
        className,
    );

    const svgProps: IconComponentProps = {
        ...svgBaseProps,
    };

    let innerNode: React.ReactNode;

    if (Component) {
        innerNode = <Component {...svgProps}></Component>;
    }

    return (
        <i onClick={onClick} className={svgClassName} {...restProps}>
            {innerNode}
        </i>
    );
};

export default Icon;
