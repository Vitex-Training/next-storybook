export type StateWithSetAction<State extends Record<string, unknown>> = PrimitiveSetAction<State> & State;

export type PrimitiveSetAction<State extends Record<string, unknown>> = {
  [K in keyof State as `set${Capitalize<K & string>}`]-?: (value: State[K]) => void;
};
