export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/cryptocurrency-exchange-development",
      permanent: true,
    },
  };
}

export default function LiveLinePage() {
  return null;
}
















