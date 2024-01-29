type Routes = Record<string, Record<string, string>>;

export const routes: Routes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
};
