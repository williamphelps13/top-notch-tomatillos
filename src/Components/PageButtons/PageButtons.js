import React from 'react'
import './PageButtons.css'
import { Link } from 'react-router-dom'

const PageButtons = () => {
  return (
    <section>
      <Link to='/1' ><button>1</button></Link>
      <Link to='/2' ><button>2</button></Link>
      <Link to='/3' ><button>3</button></Link>
      <Link to='/4' ><button>4</button></Link>
      <Link to='/5' ><button>5</button></Link>
    </section>
  )
}

export default PageButtons