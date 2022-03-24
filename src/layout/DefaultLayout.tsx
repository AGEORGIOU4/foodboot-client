import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react-pro'
import { AppAside, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = (): JSX.Element => {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <Suspense fallback={<CSpinner color="primary" />}>
              <Outlet />
            </Suspense>
          </CContainer>
        </div>
        <AppFooter />
      </div>
      <AppAside />
    </>
  )
}

export default DefaultLayout
