import React, { useState } from 'react'
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react'
import { CCard, CCardBody, CCardHeader, CFormLabel, CFormSelect, CRow, CCol, CSpinner } from '@coreui/react'
import { convertDays, INITIAL_DAYS } from '../../initial-values/INITIAL_DAYS'
import { auth0ApiCall } from 'src/api-ops/auth0';
import { askForPermissionToReceiveNotifications } from '../../push-notification'
import Switch from "react-switch";
import { restApiGet } from 'src/api-ops/rest';
import { mainUrl } from 'src/common/common';
import { CDataTable } from './CDataTable';

const date = new Date();
let today = date.getDay();

const Dashboard = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState({ "user_metadata": { "role": 'N/A' } });
  const [clientData, setClientData] = useState({});
  const [clientMealPlan, setClientMealPlan] = useState({});
  const [clientFoodCombinations, setClientFoodCombinations] = useState([]);

  const [loading, setLoading] = useState("false");

  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedDayInString, setSelectedDayInString] = useState(convertDays(today));
  var selectedDayVar = today;

  const [selectedPermission, setSelectedPermission] = useState(false);

  var client_id = "";
  var meal_plan_id = "";

  // Retrieve user info from Auth0
  React.useEffect(() => {
    setLoading(true);
    Promise.resolve(
      auth0ApiCall('GET', 'https://foodboot.eu.auth0.com/api/v2/users', 'q: ' + user.email + ', search_engine: v3', true)
        .then(function (value) {
          setUserData(value);
        }));
    setLoading(false);
  }, []);

  // Retrieve Client Info By Email / Meal Plan By Client ID / Food Combinations By Meal Plan ID
  React.useEffect(() => {
    GetData();
  }, []);

  // Retrieve Client Info By Email / Meal Plan By Client ID / Food Combinations By Meal Plan ID
  const GetData = () => {
    setLoading(true);
    Promise.resolve(
      restApiGet(mainUrl + '/client/' + user.email, true)
        .then(function (value) {
          setClientData(value);
          client_id = value.id;
          console.log("Client's info: ", value);

          if (value) {
            // Retrieve Meal Plan By client_id          
            Promise.resolve(
              restApiGet(mainUrl + '/meal-plans/' + client_id, true)
                .then(function (value) {
                  setClientMealPlan(value);
                  meal_plan_id = value.id;
                  console.log("Client's Meal Plan Info: ", value);

                  // Retrieve  Food Combinations By meal_plan_id & day
                  if (value) {
                    Promise.resolve(
                      restApiGet(mainUrl + '/meal-plans/food-combinations/' + meal_plan_id + '/' + convertDays(selectedDayVar), true)
                        .then(function (value) {
                          setClientFoodCombinations(value);
                          console.log("Client's Food Combinations: ", value);
                          setLoading(false);
                        }));
                  } else {
                    setLoading(false);
                  }
                }));
          } else {
            setLoading(false);
          }
        }));

  };

  const handleChangeDay = (e) => {
    setSelectedDay(e.target.value);
    setSelectedDayInString(convertDays(parseInt(e.target.value)));
    selectedDayVar = parseInt(e.target.value);
    GetData();
  }

  const handleChangePermission = (e) => {
    setSelectedPermission(!selectedPermission);
    askForPermissionToReceiveNotifications();
  }

  return (
    <>
      <CRow >
        <CCol xs={12}>
          <CCard>
            <CCardHeader >
              <Switch id='notifications-toggler' className='float-end' onChange={handleChangePermission} value={selectedPermission} checked={selectedPermission} />
              <CFormLabel htmlFor="notifications-toggler" style={{ marginRight: '10px' }} className='float-end'><strong>Reminder Notifications</strong></CFormLabel>
            </CCardHeader>

            <CCardBody>
              <CFormSelect value={selectedDay} options={INITIAL_DAYS}
                onChange={handleChangeDay} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow >
        <CCol xs={12} style={{ display: (loading) ? 'none' : 'block' }}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>My Personal Nutrition Plan</strong> <small>Created with foodboot</small>
            </CCardHeader>
            <CCardBody>

              <h1 style={{ margin: '10px 10px 16px' }}>{selectedDayInString}</h1>
              <CDataTable data={clientFoodCombinations} typeOfMeal='Breakfast' color={'#d5f1de'} />
              <CDataTable data={clientFoodCombinations} typeOfMeal='Morning Snack' color={'#d6ebff'} />
              <CDataTable data={clientFoodCombinations} typeOfMeal='Lunch' color={'#feefd0'} />
              <CDataTable data={clientFoodCombinations} typeOfMeal='Afternoon Snack' color={'#d6d2f8'} />
              <CDataTable data={clientFoodCombinations} typeOfMeal='Dinner' color={'#fadddd'} />

            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} style={{ textAlign: 'center', display: (loading) ? 'block' : 'none', marginTop: '120px' }}>
          <CSpinner variant='grow' color='success' />
        </CCol>
      </CRow >

    </>
  )
}

export default withAuthenticationRequired(Dashboard)
