// import pb from '../lib/pocketbase';

// interface Props {
//   email: string;
//   name: string;
//   password: string;
// }

// async function register({ email, name, password }: Props) {
//   pb.authStore.clear();

//   const data = {
//     username: name,
//     email: email,
//     emailVisibility: true,
//     password: password,
//     passwordConfirm: password,
//     name: name,
//   };

//   const record = await pb.collection('users').create(data);

//   await pb.collection('users').requestVerification('test@example.com');
// }

// export default register;
