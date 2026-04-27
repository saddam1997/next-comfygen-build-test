export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/medicine-delivery-app-development",
      permanent:true,
    },
  };
}

export default function LiveLinePage() {
  return null;
}

