import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const authStatusAtom = atom({
  key: "authStatusAtom",
  default: {
    isAdmin: false,
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
