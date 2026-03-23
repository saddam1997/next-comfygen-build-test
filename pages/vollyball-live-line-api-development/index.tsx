export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/volleyball-live-line-api-development",
      permanent: false,
    },
  };
}

export default function LiveLinePage() {
  return null;
}


