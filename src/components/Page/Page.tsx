import Container from '@shared/ui-kit/components/Container';

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
