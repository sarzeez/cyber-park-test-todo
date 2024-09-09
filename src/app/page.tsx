import Container from '@/components/ui/Container';
import { getServerAuthSession } from '@/config/auth';

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <Container>
      <section>
        <h1>Home Page</h1>
        <div>{JSON.stringify(session)}</div>
      </section>
    </Container>
  );
}
