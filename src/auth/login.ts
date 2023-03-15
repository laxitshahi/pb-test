// import pb from '../lib/pocketbase';

// interface Props {
//   email: string;
//   password: string;
// }

// async function login({ email, password }: Props) {
//   pb.authStore.clear();
//   const authData = await pb
//     .collection('users')
//     .authWithPassword(email, password);

//   let users;
//   try {
//     users = await pb.collection('users').getFullList(200 /* batch size */, {
//       sort: '-created',
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   const isValid = pb.authStore.model ? true : false;

//   return { authData, users, isValid };
// }

// export default login;
