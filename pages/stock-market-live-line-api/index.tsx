export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/cricket-live-line-api",
      permanent: true, // SEO friendly (301)
    },
  };
}

export default function Page() {
  return null;
}
