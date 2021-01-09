import { shallowMount, mount } from "@vue/test-utils";
import Register from "@/views/Register.vue"
import Login from "@/views/login.vue"


describe("Register.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Register, {
      methods: { signUp:() => {} },
      data () {
        return {
          email: "",
          password: ""
        };
    }
  });
});
  
  it("Usuario registrado correctamente!", () => {
    expect(wrapper.exists()).toBe(true);
  });
})

describe("login.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      methods: { Login:() => {} },
      data () {
        return {
          email: "",
          password: ""
        };
      }
    });
  });

  it("Usuario logueado correctamente!", () => {
    expect(wrapper.exists()).toBe(true);
  });
})