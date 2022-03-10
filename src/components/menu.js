import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import './menu.css'

const Menu = () => {

  const { allWpMenu } = useStaticQuery(
    graphql`
      query {
        allWpMenu {
          nodes {
            slug
            menuItems {
              nodes {
                url
                label
              }
            }
          }
        }
      }
    `
  )

  return (
    <nav className="menu">
      <div>
        <ul>
          {allWpMenu.nodes[0].menuItems.nodes.map(item => 
            <li key={item.url}><Link to={item.url}>{item.label}</Link></li>
          )}
          </ul>
      </div>
    </nav>
  )

}

export default Menu