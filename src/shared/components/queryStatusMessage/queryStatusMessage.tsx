import Container from '../container/container';
import ExclamationMarkIcon from '@/assets/exclamation.svg';

interface QueryStatusMessageProps {
  text: string;
}

function QueryStatusMessage({ text }: QueryStatusMessageProps) {
  return (
    <Container
      display="flex"
      gap="12px"
      direction="column"
      wrap="nowrap"
      alignItems="center"
      justifyContent="center"
    >
      <Container display="flex" justifyContent="center">
        <ExclamationMarkIcon />
      </Container>
      <p style={{ margin: 0, textAlign: 'center', width: '400px' }}>{text}</p>
    </Container>
  );
}

export default QueryStatusMessage;
