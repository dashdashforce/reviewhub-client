import * as React from 'react';
import {REVIEW_STATUS} from '../../types';
import styled from 'styled-components';
import Status from '../status/Status';

const Line = styled.div`
  display: flex;
  padding: 8px;
  border: 1px solid #efefef;
  border-radius: 8px;
`;

const Title = styled.div`
  flex: 1 1 auto;
  font-size: 18px;
  font-weight: bold;
`;

const StatusHolder = styled.div`
  flex: 0 0 120px;
  margin-left: 16px;
`;

export interface ReviewPreviewProps {
  title: string;
  status?: REVIEW_STATUS;
}

const ReviewPreview: React.SFC<ReviewPreviewProps> = ({title, status}) => {
  return (
    <Line>
      <Title>{title}</Title>
      {status && (
        <StatusHolder>
          <Status status={status} />
        </StatusHolder>
      )}
    </Line>
  );
};

export default ReviewPreview;
