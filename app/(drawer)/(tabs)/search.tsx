import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import SearchBar from '@/components/ui/searchBar'

function SearchPage () {
  return (
    <SafeAreaView>
      <SearchBar />
      <Text>SearchPage</Text>
    </SafeAreaView>
  )
}

export default SearchPage