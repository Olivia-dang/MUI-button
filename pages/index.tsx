import type { NextPage } from 'next'
import { Button } from '../components/Button';

const Home: NextPage = () => {
  function handleClick () {
    console.log("Hello there")
  }

  return (
    <div>
      <Button mainType={"Primary"} label={"Hi"} onClick={handleClick}></Button>
      
    </div>
  )
}

export default Home
