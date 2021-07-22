import React, { useState, useEffect } from 'react'
import { ListItem, Icon, Link, makeStyles, List } from '@material-ui/core'
import { loadCSS } from 'fg-loadcss'

import PropTypes from 'prop-types'
import { SocialNetworksItems, ContactsItems } from '../../assets/dummyData/FooterItems'

const useStyles = makeStyles((theme) => ({
  info: {
    padding: theme.spacing(0.5),
    paddingLeft: '28%',
    fontSize: '0.9rem'
  },
  botones: {
    paddingLeft: '15px',
    '&:hover': {
      background: 'none',
      textDecoration: 'none'
    },
    color: 'rgba(0, 0, 0, 0.54)'
  }
}))

const MapFooter = ({ menuType }) => {
  const classes = useStyles()

  const [type, setType] = useState([])

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    )

    return () => {
      node.parentNode.removeChild(node)
    }
  }, [])

  useEffect(() => {
    if (menuType === 'SocialNetworks') {
      setType(SocialNetworksItems)
    } else {
      setType(ContactsItems)
    }
  }, [menuType])

  return (
    <div>
      <List className={classes.info}>
        {type.map((menuItem) => {
          const { menuTitle, pageURL, itemIcon } = menuItem
          return (
            <ListItem
              key={`${menuTitle}`}
              style={{ marginTop: '-10px' }}
            >
              <Icon
                className={`${itemIcon}`}
              />
              <label>
                <Link
                  href={pageURL}
                  className={classes.botones}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  {menuTitle}
                </Link>
              </label>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

MapFooter.propTypes = {
  menuType: PropTypes.string
}

export default MapFooter

//   return (
//     <div>Hola
//       {MenuItems.map((menuItem) => {
//         const mapItems = (listItems) => {
//           <List className={classes.info}>
//             {{listItems}.map((listItem) => {
//               const { menuTitle, pageURL, itemIcon } = listItem;
//               return (
//                 <ListItem
//                   key={`${menuTitle}`}
//                   color="secondary"
//                   className={classes.botones}
//                 >
//                   <Icon className={`${itemIcon}`}/>
//                   <label
//                     url={pageURL}
//                     className='linksFooter'
//                     style={{paddingTop:'auto', marginBottom:'0px', marginTop:'-5px'}}
//                   >
//                   <Link
//                     href={pageURL}
//                     className={classes.botones}
//                     style={{textDecoration:'none', color: 'rgba(0, 0, 0, 0.54)'}}
//                   >
//                     {menuTitle}
//                   </Link>
//                   </label>
//                 </ListItem>
//               );
//             })}
//           </List>
//         // return(
//         //     <div>
//         //         {prueba}
//         //     </div>
//         // )
//         }
//       })}
//       )
//       </div>
// }
