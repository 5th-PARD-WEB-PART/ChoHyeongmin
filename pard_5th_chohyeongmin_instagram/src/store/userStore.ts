import { create } from 'zustand';

interface UserState {
  phone: string;
  fullName: string;
  nickname: string;     // 사용자 이름 (닉네임)
  password: string;
  setPhone: (value: string) => void;
  setFullName: (value: string) => void;
  setNickname: (value: string) => void;
  setPassword: (value: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  phone: '',
  fullName: '',
  nickname: 'h._.m1225',     // ✅ 기본값 설정됨!
  password: '',
  setPhone: (value) => set({ phone: value }),
  setFullName: (value) => set({ fullName: value }),
  setNickname: (value) => set({ nickname: value }),
  setPassword: (value) => set({ password: value }),
}));
