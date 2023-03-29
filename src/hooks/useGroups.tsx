import pb from '../lib/pocketbase';
import { useUserState } from '../state/store';
import { useMutation } from 'react-query';

type Props = {
  userId: string;
};

function useGroups() {
  const updateGroups = useUserState((state) => state.updateGroups);

  async function getGroups({ userId }: Props) {
    if (userId) {
      const records = await pb.collection('groups').getList(1, 50, {
        filter: `users.id?="${pb.authStore.model?.id}"`,
      });
      if (records) updateGroups(records.items);
    }
  }

  async function getGroup({ groupId }: { groupId: string }) {
    const record = await pb.collection('groups').getOne(groupId);
  }
  return useMutation(getGroups);
}

export default useGroups;
