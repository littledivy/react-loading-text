import React from 'react';
import LoadingStatements from './statements';

interface Props {
    extras?: string[],
    interval?: number
}

interface State {
  index: number
}

/**
usage_jsx: <LoadingView interval={1000} extras={["bruh"]} />
**/
class LoadingView extends React.Component<Props, State> {
  private timeout: any;
  static defaultProps = {
    extras: [],
    interval: 2000
  }
  state: State = {
    index: 0
  }
  constructor(props: Props) {
    super(props);
    if(this.props.extras) {
      LoadingStatements.concat(this.props.extras)
    }
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.index;
      if(currentIdx + 1 === LoadingStatements.length) {
        this.setState({ index: 0 })
      } else {
        this.setState({ index: currentIdx + 1 });
      }
    }, this.props.interval);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let currentStatement = LoadingStatements[this.state.index];
    return (
              <React.Fragment>
                {currentStatement}
              </React.Fragment>
    );
  }
}

export default LoadingView;
