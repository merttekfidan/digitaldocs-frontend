import React from 'react'
function NavbarItems({data}) {
    return (
          <>
               <a class="list-group-item list-group-item-action list-group-item-light p-3 active" href={data.link}>{data.title}</a>
          </>
     );

}

export default NavbarItems;