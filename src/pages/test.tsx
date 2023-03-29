import { useQuery } from 'react-query';
import pb from '../lib/pocketbase';
type Props = {
  userId: string;
};

async function getGroups({ userId }: Props) {
  if (userId) {
    const records = await pb.collection('groups').getList(1, 50, {
      filter: `users.id?="${pb.authStore.model?.id}"`,
    });
    if (records) return records.items;
  }
}

function test() {
  const { data } = useQuery('userGroups', () =>
    getGroups({ userId: '4tkiwiglmpt25ma' })
  );
  console.log(data);
  return <div></div>;
}

export default test;
