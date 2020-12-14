import { shallowMount, mount } from "@vue/test-utils";
//import { exportAllDeclaration } from "@babel/types";
import HelloWorld from "@/components/HelloWorld.vue";
import Register from "@/views/Register.vue"
import Login from "@/views/login.vue"
//import LogOut from "@/components/logout.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Register.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Register, {
      data() {
        return {
          email: "hola@gmail.com",
          password: "hola123",
          error: false
        };
      }
    });
  });

  it("user is successfully registered", () => {
    expect(wrapper.exists()).toBe(true);
  });
})

describe("login.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      data() {
        return {
          email: "",
          password: ""
        };
      }
    });
  });

  it("user has logged in", () => {
    expect(wrapper.exists()).toBe(true);
  });
})