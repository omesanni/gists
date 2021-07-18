import React from 'react';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import Gists from '../Gists';
import * as api from '../../../api/gists';

jest.mock('../../../api/gists', () => ({
  getForks: jest.fn(),
  getUserGists: jest.fn(),
}));

const forksForSecondGist = [
  {
    id: 3,
    created_at: '2010-02-19T21:00:47Z',
    html_url: 'html_url_2',
    owner: {
      login: 'user 2',
      avatar_url: 'http://avatar_url_2',
    },
  },
  {
    id: 4,
    created_at: '2010-02-20T21:00:47Z',
    html_url: 'html_url_3',
    owner: {
      login: 'user 3',
      avatar_url: 'http://avatar_url_3',
    },
  },
  {
    id: 5,
    created_at: '2010-02-21T21:00:47Z',
    html_url: 'html_url_4',
    owner: {
      login: 'user 4',
      avatar_url: 'http://avatar_url_4',
    },
  },
  {
    id: 6,
    created_at: '2010-02-22T21:00:47Z',
    html_url: 'html_url_5',
    owner: {
      login: 'user 5',
      avatar_url: 'http://avatar_url_5',
    },
  },
];

describe('Gists', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    (api.getUserGists as jest.Mock).mockResolvedValue([]);
    (api.getForks as jest.Mock).mockImplementation(async (url) => {
      if (url === 'forks-1') {
        return [
          {
            id: 3,
            created_at: '2010-02-19T21:00:47Z',
            html_url: 'html_url_1',
            owner: {
              login: 'user 1',
              avatar_url: 'http://avatar_url_1',
            },
          },
        ];
      }

      return forksForSecondGist;
    });
  });

  it('renders page', () => {
    render(<Gists />);

    expect(screen.getByTestId('input-search')).toBeInTheDocument();
    expect(screen.getByText('Gist')).toBeInTheDocument();
    expect(screen.getByText('File Types')).toBeInTheDocument();
    expect(screen.getByText('Forks')).toBeInTheDocument();
    expect(screen.getByText('No gists found')).toBeInTheDocument();
  });

  it('renders gists', async () => {
    (api.getUserGists as jest.Mock).mockResolvedValue([
      {
        id: 1,
        html_url: 'html_url_1',
        forks_url: 'forks-1',
        git_pull_url: 'gist url 1',
        files: {
          'test.md': { type: 'text/markdown' },
          'test.js': { type: 'application/javascript' },
        },
      },
      {
        id: 2,
        html_url: 'html_url_2',
        forks_url: 'forks-2',
        git_pull_url: 'gist url 2',
        files: {
          'test.txt': { type: 'text/plain' },
        },
      },
    ]);

    render(<Gists />);

    fireEvent.change(await screen.getByTestId('input-search'), { target: { value: 'test' } });
    jest.runOnlyPendingTimers();

    expect(await screen.findByText('gist url 1')).toBeInTheDocument();
    expect(screen.getByText('gist url 2')).toBeInTheDocument();
    expect(screen.getByText('text/plain')).toBeInTheDocument();
    expect(screen.getByText('text/markdown')).toBeInTheDocument();
    expect(screen.getByText('application/javascript')).toBeInTheDocument();
    expect(await screen.findByText('user 1')).toBeInTheDocument();
    expect(screen.getByText('user 3')).toBeInTheDocument();
    expect(screen.getByText('user 4')).toBeInTheDocument();
    expect(screen.getByText('user 5')).toBeInTheDocument();
    expect(screen.queryByText('No gists found')).not.toBeInTheDocument();
  });
});
