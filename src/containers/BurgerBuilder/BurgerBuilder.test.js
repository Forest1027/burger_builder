import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from "./BurgerBuilder";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});
// strip out the component part and redux part
// test logic inside container only
describe('<BurgerBuilder/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
    });

    it('should render <BurgerBuilder/> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad:0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

});