import pb from '../lib/pocketbase';
import { useQuery } from 'react-query';

async function getUserGroups(userId: string) {
  if (userId) {
    const records = await pb.collection('groups').getList(1, 50, {
      filter: `users.id?="${userId}"`,
      // Can be used if you don't want to pass in id
      // filter: `users.id?="${pb.authStore.model?.id}"`,
    });
    return records.items;
  }
}
function useUserGroupsQuery(userId: string) {
  return useQuery('userGroups', () => getUserGroups(userId));
}

async function getGroup(groupId: string) {
  return await pb.collection('groups').getOne(groupId);
}
function useGroupQuery(groupId: string) {
  return useQuery(['group', groupId], () => getGroup(groupId));
}

export { useUserGroupsQuery, useGroupQuery };
