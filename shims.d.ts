import type { AttributifyAttributes } from 'unocss/preset-attributify'

// attrbutify mode not work, react-dom warning, e.g. Received `true` for a non-boolean attribute `flex`.
declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
