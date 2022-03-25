import React, { useState } from 'react'
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react'
import { CButton, CCol, CFormSelect } from '@coreui/react'
import { INITIAL_DAYS } from '../../initial-values/INITIAL_DAYS'
import { auth0ApiCall } from 'src/api-ops/auth0';
import { askForPermissionToReceiveNotifications } from '../../push-notification'
const date = new Date();
let today = date.getDay();

const Dashboard = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState({ "user_metadata": { "role": 'N/A' } });
  const [loading, setLoading] = useState("false");

  const [selectedDay, setSelectedDay] = useState(today);
  var selectedDayVar = today;

  React.useEffect(() => {
    setLoading(true);
    Promise.resolve(
      auth0ApiCall('GET', 'https://foodboot.eu.auth0.com/api/v2/users', 'q: ' + user.email + ', search_engine: v3', true)
        .then(function (value) {
          setUserData(value);
          setLoading(false);
        }));
  }, []);

  const handleChange = (e) => {
    setSelectedDay(e.target.value);
    selectedDayVar = e.target.value;
    console.log(selectedDayVar)
  }

  return (
    <>
      <CCol sm={12}>
        <CFormSelect value={selectedDay} options={INITIAL_DAYS}
          onChange={handleChange} />
      </CCol>

      <CButton onClick={askForPermissionToReceiveNotifications} >
        Click to receive notifications
      </CButton>
    </>
  )
}

export default withAuthenticationRequired(Dashboard)
