'use client'
import Homepage from '../../components/pages/homepage/Homepage'
import Layout from '../../components/layout/Layout'
import Post from '../../components/element/Post'
import SearchInput from '../../components/element/SearchInput'
import Button from '../../components/element/Button'
import { useRouter } from 'next/navigation'
import { useEffect , useState } from 'react'

export default function Search() {
  const router = useRouter()
  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     alert('You need to login first')
  //     router.push('/login')
  //   }
  // }, [])
  const [searchValue, setSearchValue] = useState('');
  return (
    <Layout title='tetifess'>
      <main className=' w-full h-screen text-black'>
        <Homepage />
        <div className="mt-5 flex justify-center">
          <SearchInput
            label="Search post"
            id="searchInput"
            placeholder="Enter keyword"
            setValue={setSearchValue}
            value={searchValue}
          />
          <div className="mx-4" />
          <SearchInput
            label="Search user"
            id="searchInput"
            placeholder="Enter keyword"
            setValue={setSearchValue}
            value={searchValue}
          />
        </div>
        <div className="flex justify-end mr-8">
          <Button size="sm" text="Search" />
        </div>
        <hr className="mt-5 border-t border-tertiery" />
      </main>
    </Layout>
  )
}
