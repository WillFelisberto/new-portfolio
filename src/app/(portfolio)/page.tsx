import HeroSection from '@/components/pages/home/HeroSection';
import KnownTechs from '@/components/pages/home/KnownTechs';
import { HOME } from './_graphql/home';
import createApolloClient from './_api/apollo-client';
export default async function Home() {
  const client = createApolloClient();

  // Fazer a query de dados no servidor
  const { data } = await client.query({
    query: HOME,
  });

  const { docs } = data.Abouts;

  return (
    <>
      <HeroSection
        name={docs[0].name}
        description={docs[0].description}
        imageUrl={docs[0].image.url}
        imageAlt={docs[0].image.alt}
        technologies={docs[0].technologies}
        social={docs[0].social}
      />
      <KnownTechs />
    </>
  );
}
