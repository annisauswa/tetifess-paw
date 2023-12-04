'use client'
import Homepage from '../../components/pages/homepage/Homepage'
import Layout from '../../components/layout/Layout'
import Post from '../../components/element/Post'
import Profile from '../../components/element/Profile'
import SearchInput from '../../components/element/SearchInput'
import Button from '../../components/element/Button'
import { useRouter } from 'next/navigation'
import { useEffect , useState } from 'react'
import axios from 'axios'

export default function Search() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])

  const [searchPostValue, setSearchPostValue] = useState('');
  const [searchUserValue, setSearchUserValue] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [post, setPost] = useState([])
  const [user, setUser] = useState([])

  const handleSearch = async () => {
    setNotFound(false);
    setPost([]);
    setUser([]);

    try {
      let apiEndpoint;

      if (searchPostValue) {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/posting/search?param=${searchPostValue}&username=${searchUserValue}`;
      } else if (searchUserValue) {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/user/search?param=${searchUserValue}`;
      } else {
        return;
      }

      const response = await axios.get(apiEndpoint, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      console.log(data);

      if (searchPostValue) {
        setPost(response.data);
      } else if (searchUserValue) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setNotFound(true);
    }
  };

  return (
    <Layout title='tetifess'>
      <main className='w-full h-screen text-black'>
      <div className="mt-5 flex flex-col md:flex-row justify-center">
        <SearchInput
          label="Search post"
          id="searchPostInput"
          placeholder="Enter keyword"
          setValue={setSearchPostValue}
          value={searchPostValue}
        />
        <SearchInput
          label="Search user"
          id="searchUserInput"
          placeholder="Enter keyword"
          setValue={setSearchUserValue}
          value={searchUserValue}
        />
      </div>
        <div className="flex justify-end mr-12">
          <Button size="sm" text="Search" onClick={handleSearch} />
        </div>
        <hr className="mt-5 border-t border-tertiery" />
        {notFound && (
          <p className="font-roboto text-gray-700 text-center mt-5">Your keyword doesn't bring any result. Try changing your keyword.</p>
        )}
        {post && (
          <div>
            {post.map((item) => (
              <Post
                  nama={item.userId.name}
                  username={item.userId.username}
                  timestamp='1h'
                  content={item.text}
                  like={item.likes_count}
              />
            ))}
          </div>
        )}
        {user && (
          <div>
            {user.map((item) => (
              <Profile
                  nama={item.name}
                  username={item.username}
                  bio={item.bio}
              />
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}
