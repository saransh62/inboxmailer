
export default {
    async rewrites() {
      return [
        {
          source: '/api/auth/google-login',
          destination: 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com',
        },
      ];
    },
  };
  