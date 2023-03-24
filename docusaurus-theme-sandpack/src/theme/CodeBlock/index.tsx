import React from 'react';
import Playground from '@theme/Playground';
import CodeBlock, {type Props} from '@theme-init/CodeBlock';

const withLiveEditor = (Component: typeof CodeBlock) => {
  function WrappedComponent(props: Props) {
    if (props.sandpack) {
      // @ts-expect-error: we have deliberately widened the type of language prop
      return <Playground {...props} />;
    }

    return <Component {...props} />;
  }

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);