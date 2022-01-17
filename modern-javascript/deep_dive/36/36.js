const parseURL = (url = "") => {
  const parsedURL = url.match(/^(\w+):\/\/([^\/]+)\/(.*)$/);

  if (!parsedURL) return {};

  const [, protocol, host, path] = parsedURL;

  return { protocol, host, path };
};

console.log(parseURL("http://naver.com/hello/masu/adsf?queryString=baka"));
