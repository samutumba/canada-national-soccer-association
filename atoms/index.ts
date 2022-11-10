import React, { useEffect } from "react";
import { atom, useSetRecoilState } from "recoil";
import { AtomEffect } from "recoil"
import { recoilPersist } from "recoil-persist"
import { Account } from "../prisma/generated/prisma-client-js";

const { persistAtom } = recoilPersist()

// const ssrCompletedState = atom({
//   key: "SsrCompleted",
//   default: false,
// })

// export const useSsrComplectedState = () => {
//   const setSsrCompleted = useSetRecoilState(ssrCompletedState)
//   return () => setSsrCompleted(true)
// }

// const setSsrCompleted = useSsrComplectedState()
// useEffect(setSsrCompleted, [setSsrCompleted])

// export const persistAtomEffect = <T,>(param: Parameters<AtomEffect<T>>[0]) => {
//   param.getPromise(ssrCompletedState).then(() => persistAtom(param));
// }; 

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
  effects_UNSTABLE: [persistAtom]
})

export const UserState = atom<Account|undefined>({
  key: 'userState',
  default: undefined,
  effects_UNSTABLE: [persistAtom]
})

export const TokenState = atom<string|undefined>({
  key: 'tokenState',
  default: undefined,
  effects_UNSTABLE: [persistAtom]
})

export const formState = atom<{
  open: boolean,
  form?: () => JSX.Element
}>({
  key: 'formState',
  default: {
    open: false,
  }
})

export const bgState = atom<{
  image: string
}>({
  key: 'bgState',
  default: {
    image: 'bg-stadium',
  }
})