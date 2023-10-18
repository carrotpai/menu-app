import styled from 'styled-components';
import ExclamationMarkIcon from '@/assets/exclamation.svg';

interface QueryStatusMessageProps {
  text: string;
}

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function QueryStatusMessage({ text }: QueryStatusMessageProps) {
  return (
    <Wrapper>
      <IconWrapper>
        <ExclamationMarkIcon />
      </IconWrapper>
      <p style={{ margin: 0, textAlign: 'center', width: '400px' }}>{text}</p>
    </Wrapper>
  );
}

export default QueryStatusMessage;
