// Program Name: NavBar.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-02-29
// Last Modified Date: 2024-03-07

import React from 'react';
import { TopNavigation } from "@cloudscape-design/components";

const NavBar = ({ user, navbarItemClick }) => {
  return (
    <div id="navbar" style={{fontSize: 'body-l !important', position: 'sticky', top: 0, zIndex: 1002}}>
      <TopNavigation
        identity={{
            href: "#",
            title: "業務支援サービス using generative AI",
        }}
        utilities={[
            {
                type: "menu-dropdown",
                //text: user.username,
                //description: user.username,
                text: user.attributes ? user.attributes.email : user.username,
                description: user.attributes ? user.attributes.email : user.username,
                iconName: "user-profile",
                onItemClick: navbarItemClick,
                items: [
                    { id: "signout", text: "Sign out" }
                ]
            }
        ]}
        i18nStrings={{
            searchIconAriaLabel: "Search",
            searchDismissIconAriaLabel: "Close search",
            overflowMenuTriggerText: "More"
        }}
      />
    </div>
  );
};

export default NavBar;