import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const data = [
  {
    "id": "77967",
    "meal_plan_id": 54,
    "title": "Cerels",
    "portion": "300gr",
    "start": "07:00",
    "end": "10:00",
    "typeOfMeal": "Breakfast",
    "day": "Monday"
  },
  {
    "id": "7031",
    "meal_plan_id": 54,
    "title": "Eggs",
    "portion": "3",
    "start": "10:00",
    "end": "12:00",
    "typeOfMeal": "Morning Snack",
    "day": "Monday"
  },
  {
    "id": "6166",
    "meal_plan_id": 54,
    "title": "Chicken with Rice",
    "portion": "350gr",
    "start": "13:00",
    "end": "15:00",
    "typeOfMeal": "Lunch",
    "day": "Monday"
  },
  {
    "id": "91490",
    "meal_plan_id": 54,
    "title": "Fruit",
    "portion": "1",
    "start": "16:30",
    "end": "18:00",
    "typeOfMeal": "Afternoon Snack",
    "day": "Monday"
  },
  {
    "id": "80782",
    "meal_plan_id": 54,
    "title": "Salmon with noodles",
    "portion": "250gr",
    "start": "19:30",
    "end": "21:00",
    "typeOfMeal": "Dinner",
    "day": "Monday"
  }
]

export const CDataTable = (props) => {
  let color = props.color;
  let flag = false;

  {
    props.data.filter(item => item.typeOfMeal.includes(props.typeOfMeal)).map(filteredItem => (
      (filteredItem) ? (flag = true) : (flag = false)
    ))
  }

  if (flag) {
    return (
      <div className="table-container" style={{ width: '100%' }}>
        <table>
          <thead>
            <tr >
              <th style={{ width: '12%', backgroundColor: color, borderTopLeftRadius: '5px' }}>From</th>
              <th style={{ width: '12%', backgroundColor: color, borderRight: '2px solid' }}>To</th>
              <th style={{ width: '51%', backgroundColor: color }}>{props.typeOfMeal}</th>
              <th style={{ width: '15%', backgroundColor: color, borderTopRightRadius: '5px' }}>Portion</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.filter(item => item.typeOfMeal.includes(props.typeOfMeal)).map(filteredItem => (
                <tr key={filteredItem.id}>
                  <td>{filteredItem.start}</td>
                  <td style={{ borderRight: '2px solid' }}>{filteredItem.end}</td>
                  <td>{filteredItem.title}</td>
                  <td>{filteredItem.portion}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}
