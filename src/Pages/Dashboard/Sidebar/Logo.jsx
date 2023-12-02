import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img
        className='hidden md:block'
        src="https://i.ibb.co/CKDzjjn/download-10.jpg"
        alt='logo'
        width='100'
        height='100'
      />
    </Link>
  )
}

export default Logo