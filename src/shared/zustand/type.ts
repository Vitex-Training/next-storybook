import { AnyRecord, Anything } from 'src/types/common'

export type StateWithSetAction<State extends Record<string, unknown>> = PrimitiveSetAction<State> & State

export type SetStateValueCallback<State extends AnyRecord = AnyRecord, V = Anything> = (value: V) => V

export type PrimitiveSetAction<State extends Record<string, unknown>> = {
  [K in keyof State as `set${Capitalize<K & string>}`]-?: (
    value: State[K] | SetStateValueCallback<State, State[K]>,
  ) => void
}
