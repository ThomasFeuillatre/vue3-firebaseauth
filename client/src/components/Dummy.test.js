import { shallowMount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { useDummyStore } from '@store/dummy';
import Dummy from './Dummy.vue';

describe('Button', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const dummyStore = useDummyStore();
  });

  it('should exist', async () => {
    let wrapper = shallowMount(Dummy);
    expect(wrapper).toBeTruthy();
  });
});
