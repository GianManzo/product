import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderNav = styled.nav`
  margin-bottom: 2rem;
  ul {
    display: flex;
    padding: 0px;
    margin: 0;
    list-style: none;
    li {
      margin-right: 1rem;
      a {
        display: block;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        background: #eee;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        &:hover {
          background: #ddd;
        }
        &.active {
          background: #ddd;
        }
      }
    }
  }
`

export const Header = () => {
  return (
    <HeaderNav>
      <ul>
        <li>
          <NavLink to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="contact">Contato</NavLink>
        </li>
      </ul>
    </HeaderNav>
  )
}
