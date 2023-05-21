import { ReactElement } from 'react';

import './styles.scss';

type TDividerProps = {
    children?: ReactElement | string,
};
const Divider = (props: TDividerProps) => {
    const {
        children,
    } = props;

    return (
        <div className="divider-wrapper">
            <div className="divider-line-wrapper">
                <div className="divider-line" />
            </div>
            <div className="title">
                <div className="bg-light">
                    <span>{children}</span>
                </div>
            </div>
        </div>
    );
};

export default Divider;
