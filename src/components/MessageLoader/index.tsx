import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

export const Loading = styled.div`
  max-width: 30px;
  display: flex;
  align-items: flex-start;

  > div {
    margin-left: 1rem;
  }
`;

const MessageLoader = () => {
  return (
    <Loading>
      <Skeleton circle width={52} height={52} baseColor="gray" />
      <div>
        <Skeleton width={200} baseColor="gray" />
        <Skeleton width={150} baseColor="gray" />
        <Skeleton
          width={150}
          baseColor="gray"
          style={{
            marginTop: 10,
          }}
        />
      </div>
    </Loading>
  );
};
export default MessageLoader;
