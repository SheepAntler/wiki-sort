import Result from './Result';
import { render, screen } from '@testing-library/react';
import { sampleResultsUS } from '../../testData/sampleResults';

describe('Result', () => {
  const renderComponent = (props) => {
    const defaultProps = {
      results: sampleResultsUS.articles,
    };
    return render(<Result {...defaultProps} {...props} />);
  };

  it('renders at least one result tile', () => {
    renderComponent();
    const firstResultTitle = screen.getByText('Cookie (informatique)');
    expect(firstResultTitle).toBeInTheDocument();
  });

  it('sanitizes result titles, removing unwanted characters', () => {
    renderComponent();
    expect(screen.queryByText('Cookie_(informatique)')).not.toBeInTheDocument();
  });
});
