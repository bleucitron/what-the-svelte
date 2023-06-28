import { fetchUser } from '../helpers/user';

export async function load() {
  const user = await fetchUser();

  return user;
}
