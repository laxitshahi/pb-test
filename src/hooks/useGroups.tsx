import pb from '../lib/pocketbase';
import { useUserState } from '../state/store';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { Record } from 'pocketbase';
type Props = {
  groupIds: string[];
};

function useGroups() {
  const updateGroups = useUserState((state) => state.updateGroups);

  async function getGroups({ groupIds }: Props) {
    const records: Record[] = [];

    /**
     * @ERROR :: Not getting data on first render
     */
    if (groupIds) {
      await Promise.all(
        groupIds.map(async (id) => {
          const record = await pb.collection('groups').getOne(id);
          records.push(record);
        })
      );
    }
    updateGroups(records);
  }

  async function getGroup({ groupId }: { groupId: string }) {
    const record = await pb.collection('groups').getOne(groupId);
  }
  return useMutation(getGroups);
}

export default useGroups;
