axios interceptor:
b1: create an axios instance with custom configuration
b2: create a customhook useRefreshToken.js --> take a new accessToken
b3: create customHook useAxiosPrivate.js
implement steps

- create a config baseURL is url of server
- the customHook useRefreshToken set the value of refreshToken is refreshToken return from authUpdateUser after save token on cookies
- create requestInterceptor and responseInterceptor:

* requestInterceptor: handle request token client
* responseInterceptor: handle response server pass to client
  -cleanup function --> eject
