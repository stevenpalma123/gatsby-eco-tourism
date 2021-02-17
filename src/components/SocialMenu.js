import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaPinterest, FaLinkedin } from "react-icons/fa"

const SocialIcon = ({ label, ...props }) => {
  switch (label) {
    case "Facebook":
      return (
        <FaFacebook />
      )

    case "Twitter":
      return (
        <FaTwitter />
      )

    case "GitHub":
      return (
        <FaGithub />
      )

    case "LinkedIn":
      return (
        <FaLinkedin />
      )

    case "Instagram":
      return (
        <FaInstagram />
      )

    case "YouTube":
      return (
        <FaYoutube />
      )

    case "Pinterest":
      return (
        <FaPinterest />
      )

    default:
      return null
  }
}

const SocialMenu = ({ isExpanded }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "social-links-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            target
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <nav
      aria-label={(isExpanded ? "Expanded " : "") + "Social links"}
      className={!isExpanded ? "footer-social-wrapper" : ""}
    >
      <ul
        className={
          "social-menu" +
          (!isExpanded ? " footer-social" : "") +
          " reset-list-style social-icons fill-children-current-color"
        }
      >
        {wpMenu.menuItems.nodes.map((menuItem, index) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url
          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <li
              key={itemId}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom" +
                itemId
              }
            >
              <a
                href={path}
                target={menuItem.target ?? "_self"}
                rel="noreferrer noopener"
              >
                <span className="screen-reader-text">{menuItem.label}</span>
                <SocialIcon
                  className={"svg-icon"}
                  label={menuItem.label}
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SocialMenu
