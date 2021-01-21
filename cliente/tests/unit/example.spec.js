import { shallowMount} from "@vue/test-utils";
import Register from "@/components/Register.vue"
import Login from "@/components/login.vue"

describe("Register.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Register, {
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