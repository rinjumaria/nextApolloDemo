import React from 'react';interface Props {
  name: string
}const Layout: React.FC<Props> = ({ name }) => (
  <p>Hello there, {name}</p>
)
export default Layout;