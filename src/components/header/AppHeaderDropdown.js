import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilArrowCircleLeft,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useAuth0 } from "@auth0/auth0-react";

const AppHeaderDropdown = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={(isAuthenticated) ? user.picture : 'avatar.png'} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem onClick={() => logout({ returnTo: window.location.origin })}>
          <CIcon icon={cilArrowCircleLeft} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown