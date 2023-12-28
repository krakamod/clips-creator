import UiKitContainer from '@shared/ui-kit/components/Container';
import { styled } from '@shared/ui-kit/styles';

const Container = styled(UiKitContainer)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(14),
    paddingRight: theme.spacing(14),
  },
}));

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Page;
