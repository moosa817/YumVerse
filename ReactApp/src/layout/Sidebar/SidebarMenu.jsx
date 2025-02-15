import React from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { getIcon } from "./icons";
import { NavLink } from "react-router-dom";

const collapsedSidebarStyles = {
  backgroundColor: "#242745",
  paddingLeft: "10px",
  margin: "10px 0",
  width: "100%",
};

const expandedSidebarStyles = {
  padding: "0 12px",
  margin: "10px auto",
  borderRadius: "7px",
  width: "220px",
};

const SidebarMenu = ({ state, menu }) => {
  const [sidebarConfig, setSidebarConfig] = state;

  const checkRouteIsActive = (route) => route === window.location.pathname;

  const getActiveItemClass = (route) => {
    return `sidebarMenuItem ${
      checkRouteIsActive(route) ? "activeMenuItem" : ""
    }`;
  };

  return (
    <section>
      <Menu
        menuItemStyles={{
          SubMenuExpandIcon: {
            ["&>span"]: {
              width: "7px",
              height: "7px",
              marginBottom: "2px",
            },
          },
          button: sidebarConfig.collapse
            ? collapsedSidebarStyles
            : expandedSidebarStyles,
        }}
      >
        {/* <h5 className="sidebarMenuTitles">GENERAL</h5> */}
        {menu.map(({ name, route, subMenu }, ind) => {
          if (subMenu) {
            return (
              <SubMenu
                key={ind}
                label={name}
                icon={getIcon(name)}
                rootStyles={{
                  button: {
                    "&": {
                      backgroundColor: "#242745",
                    },
                  },
                  ["&>div"]: {
                    backgroundColor: "#242745",
                  },
                  ["&>div>ul>li>a"]: {
                    width: "200px !important",
                    margin: "0 12px 5px auto !important",
                  },
                }}
              >
                {subMenu.map((subMenu, index) => (
                  <MenuItem
                    key={index}
                    component={
                      <NavLink
                        to={subMenu.route}
                        onClick={() =>
                          setSidebarConfig({
                            ...sidebarConfig,
                            toggle: false,
                          })
                        }
                        className={getActiveItemClass(subMenu.route)}
                      />
                    }
                  >
                    {subMenu.name}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }
          return (
            <MenuItem
              key={ind}
              icon={getIcon(name)}
              component={
                <NavLink
                  to={route}
                  onClick={() =>
                    setSidebarConfig({
                      ...sidebarConfig,
                      toggle: false,
                    })
                  }
                  className={getActiveItemClass(route)}
                />
              }
            >
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </section>
  );
};

export default SidebarMenu;
