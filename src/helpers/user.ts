export type User = {
  id: string;
  name: string;
};

export function fetchUser() {
  return Promise.resolve({ id: 'my-user', name: 'Sacha' });
}
