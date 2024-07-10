import React from 'react'

import { Button } from '../../ui/button'
import { Input } from '../../ui/input'

const NewsletterForm = () => {
  return (
    <form className="flex flex-row w-full gap-2 mt-5">
      <Input
        type="email"
        placeholder="enter your email address"
        className="bg-whites text-stone-900"
      />
      <Button
        type="submit"
        size="default"
        className="bg-yellow-500  border border-yellow-500 hover:border-white text-stone-900 hover:bg-stone-900 hover:text-white"
      >
        Submit
      </Button>
    </form>
  )
}

export default NewsletterForm
