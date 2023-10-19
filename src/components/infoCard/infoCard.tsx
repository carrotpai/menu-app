import { CardContainer, CardText, CardTextUppercase } from './ui';
import ServerIcon from '@/assets/server.svg';
import { Avatar, Container, Divider } from '@/shared/components';

function InfoCard() {
  const user = 'Лоскутникова В.П';
  return (
    <CardContainer padding="12px 16px">
      <Container
        display="flex"
        direction="row"
        wrap="nowrap"
        alignItems="center"
        justifyContent="space-around"
      >
        <Avatar name={user} />
        <div>
          <CardTextUppercase>Название Фирмы</CardTextUppercase>
          <CardText>{user}</CardText>
        </div>
      </Container>
      <Divider />
      <Container
        display="flex"
        direction="row"
        wrap="nowrap"
        alignItems="center"
        justifyContent="space-around"
      >
        <div style={{ height: '28px' }}>
          <ServerIcon style={{ width: '28px', height: '28px' }} />
        </div>
        <CardTextUppercase>Складской учет</CardTextUppercase>
      </Container>
    </CardContainer>
  );
}

export default InfoCard;
