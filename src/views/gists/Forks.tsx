import React, { useState, useEffect } from 'react';
import { Avatar, ForkList } from './styles';
import { IFork, getForks } from '../../api/gists';

interface IProps {
  url: string;
}

const Forks = ({ url }: IProps) => {
  const [forks, setForks] = useState<IFork[]>([]);

  useEffect(() => {
    getForks(url).then(data => {
      let lastThreeForks = data;
      if (data.length > 3) {
        lastThreeForks = data.sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 3);
      }

      setForks(lastThreeForks);
    });
  }, []);

  if (!forks.length) {
    return null;
  }

  return (
    <ForkList>
      {forks.map(fork => (
        <li key={fork.id}>
          <a href={fork.html_url} target="_blank" rel="noreferrer">
            <Avatar src={fork.owner.avatar_url} alt={fork.owner.login} />
            <span>{fork.owner.login}</span>
          </a>
        </li>
      ))}
    </ForkList>
  );
};

export default Forks;
