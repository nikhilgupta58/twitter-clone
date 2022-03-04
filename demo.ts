  // const userDetails = useReactiveVar(userInfoVar)
  // const { user, error, isLoading } = useUser();
  // const [addUser, { data: userInfo, loading }] = useMutation(ADD_USER);
  React.useEffect(() => {
    if (user) {
      addUser({
        variables:
        {
          "email": user.email,
          "name": user.name,
          "avatar": user.picture
        }
      });
    }
  }, [user])

  React.useEffect(() => {
    if (userInfo && !loading) {
      userInfoVar({
        id: userInfo.addUser.id,
        email: userInfo.addUser.email,
        name: userInfo.addUser.name, 
        avatar: userInfo.addUser.avatar
      })
    }
  }, [userInfo])

//   const Index = () => {


//     if (isLoading)
//       return <>Loading...</>
//     if (error)
//       return <>{error}</>
//     if (user) {
//       return (
//         <>
//           <Head>
//             <title>Twitter</title>
//             <link rel="icon" href="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" />
//           </Head>
//           <Link href={'/api/auth/logout'}>Logout</Link>
//           <Box>
//             {userDetails.name}
//           </Box>
//         </>
//       )
//     }
//     return (
//       <>
//         <Head>
//           <title>Twitter</title>
//           <link rel="icon" href="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" />
//         </Head>
//         <Link href={'/api/auth/login'}>Login</Link>
//       </>
//     )
//   }