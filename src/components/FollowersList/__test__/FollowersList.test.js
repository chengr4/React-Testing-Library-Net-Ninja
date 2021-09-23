import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollerList from '../FollowersList';

const MockFollowList = () => {
  return (
    <BrowserRouter>
      <FollerList />
    </BrowserRouter>
  );
}

describe("FollowList", () => {
  test('render a follower', async () => {
    // render app into virtual DOM
    render(<MockFollowList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  test('render followers', async () => {
    // render app into virtual DOM
    render(<MockFollowList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});