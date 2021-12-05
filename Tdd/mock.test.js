const mockFn = jest.fn(); // 가짜 함수 input과 output만 의미가 있는
mockFn.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValue(30);

// mockFn을 호출했을 때 return value를 정할 수 있다. Once는 한번 호출했을 때만 적용되는 것
const mockPromiseFn = jest.fn();
mockPromiseFn.mockResolvedValueOnce({ name: "baka" });
// promise도 mock 할 수 있다.
mockFn();

it("mock func test, ", (done) => {
  console.log(mockFn.mock.calls); // 함수가 몇 번 호출되었는가, 호출된 인수는 어떤 것인가
  console.log(mockFn.mock.results); // 해당 함수 호출을 통해 반환되는 값은 어떤 것인가.

  mockPromiseFn()
    .then((value) => {
      try {
        expect(value).toStrictEqual({ name: "baku" }); // 실패하면 error를 throw 하는 것 같다.
      } catch (error) {
        console.log("내가 잡아낸 error", error); // 여기서 error를 잡아내버리면 test가 멀쩡하게 돌아간 것으로 간주한다.
        // 즉 틀린 답을 작성해도 done된 것으로 간주한다.
        // 즉 rejected가 아닌 resolved 상태로 변화한다.
        // 그래서 바로 아래의 then 문으로 이동한다. finally가 아닌.
      }
    })
    .then((value, error) => {
      console.log("이 then문이 잘 작성되었는가"); // 에러가 발생하면 이 상황이 오지도 않는다.
      done(value || error);
    });
  // .finally(done);
});
