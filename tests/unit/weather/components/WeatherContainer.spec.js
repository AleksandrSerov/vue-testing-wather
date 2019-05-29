import Vuex from "vuex";
import WeatherContainer from "@/components/WeatherContainer";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import { expect } from "chai";
import sinon from "sinon";

describe("WeatherContainer.vue", () => {
  let wrapper;
  let getters;
  let actions;
  let store;
  let localVue;

  const setUpWrapper = loading => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    getters = {
      location: () => "New York",
      weatherDescription: () => "Loght Cloud",
      imageAbbr: () => "lc.png",
      weatherTemp: () => -10.0,
      loading: () => loading
    };
    const actions = {
      fetchWeather: sinon.stub()
    };
    store = new Vuex.Store({
      getters,
      actions
    });
  };

  wrapper = shallowMount(WeatherContainer, {
    localVue,
    store
  });
});
