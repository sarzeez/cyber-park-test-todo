export const userService = {
  authenticate,
};

function authenticate(
  username: string,
  password: string,
): Promise<{ id: string; name: string; email: string }> | null {
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const user = {
      id: '9001',
      name: 'Web Admin',
      email: 'test@gmail.com',
    };

    return new Promise((res) =>
      setTimeout(() => {
        res(user);
      }, 1000),
    );
  }

  return null;
}
