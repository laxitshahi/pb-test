import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { useGroupQuery } from '../../hooks/useGroupQuery';

function Group() {
  const router = useRouter();
  console.log(router);
  const id = router?.query?.groupid || '';
  const groupId = (Array.isArray(id) ? id[0] : id) ?? '';
  const { data, isLoading, isError } = useGroupQuery(groupId);

  if (isLoading) {
    return <Loading />;
  }
  return <div></div>;
}

export default Group;
