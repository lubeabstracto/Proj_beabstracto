// pages/l/[link_name].js
import { useRouter } from 'next/router';

const LinkPage = () => {
  const router = useRouter();
  const { link_name } = router.query;

  return (
    <div>
      <p>Redirecting, please wait...</p>
    </div>
  );
};

export default LinkPage;
