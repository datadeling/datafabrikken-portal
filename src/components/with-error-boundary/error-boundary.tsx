import React, { Component, ComponentType } from 'react';

interface Props {
  fallback?: ComponentType<any>;
  logError?: boolean;
}

interface State {
  hasError: boolean;
  errorCode?: string;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, errorCode: error.message });
  }

  render() {
    const { hasError, errorCode } = this.state;
    const { fallback: Fallback, children } = this.props;

    return hasError && Fallback ? <Fallback errorCode={errorCode} /> : children;
  }
}

export default ErrorBoundary;
