import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageviewSortForm from './PageviewSortForm';
import dayjs from 'dayjs';

describe('PageviewSortForm', () => {
  const renderComponent = () => {
    return render(<PageviewSortForm />);
  };

  it('renders form', () => {
    renderComponent();
    const formTitle = screen.getByText(
      'Choose a date, country, and result count:'
    );
    expect(formTitle).toBeInTheDocument();
  });

  it('renders the date field', () => {
    renderComponent();
    const dateFieldTitle = screen.getByText('Date');
    expect(dateFieldTitle).toBeInTheDocument();
  });

  it('renders the date field', () => {
    renderComponent();
    const dateFieldTitle = screen.getByText('Date');
    expect(dateFieldTitle).toBeInTheDocument();
  });

  it('renders the country field', () => {
    renderComponent();
    const countryFieldTitle = screen.getByText('Country');
    expect(countryFieldTitle).toBeInTheDocument();
  });

  it('renders the number-of-results field', () => {
    renderComponent();
    const resultsNumberField = screen.getByText('Number of Results');
    expect(resultsNumberField).toBeInTheDocument();
  });

  it('renders the correct default date value', () => {
    const today = dayjs();
    const yesterday = today.subtract('1', 'day').format('YYYY-MM-DD');

    renderComponent();
    const defaultDateValue = screen.getByDisplayValue(yesterday);
    expect(defaultDateValue).toBeInTheDocument();
  });

  it('renders the correct default country value', () => {
    renderComponent();
    const defaultCountryValue = screen.getByDisplayValue('United States');
    expect(defaultCountryValue).toBeInTheDocument();
  });

  it('renders the correct default number-of-results value', () => {
    renderComponent();
    const defaultResultsNumberValue = screen.getByDisplayValue('100');
    expect(defaultResultsNumberValue).toBeInTheDocument();
  });

  it('updates when a user chooses a new country', () => {
    renderComponent();
    fireEvent.change(screen.getByTestId('countrySelect'), {
      target: { value: 'FR' },
    });
    expect(screen.getByDisplayValue('France')).toBeInTheDocument();
  });

  it('updates when a user chooses a new number of results', () => {
    renderComponent();
    fireEvent.change(screen.getByTestId('resultsNumberSelect'), {
      target: { value: 25 },
    });
    expect(screen.getByDisplayValue('25')).toBeInTheDocument();
  });
});
