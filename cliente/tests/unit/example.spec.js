import { shallowMount} from "@vue/test-utils";
import Register from "@/components/Register.vue"
import Login from "@/components/login.vue"

describe("Register.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Register, {
      data () {
        return {
          email: "prueba@prueba.com",
          password: "prueba123"
        };
    }
  });
});
  
  it("Conexion echa!", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("Sign up hecho!", () => {
    const button = wrapper.find('button');
    button.trigger('click')
  });
})

describe("login.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      data () {
        return {
          email: "prueba@prueba.com",
          password: "prueba123"
        };
      }
    });
  });

  it("Conexion echa!", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Log In hecho!", () => {
    const button = wrapper.find('button');
    button.trigger('click')
  });
})