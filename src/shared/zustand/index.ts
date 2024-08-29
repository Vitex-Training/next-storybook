import { PrimitiveSetAction, StateWithSetAction } from 'src/shared/zustand/type'
import { capitalize } from 'src/shared/utils/string'

export type ZustandCommonState<InitialState extends Record<string, unknown>> = ReturnType<
  typeof generateZustandValueFromInitialState<InitialState>
>;

function stateWithSet<State extends Record<string, unknown>>(
  state: State,
  set: (value: State | Partial<State>) => void
): StateWithSetAction<State> {
  const action = Object.keys(state).reduce((acc, key: keyof State) => {
    return { ...acc, [`set${capitalize(key as string)}`]: (value: State[keyof State]) => {
        set({ [key]: value } as Partial<State>)
      }
    };
  }, {} as PrimitiveSetAction<State>);

  return { ...action, ...state };
}
export function generateZustandValueFromInitialState<State extends Record<string, unknown>>(
  initialState: State,
  set: (value: State | Partial<State>) => void
) {
  return {
    ...stateWithSet(initialState, set),
    reset: () => set(initialState),
  };
}
