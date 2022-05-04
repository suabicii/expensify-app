import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";

let expensesTotal;

beforeEach(() => {
    expensesTotal = 9434
});

test('should correctly render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expensesTotal}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});