import { useRouter } from 'next/router';
import { useEffect } from 'react';
import getGroup from '../../hooks/useGroups';
import pb from '../../lib/pocketbase';

async function get(id: string) {
  const record = await pb.collection('groups').getOne(id);
  console.log(record);
}

function Group() {
  const router = useRouter();
  const id = router.query.groupid;

  const { mutate } = getGroup();

  useEffect(() => {
    // get(id);
  });

  return <div>{id}</div>;
}

export default Group;
