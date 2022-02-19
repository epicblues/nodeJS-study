// 해제할 수 있는 프록시

let objects = {
  data: "valuable data",
};

let { proxy, revoke } = Proxy.revocable(objects, {});

console.log(proxy.data);

revoke();

console.log(proxy.data); // 에러 발생(proxy 해재됨)
