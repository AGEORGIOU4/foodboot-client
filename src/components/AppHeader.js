import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilApplicationsSettings, cilMenu } from '@coreui/icons'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const asideShow = useSelector((state) => state.asideShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })} >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CImage src='foodboot-logo-landscape.png' height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav>
        </CHeaderNav>
        <CHeaderNav >
          <CHeaderToggler
            className="list-toggler px-md-0 me-md-3" onClick={() => dispatch({ type: 'set', asideShow: !asideShow })} >
            <CIcon icon={cilApplicationsSettings} size="lg" />
          </CHeaderToggler>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
