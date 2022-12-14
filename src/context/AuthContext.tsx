/*
 *存储全局用户信息
 */
import { useContext, createContext, useState, useMemo, useCallback, ReactNode } from 'react';

import { AuthForm, User } from '@/types/user';
import * as authJira from '@/utils/authJiraProvider';

const AuthContext = createContext<
    | {
          userData: User | null;
          login: (from: AuthForm) => Promise<void>;
          register: (from: AuthForm) => Promise<void>;
          logout: () => Promise<void>;
      }
    | undefined
>(undefined);

// context 对象接受一个名为 displayName 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容
AuthContext.displayName = 'AuthContext'; // "MyDisplayName.Provider" 在 DevTools 中

export const AuthProvider = (props: { children: ReactNode }) => {
    // 定义状态
    const [userData, setUserData] = useState<User | null>(null);

    // point free 消除user => setUserData(user)中的user参数
    // const login = (form: AuthForm) => authJira.login(form).then(user => setUserData(user));

    // 登陆页面获得用户名和密吗后，传给authJira生成toke
    const login = useCallback(
        (form: AuthForm) => authJira.login(form).then(setUserData),
        [setUserData]
    );
    // 注册页面获得用户名和密吗后，传给authJira生成toke
    const register = useCallback(
        (form: AuthForm) => authJira.register(form).then(setUserData),
        [setUserData]
    );
    // 登陆退出后，传给authJira移除toke
    const logout = useCallback(
        () => authJira.logout().then(() => setUserData(null)),
        [setUserData]
    );
    const value = useMemo(
        () => ({ userData, login, register, logout }),
        [userData, login, logout, register]
    );
    return (
        <AuthContext.Provider
            value={value}
            {...props}
        />
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth()and <AuthContext.provider> 一起使用');
    }
    return context;
};
