import axios from 'axios';
import { getForks, getUserGists } from '../gists';

describe('gists', () => {
  it('should return forks', async () => {
    const forks = [
      {
        id: 3,
        created_at: '2010-02-19T21:00:47Z',
        html_url: 'html_url_2',
        owner: {
          login: 'user 2',
          avatar_url: 'http://avatar_url_2',
        },
      },
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: forks });

    expect(await getForks('forks')).toEqual(forks);
  });

  it('should return gists', async () => {
    const gists = [
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
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: gists });

    expect(await getUserGists('gists')).toEqual(gists);
  });
});
