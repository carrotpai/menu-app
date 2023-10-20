import styled from 'styled-components';
import { Container } from '@/shared/components';

export const CardContainer = styled(Container)`
  box-shadow: ${(props) => props.theme.shadow.main};
`;
