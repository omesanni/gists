import React, { useState, useMemo } from 'react';
import { uniq, debounce } from 'lodash';
import Forks from './Forks';
import Loader from '../../components/Loader';
import { Tag, Main, Table, SearchInput, GistWrapper, EmptyMessage } from './styles';
import { IGist, getUserGists } from '../../api/gists';

const Gists = () => {
  const [gists, setGists] = useState<IGist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = useMemo(
    () =>
      debounce(async (value: string): Promise<void> => {
        setIsLoading(true);
        try {
          const data = await getUserGists(value);
          setGists(data);
        } catch {
          setGists([]);
        } finally {
          setIsLoading(false);
        }
      }, 500),
    [],
  );

  const getFileTypes = (gist: IGist): string[] =>
    uniq(Object.keys(gist.files).map(key => gist.files[key].type));

  return (
    <Main>
      {isLoading && <Loader />}
      <SearchInput
        type="search"
        data-testid="input-search"
        placeholder="search by username"
        onChange={e => handleSearch(e.target.value)}
      />
      <GistWrapper>
        <Table>
          <thead>
            <tr>
              <th>Gist</th>
              <th>File Types</th>
              <th>Forks</th>
            </tr>
          </thead>
          <tbody>
            {!gists.length && (
              <tr>
                <td colSpan={3} className="empty">
                  <EmptyMessage>No gists found</EmptyMessage>
                </td>
              </tr>
            )}
            {gists.map((gist, i) => (
              <tr key={gist.id}>
                <td>
                  <a href={gist.git_pull_url} target="_blank" rel="noreferrer">
                    {gist.git_pull_url}
                  </a>
                </td>
                <td>
                  {getFileTypes(gist).map(language => (
                    <Tag key={language} isOdd={(i + 1) % 2 !== 0}>
                      {language}
                    </Tag>
                  ))}
                </td>
                <td>
                  <Forks url={gist.forks_url} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </GistWrapper>
    </Main>
  );
};

export default Gists;
