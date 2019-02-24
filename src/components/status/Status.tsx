import * as React from 'react';
import {REVIEW_STATUS} from '../../types';
import styled from 'styled-components';

const statusColor = {
  [REVIEW_STATUS.NEW]: '#efefef',
  [REVIEW_STATUS.APPROVING]: '#7382D0',
  [REVIEW_STATUS.PROCCESSING]: '#FFD481',
  [REVIEW_STATUS.PENDING]: '#efefef',
  [REVIEW_STATUS.DONE]: '#7BD073',
};

const statusTitle = {
  [REVIEW_STATUS.NEW]: 'Not submited',
  [REVIEW_STATUS.APPROVING]: 'Ready for check',
  [REVIEW_STATUS.PROCCESSING]: 'In review',
  [REVIEW_STATUS.PENDING]: 'Waiting for review',
  [REVIEW_STATUS.DONE]: 'Done',
};

const StatusLine = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  ${({color}) => `background-color: ${color}`}
`;
const Title = styled.div`
  font-size: 16px;
`;

export interface StatusProps {
  status: REVIEW_STATUS;
}

const Status: React.SFC<StatusProps> = ({status}) => {
  return (
    <StatusLine>
      <Dot color={statusColor[status]} />
      <Title>{statusTitle[status]}</Title>
    </StatusLine>
  );
};

export default Status;
