# Change event fires extra times before IME composition ends

Enhanced Input Component

```ts
import { useRef, useState, forwardRef, InputHTMLAttributes } from 'react';

export const InputIME = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const { onChange, ...otherProps } = props;

  // log if on composition
  const onComposition = useRef(false);
  // temp input
  const [inputValue, setInputValue] = useState('');

  const _onChange = (event) => {
    setInputValue(event.target.value);

    // IME method start
    if (event.type === 'compositionstart') {
      onComposition.current = true;
      return;
    }

    // IME method end
    if (event.type === 'compositionend') {
      onComposition.current = false;
    }

    // handle parent onChange
    if (!onComposition.current) {
      onChange(event);
    }
  };

  return <input {...otherProps} ref={ref} value={inputValue} onChange={_onChange} onCompositionEnd={_onChange} onCompositionStart={_onChange} />;
});

InputIME.displayName = 'InputIME';

```

related issue: https://github.com/facebook/react/issues/3926
