
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/mern-stack-development-services",
      permanent:true,
    },
  };
}

export default function LiveLinePage() {
  return null;
}