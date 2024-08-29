import { StoreApi, useStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer GetStateType }
  ? S & { use: { [K in keyof GetStateType]: () => GetStateType[K] } }
  : never

export function createZustandSelector<S extends StoreApi<object>>(_store: S) {
  const store = _store as WithSelectors<typeof _store>

  const state = store.getState()
  store.use = {} as Record<keyof typeof state, unknown>
  for (const k of Object.keys(state)) {
    ;(store.use as any)[k] = () => useStore(_store, (s) => s[k as keyof typeof s])
  }

  return store
}
