import { IconBrandTwitter } from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer>
      <div className='container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row'>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
          © AmuariDev 2024. All Rights Reserved.
        </p>

        <div>
          <a href='https://twitter.com/amuariDev'>
            <IconBrandTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
