import { shallowMount } from '@vue/test-utils'
import CatImg from '@/components/CatImg.vue'

describe('CatImg.vue', () => {
  it('renders props.imgUrl when passed', () => {
    const imgUrl = 'n595f280a557291a9750ebf58'
    const wrapper = shallowMount(CatImg, {
      propsData: { imgUrl }
    })
    expect(wrapper.text()).toMatch(imgUrl)
  })
})
