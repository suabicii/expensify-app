import React from "react";
import { shallow } from "enzyme";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); // jak za pierwszym razem uruchomimy test case, test zawsze przejdzie, gdyż nie istnieją snapshoty,
    // więc Jest tworzy nowy. Tworzy się snapshot tego, jak wyglądał output wyrenderowanego headera
    // Za drugim razem, jak odpalimy ten test case, będzie porównywanie z istniejącym snapshotem. Jeśli output jest równy, test przejdzie.

    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});