import { create } from 'zustand'
import { generateZustandValueFromInitialState, ZustandCommonState } from 'src/shared/zustand'
import { createZustandSelector } from 'src/shared/zustand/selector'
import { subscribeWithSelector } from 'zustand/middleware'

type State = {
  count: number
  countEven: number
}

type Action = {}

const initialState: State = {
  count: 10,
  countEven: 0,
}

type Store = ZustandCommonState<State> & Action
const useCounterStoreBase = create<Store>()(
  subscribeWithSelector((set) => {
    return {
      ...generateZustandValueFromInitialState<State>(initialState, set),
    }
  }),
)

export const counterStore = createZustandSelector(useCounterStoreBase)

export class CounterAction {
  static increment() {
    counterStore.getState().setCount((count) => count + 1)
  }

  static decrement() {
    counterStore.setState((state) => ({
      count: state.count - 1,
    }))
  }
}
