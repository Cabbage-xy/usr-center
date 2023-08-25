/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
const ADMIN_ROLE = 1;
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.userRole === ADMIN_ROLE,
  };
}
