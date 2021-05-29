import React, { Component } from 'react' 
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

function handleClick(event) {
  event.preventDefault()

}

export default function SimpleBreadcrumbs() {
  return (

    <Breadcrumbs aria-label="breadcrumb">
        
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>

      <Link color="inherit" href="/https://github.com/SamanthaTucker" onClick={handleClick}>
        GitHub
      </Link>

      <Link color="inherit" href="/https://www.linkedin.com/in/samantha-tucker-1827a9128/" onClick={handleClick}>
        LinkedIn
      </Link>

    </Breadcrumbs>

  )
}
