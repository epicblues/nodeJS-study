const decorator = () => {
  const methodDecorator = (
    target: Object,
    key: string,
    descriptor?: PropertyDescriptor
  ) => {
    console.log("target", target);
    console.log("descriptor", descriptor);

    const original = descriptor.value;
    descriptor.value = function () {
      console.log(key, "is decorated!");
    };

    return descriptor;
  };

  return methodDecorator;
};

class Hello {
  constructor() {
    console.log("hello");
  }
  @decorator()
  decorated() {
    console.log("is this function Works?");
  }
}

new Hello().decorated();
