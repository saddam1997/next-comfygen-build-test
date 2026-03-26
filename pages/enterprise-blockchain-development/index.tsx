export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/blockchain-development",
      permanent: true,
    },
  };
}

export default function LiveLinePage() {
  return null;
}