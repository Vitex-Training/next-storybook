import { StoreApi, useStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer GetStateType }
  ? S & { use: { [K in keyof GetStateType]: () => GetStateType[K] } }
  : never

export function createSelectors<S extends StoreApi<object>>(_store: S) {
  const store = _store as WithSelectors<typeof _store>

  const state = store.getState()
  store.use = {} as Record<keyof typeof state, unknown>
  for (const k of Object.keys(state)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const func = () => useStore(_store, (s) => s[k as keyof typeof s])
    // @ts-expect-error The key is a string, but we know it's a key of the state
    store.use[k] = func()
  }

  return store
}