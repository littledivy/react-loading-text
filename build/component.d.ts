import React from 'react';
interface Props {
    extras: string[];
    interval: number;
}
interface State {
    index: number;
}
/**
usage_jsx: <LoadingView interval={1000} extras={["bruh"]} />
**/
declare class LoadingView extends React.Component<Props, State> {
    private timeout;
    state: State;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default LoadingView;
